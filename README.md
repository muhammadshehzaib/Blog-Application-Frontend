# Blogs App — Frontend

The web client for the Blogs App, built with **Next.js 14** (App Router). It
talks to the NestJS backend over HTTP for data and over **WebSockets** for
real-time updates.

---

## Feature overview

| Area | What the UI does |
|---|---|
| **Reading** | Browse blogs, read a post, see categories |
| **Authoring** | Create, edit and delete your own posts; "My posts" dashboard |
| **Real-time** | Live comments, live reaction counts and "user is typing" — pushed over a WebSocket, no refresh |
| **AI tools** | On a blog page: one-click AI summary and AI category suggestions |
| **Semantic recommendations** | A "Related" section showing posts similar in meaning, not keywords |
| **Auth** | Sign up, sign in, OTP-based password reset; role-aware navigation |
| **Admin** | Observability dashboard (health, metrics, queue, counters), blog moderation, user-role management, comment moderation |

---

## Tech stack

- **Framework** — Next.js 14, App Router
- **Language** — TypeScript, React 18
- **Styling** — Tailwind CSS + DaisyUI
- **Animation** — Framer Motion
- **Real-time** — `socket.io-client`
- **Auth** — JWT stored in a cookie (`js-cookie`), decoded client-side for role/userId

---

## How it talks to the backend

- **HTTP** — every data call uses `process.env.DEPLOYMENTLINK` as the API base URL, set in `next.config.mjs`.
- **WebSockets** — `hooks/useBlogSocket.tsx` opens a Socket.IO connection per blog page, authenticates with the JWT, joins a `post:<id>` room, and receives `commentCreated`, `reactionUpdated` and `userTyping` events.
- **AI / related** — `hooks/useBlogAi.tsx` calls the AI summarise / auto-tag endpoints and fetches semantic recommendations.
- **Auth** — `hooks/useAuth.tsx` reads the JWT cookie and decodes it to expose `token`, `userId`, `role` and `isAdmin`.

---

## Project structure

```
app/
├── page.tsx                  landing
├── blogs/                    blog list, [id] detail, [id]/edit
├── create-blogs/             new post composer
├── my-posts/                 the current user's posts (edit / delete)
├── profile/                  account profile
├── category/                 category management
├── admin/                    admin panel
│   ├── dashboard/            observability dashboard
│   ├── users/                user-role management
│   └── comments/             comment moderation
├── signin · signup · otp · forgetpassword · password
components/
├── blogs/                    BlogId, CreateBlog, EditBlog, MyPosts, Comments, …
├── admin/                    ObservabilityDashboard, UserRoles, CommentsModeration
└── Navigation, Footer, Signin, Signup, Profile, …
hooks/
├── useAuth.tsx               JWT cookie + decoded role/userId
├── useBlogSocket.tsx         live comments / reactions / typing
└── useBlogAi.tsx             AI summary, auto-tag, related posts
```

---

## Prerequisites

- **Node.js 20.x**
- The **backend** running and reachable (default `http://localhost:3002`)

---

## Environment / config

The API base URL is set in `next.config.mjs` under `env`:

```js
env: {
  LOCALHOST: "http://localhost:3002",
  DEPLOYMENTLINK: "http://localhost:3002",   // point at your backend
}
```

For local development, set `DEPLOYMENTLINK` to your local backend. Switch it to
the deployed backend URL before shipping.

Remote images are whitelisted in the same file — `res.cloudinary.com` for
uploaded covers and `picsum.photos` for seeded blog covers.

---

## Running locally

```bash
npm install
npm run dev          # http://localhost:3000
```

Make sure the backend is running first, otherwise data calls and the WebSocket
connection will fail.

---

## Testing the real-time features

1. Open the same blog post in a normal window and an incognito window, signed in as two different users.
2. Post a comment in one → it appears live in the other.
3. React in one → the live counts update in the other.
4. Start typing → the other window shows "… is typing".

---

## npm scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Next.js lint |

---

> ⚠️ **Deployment note:** WebSockets need a long-running server. Serverless
> platforms (e.g. Vercel functions) can host the Next.js frontend, but the
> backend's real-time layer must run on a persistent runtime.

🤖 Generated with [Claude Code](https://claude.com/claude-code)
