-- Contact form storage. Write-only for the public: RLS is enabled with an
-- INSERT policy and deliberately NO select/update/delete policies, so
-- submitted messages are readable only from the dashboard or a service key.
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 1 and 120),
  email text not null check (
    char_length(email) <= 255
    and email ~* '^[^\s@]+@[^\s@]+\.[^\s@]+$'
  ),
  message text not null check (char_length(message) between 10 and 4000)
);

alter table public.contact_messages enable row level security;

create policy "anyone can send a message"
  on public.contact_messages
  for insert
  to anon, authenticated
  with check (true);
