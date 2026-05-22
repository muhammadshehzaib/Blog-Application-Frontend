import { useEffect, useState } from "react";
import Cookies from "js-cookie";

interface JwtPayload {
  sub?: string;
  role?: string;
  tokenVersion?: number;
}

/** Decode a JWT payload client-side (no signature check — just reads claims). */
function decodeJwt(token: string): JwtPayload | null {
  try {
    let b64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    while (b64.length % 4) b64 += "=";
    return JSON.parse(atob(b64));
  } catch {
    return null;
  }
}

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  const apply = (t: string | null) => {
    if (t) {
      const decoded = decodeJwt(t);
      setToken(t);
      setIsAuthenticated(true);
      setUserId(decoded?.sub ?? null);
      setRole(decoded?.role ?? null);
    } else {
      setToken(null);
      setIsAuthenticated(false);
      setUserId(null);
      setRole(null);
    }
  };

  useEffect(() => {
    const storedToken = Cookies.get("token");
    if (storedToken) apply(storedToken);
  }, []);

  const login = (t: any) => {
    Cookies.set("token", t);
    apply(t);
  };

  const logout = () => {
    Cookies.remove("token");
    apply(null);
  };

  const isAdmin = role === "Admin";

  return { isAuthenticated, token, userId, role, isAdmin, login, logout };
};

export default useAuth;
