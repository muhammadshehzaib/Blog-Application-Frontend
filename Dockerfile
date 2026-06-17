# syntax=docker/dockerfile:1

# ---------- Build stage ----------
FROM node:20-alpine AS builder

WORKDIR /app

# These are read by the browser bundle, so they must be present at BUILD time.
# next.config.mjs exposes DEPLOYMENTLINK/LOCALHOST; NEXT_PUBLIC_* is auto-inlined.
ARG DEPLOYMENTLINK
ARG NEXT_PUBLIC_API_URL
ARG LOCALHOST
ENV DEPLOYMENTLINK=$DEPLOYMENTLINK
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV LOCALHOST=$LOCALHOST

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---------- Production stage ----------
FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Self-contained standalone server + static assets (next.config has output: 'standalone')
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]
