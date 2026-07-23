import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Session, User } from "@supabase/supabase-js";
import { api } from "@/lib/api";
import { isLooseEmail } from "@/lib/blogs";

type AuthContextValue = {
  user: User | null;
  session: Session | null;
  loading: boolean;
  isAdmin: boolean;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const refreshAdmin = useCallback(async (uid: string | undefined) => {
    if (!uid) {
      setIsAdmin(false);
      return;
    }
    const { data } = await api.from("profiles").select("role").eq("id", uid).maybeSingle();
    setIsAdmin(data?.role === "admin");
  }, []);

  useEffect(() => {
    let mounted = true;

    api.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setSession(data.session);
      setUser(data.session?.user ?? null);
      refreshAdmin(data.session?.user?.id).finally(() => {
        if (mounted) setLoading(false);
      });
    });

    const { data: sub } = api.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setUser(nextSession?.user ?? null);
      refreshAdmin(nextSession?.user?.id);
      setLoading(false);
    });

    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, [refreshAdmin]);

  const signIn = useCallback(async (email: string, password: string) => {
    const trimmed = email.trim();
    if (!isLooseEmail(trimmed)) {
      return { error: "Please enter a valid email." };
    }
    if (!password) {
      return { error: "Please enter your password." };
    }

    const { error } = await api.auth.signInWithPassword({
      email: trimmed,
      password,
    });

    if (error) {
      return { error: error.message || "Unable to sign in. Please try again." };
    }
    return { error: null };
  }, []);

  const signOut = useCallback(async () => {
    await api.auth.signOut();
    setIsAdmin(false);
  }, []);

  const value = useMemo(
    () => ({ user, session, loading, isAdmin, signIn, signOut }),
    [user, session, loading, isAdmin, signIn, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
