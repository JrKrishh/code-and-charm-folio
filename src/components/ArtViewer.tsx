import { useEffect, useRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { art, artFull } from "@/data/art";

/**
 * Full-screen viewer for the art gallery. Radix handles focus trapping,
 * Escape and scroll lock; this adds previous/next by button, arrow key and
 * swipe, and preloads the neighbours so stepping through feels instant.
 */
const ArtViewer = ({
  index,
  onIndex,
}: {
  index: number | null;
  onIndex: (index: number | null) => void;
}) => {
  const piece = index == null ? null : art[index];
  const touchX = useRef<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (index == null) return;
    const step = (by: number) => onIndex((index + by + art.length) % art.length);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    for (const by of [1, -1]) new Image().src = artFull(art[(index + by + art.length) % art.length]);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, onIndex]);

  const step = (by: number) => index != null && onIndex((index + by + art.length) % art.length);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <DialogPrimitive.Root open={piece != null} onOpenChange={(open) => !open && onIndex(null)}>
      <DialogPrimitive.Portal>
        {/* Opaque: the page must not ghost through behind the artwork. */}
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-background data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          aria-describedby={undefined}
          // Focus the viewer itself rather than the close button, so opening
          // with a click doesn't light a focus ring; Tab still reaches every control.
          ref={contentRef}
          onOpenAutoFocus={(e) => {
            e.preventDefault();
            contentRef.current?.focus();
          }}
          tabIndex={-1}
          className="fixed inset-0 z-50 flex flex-col bg-background outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0"
        >
          {piece && index != null && (
            <>
              <div className="flex h-16 shrink-0 items-center justify-between px-3 sm:px-6">
                <p className="mono px-2 text-xs text-ink-tertiary">
                  {pad(index + 1)} / {pad(art.length)}
                </p>
                <DialogPrimitive.Close
                  aria-label="Close"
                  className="grid size-11 place-items-center rounded-md text-ink-secondary transition-colors hover:text-ink"
                >
                  <X className="size-5" />
                </DialogPrimitive.Close>
              </div>

              <div
                className="relative flex min-h-0 flex-1 items-center justify-center px-3 sm:px-20"
                onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
                onTouchEnd={(e) => {
                  const start = touchX.current;
                  touchX.current = null;
                  if (start == null) return;
                  const dx = e.changedTouches[0].clientX - start;
                  if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
                }}
              >
                <img
                  key={piece.slug}
                  src={artFull(piece)}
                  alt={piece.alt}
                  width={piece.width}
                  height={piece.height}
                  className="max-h-full w-auto max-w-full rounded-md object-contain duration-300 animate-in fade-in-0"
                />
                <button
                  type="button"
                  aria-label="Previous piece"
                  onClick={() => step(-1)}
                  className="absolute left-2 top-1/2 hidden size-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface/80 text-ink-secondary transition-colors hover:border-line-strong hover:text-ink sm:grid"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next piece"
                  onClick={() => step(1)}
                  className="absolute right-2 top-1/2 hidden size-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface/80 text-ink-secondary transition-colors hover:border-line-strong hover:text-ink sm:grid"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>

              <div className="flex shrink-0 items-center justify-between gap-4 px-3 pb-6 pt-4 sm:justify-center sm:px-6">
                <button
                  type="button"
                  aria-label="Previous piece"
                  onClick={() => step(-1)}
                  className="grid size-11 place-items-center rounded-full border border-line text-ink-secondary sm:hidden"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <div className="text-center">
                  <DialogPrimitive.Title className="font-display text-lg font-semibold text-ink">
                    {piece.title}
                  </DialogPrimitive.Title>
                  <p className="mono mt-1 text-xs text-ink-tertiary">{piece.kind}</p>
                </div>
                <button
                  type="button"
                  aria-label="Next piece"
                  onClick={() => step(1)}
                  className="grid size-11 place-items-center rounded-full border border-line text-ink-secondary sm:hidden"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default ArtViewer;
