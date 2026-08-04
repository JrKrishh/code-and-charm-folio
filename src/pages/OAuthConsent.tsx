import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

type AuthorizationDetails = {
  client?: { name?: string } | null;
  redirect_url?: string;
  redirect_to?: string;
};

type OAuthNamespace = {
  getAuthorizationDetails: (
    id: string,
  ) => Promise<{ data: AuthorizationDetails | null; error: { message: string } | null }>;
  approveAuthorization: (
    id: string,
  ) => Promise<{ data: AuthorizationDetails | null; error: { message: string } | null }>;
  denyAuthorization: (
    id: string,
  ) => Promise<{ data: AuthorizationDetails | null; error: { message: string } | null }>;
};

function oauthApi(): OAuthNamespace {
  return (supabase.auth as unknown as { oauth: OAuthNamespace }).oauth;
}

export default function OAuthConsent() {
  const [params] = useSearchParams();
  const authorizationId = params.get("authorization_id") ?? "";
  const [details, setDetails] = useState<AuthorizationDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!authorizationId) {
        setError("Missing authorization_id");
        return;
      }
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        const next = window.location.pathname + window.location.search;
        window.location.href = "/login?next=" + encodeURIComponent(next);
        return;
      }
      const { data, error } = await oauthApi().getAuthorizationDetails(authorizationId);
      if (!active) return;
      if (error) {
        setError(error.message);
        return;
      }
      const immediate = data?.redirect_url ?? data?.redirect_to;
      if (immediate && !data?.client) {
        window.location.href = immediate;
        return;
      }
      setDetails(data);
    })();
    return () => {
      active = false;
    };
  }, [authorizationId]);

  async function decide(approve: boolean) {
    setBusy(true);
    const api = oauthApi();
    const { data, error } = approve
      ? await api.approveAuthorization(authorizationId)
      : await api.denyAuthorization(authorizationId);
    if (error) {
      setBusy(false);
      setError(error.message);
      return;
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      setError("No redirect returned by the authorization server.");
      return;
    }
    window.location.href = target;
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <p className="text-sm text-destructive max-w-sm text-center">
          Could not load this authorization request: {error}
        </p>
      </main>
    );
  }

  if (!details) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <p className="text-sm text-muted-foreground">Loading…</p>
      </main>
    );
  }

  const clientName = details.client?.name ?? "an app";

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Connect {clientName}
          </h1>
          <p className="text-sm text-muted-foreground">
            This lets {clientName} use the portfolio tools as you.
          </p>
        </div>
        <div className="flex gap-3">
          <Button className="flex-1" disabled={busy} onClick={() => decide(true)}>
            Approve
          </Button>
          <Button
            className="flex-1"
            variant="outline"
            disabled={busy}
            onClick={() => decide(false)}
          >
            Deny
          </Button>
        </div>
      </div>
    </main>
  );
}
