import { useCallback, useEffect, useMemo, useState } from "react";
import type { SupabaseClient } from "@supabase/supabase-js";
import { Check, Loader2, LogOut, RotateCcw, Search } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const db = supabase as unknown as SupabaseClient;

type Message = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  message: string;
  handled_at: string | null;
};

type Filter = "all" | "open" | "handled";
type Access = "loading" | "anon" | "denied" | "ok";

const filters: { key: Filter; label: string }[] = [
  { key: "open", label: "Open" },
  { key: "handled", label: "Handled" },
  { key: "all", label: "All" },
];

const formatDate = (iso: string) =>
  new Date(iso).toLocaleString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

const Admin = () => {
  const [access, setAccess] = useState<Access>("loading");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Filter>("open");
  const [query, setQuery] = useState("");
  const [busyId, setBusyId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const { data, error: err } = await db
      .from("contact_messages")
      .select("id, created_at, name, email, message, handled_at")
      .order("created_at", { ascending: false });
    if (err) setError(err.message);
    else setMessages((data ?? []) as Message[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    let cancelled = false;

    const check = async () => {
      const { data: userData } = await supabase.auth.getUser();
      const user = userData.user;
      if (cancelled) return;
      if (!user) {
        setAccess("anon");
        setLoading(false);
        return;
      }
      const { data: isAdmin } = await db.rpc("is_current_user_admin");
      if (cancelled) return;
      if (!isAdmin) {
        setAccess("denied");
        setLoading(false);
        return;
      }
      setAccess("ok");
      void load();
    };

    void check();
    const { data } = supabase.auth.onAuthStateChange(() => void check());
    return () => {
      cancelled = true;
      data.subscription.unsubscribe();
    };
  }, [load]);

  const setHandled = async (id: string, handled: boolean) => {
    setBusyId(id);
    setError(null);
    const { data: userData } = await supabase.auth.getUser();
    const { error: err } = await db
      .from("contact_messages")
      .update({
        handled_at: handled ? new Date().toISOString() : null,
        handled_by: handled ? userData.user?.id ?? null : null,
      })
      .eq("id", id);
    if (err) setError(err.message);
    else
      setMessages((prev) =>
        prev.map((m) =>
          m.id === id ? { ...m, handled_at: handled ? new Date().toISOString() : null } : m,
        ),
      );
    setBusyId(null);
  };

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return messages.filter((m) => {
      if (filter === "open" && m.handled_at) return false;
      if (filter === "handled" && !m.handled_at) return false;
      if (!q) return true;
      return (
        m.name.toLowerCase().includes(q) ||
        m.email.toLowerCase().includes(q) ||
        m.message.toLowerCase().includes(q)
      );
    });
  }, [messages, filter, query]);

  const openCount = messages.filter((m) => !m.handled_at).length;

  if (access === "loading") {
    return (
      <main className="grid min-h-screen place-items-center">
        <Loader2 className="size-5 animate-spin text-ink-tertiary" aria-hidden="true" />
      </main>
    );
  }

  if (access !== "ok") {
    return (
      <main className="grid min-h-screen place-items-center px-6">
        <div className="max-w-sm text-center">
          <h1 className="font-display text-2xl font-bold text-ink">
            {access === "anon" ? "Sign in required" : "Not authorised"}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
            {access === "anon"
              ? "This page is for the site owner. Sign in to continue."
              : "Your account doesn't have admin access to contact messages."}
          </p>
          {access === "anon" ? (
            <a
              href={`/login?next=${encodeURIComponent("/admin")}`}
              className="mono mt-6 inline-flex h-11 items-center rounded-lg bg-accent px-5 text-sm font-medium text-[hsl(var(--on-accent))]"
            >
              Sign in
            </a>
          ) : (
            <button
              type="button"
              onClick={() => void supabase.auth.signOut()}
              className="mono mt-6 inline-flex h-11 items-center rounded-lg border border-line px-5 text-sm text-ink-secondary hover:text-ink"
            >
              Sign out
            </button>
          )}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-16">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Admin</p>
            <h1 className="mt-3 font-display text-3xl font-bold text-ink">Contact messages</h1>
            <p className="mt-2 text-sm text-ink-secondary">
              {openCount} open · {messages.length} total
            </p>
          </div>
          <button
            type="button"
            onClick={() => void supabase.auth.signOut()}
            className="mono inline-flex h-11 items-center gap-2 rounded-lg border border-line px-4 text-xs uppercase tracking-wider text-ink-secondary transition-colors hover:text-ink"
          >
            <LogOut className="size-3.5" aria-hidden="true" />
            Sign out
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <div className="flex rounded-lg border border-line p-1">
            {filters.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                aria-pressed={filter === key}
                className={`mono h-9 rounded-md px-3 text-xs uppercase tracking-wider transition-colors ${
                  filter === key
                    ? "bg-accent text-[hsl(var(--on-accent))]"
                    : "text-ink-secondary hover:text-ink"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="relative min-w-[220px] flex-1">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink-tertiary"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name, email, or message"
              aria-label="Search messages"
              className="h-11 w-full rounded-lg border border-line bg-surface-subtle pl-9 pr-4 text-sm text-ink placeholder:text-ink-tertiary"
            />
          </div>
          <button
            type="button"
            onClick={() => void load()}
            className="mono inline-flex h-11 items-center gap-2 rounded-lg border border-line px-4 text-xs uppercase tracking-wider text-ink-secondary transition-colors hover:text-ink"
          >
            <RotateCcw className="size-3.5" aria-hidden="true" />
            Refresh
          </button>
        </div>

        {error && (
          <p role="alert" className="mt-6 rounded-lg border border-[hsl(var(--destructive)/0.4)] bg-[hsl(var(--destructive)/0.08)] px-4 py-3 text-sm text-ink-secondary">
            {error}
          </p>
        )}

        <div className="mt-8 space-y-4">
          {loading ? (
            <p className="text-sm text-ink-secondary">Loading messages…</p>
          ) : visible.length === 0 ? (
            <p className="text-sm text-ink-secondary">Nothing here.</p>
          ) : (
            visible.map((m) => (
              <article
                key={m.id}
                className="surface-card p-5"
                data-handled={m.handled_at ? "true" : "false"}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-display text-base font-semibold text-ink">{m.name}</p>
                    <a
                      href={`mailto:${m.email}`}
                      className="mono text-xs text-accent underline-offset-2 hover:underline"
                    >
                      {m.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="mono text-[11px] uppercase tracking-wider text-ink-tertiary">
                      {formatDate(m.created_at)}
                    </span>
                    {m.handled_at && (
                      <span className="mono inline-flex items-center gap-1 rounded-full border border-[hsl(var(--status-production)/0.4)] bg-[hsl(var(--status-production)/0.08)] px-2 py-1 text-[10px] uppercase tracking-wider text-ink-secondary">
                        <Check className="size-3" aria-hidden="true" />
                        Handled
                      </span>
                    )}
                  </div>
                </div>

                <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-ink-secondary">
                  {m.message}
                </p>

                <button
                  type="button"
                  disabled={busyId === m.id}
                  onClick={() => void setHandled(m.id, !m.handled_at)}
                  className="mono mt-5 inline-flex h-10 items-center gap-2 rounded-lg border border-line px-4 text-xs uppercase tracking-wider text-ink-secondary transition-colors hover:text-ink disabled:opacity-60"
                >
                  {busyId === m.id ? (
                    <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />
                  ) : m.handled_at ? (
                    <RotateCcw className="size-3.5" aria-hidden="true" />
                  ) : (
                    <Check className="size-3.5" aria-hidden="true" />
                  )}
                  {m.handled_at ? "Reopen" : "Mark handled"}
                </button>
              </article>
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default Admin;
