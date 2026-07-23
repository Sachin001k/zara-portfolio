import { useState, type FormEvent } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, LogIn } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const AdminLoginPage = () => {
  const { user, isAdmin, loading, signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from || "/admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  if (!loading && user && isAdmin) {
    return <Navigate to={from} replace />;
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const result = await signIn(email, password);
    setSubmitting(false);
    if (result.error) {
      setError(result.error);
      return;
    }
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-6">
      <div className="absolute inset-0 grid-paper-bg" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md glass-card p-8"
        style={{
          boxShadow:
            "0 8px 32px hsl(var(--shadow-color) / 0.08), inset 0 1px 0 hsl(var(--cream) / 0.5)",
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Lock size={16} className="text-olive" />
          <h1 className="text-xl font-light text-foreground">Admin sign in</h1>
        </div>
        <p className="text-xs font-light text-muted-foreground mb-6">
          Sign in to manage Musings posts. Accounts are issued privately.
        </p>

        <form onSubmit={onSubmit} className="space-y-4" noValidate>
          <label className="block space-y-1.5">
            <span className="text-[11px] font-light text-muted-foreground uppercase tracking-wider">
              Email
            </span>
            <input
              type="text"
              inputMode="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-border/40 bg-background/80 px-4 py-2.5 text-sm font-light focus:outline-none focus:ring-2 focus:ring-olive/30"
              placeholder="you@example.com"
            />
          </label>
          <label className="block space-y-1.5">
            <span className="text-[11px] font-light text-muted-foreground uppercase tracking-wider">
              Password
            </span>
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl border border-border/40 bg-background/80 px-4 py-2.5 text-sm font-light focus:outline-none focus:ring-2 focus:ring-olive/30"
              placeholder="••••••••"
            />
          </label>

          {error && (
            <p className="text-xs font-light text-coral">{error}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-olive px-6 py-3 text-sm font-light text-primary-foreground hover:bg-olive-dark transition-colors disabled:opacity-60"
          >
            <LogIn size={15} />
            {submitting ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <p className="mt-6 text-center text-[11px] font-light text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            ← Back to site
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default AdminLoginPage;
