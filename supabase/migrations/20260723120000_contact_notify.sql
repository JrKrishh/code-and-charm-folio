-- Push notification on every contact message, via ntfy.sh.
--
-- pg_net queues the HTTP call asynchronously, so a slow or failed
-- notification can never block or fail the visitor's insert. The topic
-- string acts as the secret: anyone who knows it can read the
-- notifications, so it stays out of client code and lives only here
-- and in the owner's ntfy app subscription.

create extension if not exists pg_net;

create or replace function public.notify_contact_message()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  perform net.http_post(
    url := 'https://ntfy.sh',
    body := jsonb_build_object(
      'topic', 'boopathi-leads-539c233c9abbb656e3aee06f9a3c0c3c9fc7',
      'title', 'Portfolio enquiry — ' || new.name,
      'message', new.message || E'\n\nReply to: ' || new.email,
      'priority', 4,
      'tags', jsonb_build_array('incoming_envelope')
    )
  );
  return new;
end;
$$;

drop trigger if exists contact_message_notify on public.contact_messages;

create trigger contact_message_notify
  after insert on public.contact_messages
  for each row
  execute function public.notify_contact_message();
