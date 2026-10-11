import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import ArtViewer from "@/components/ArtViewer";
import { art, artThumb } from "@/data/art";

/**
 * Illustration gallery. Pieces keep their own proportions in a masonry
 * column layout; the open piece lives in ?piece=<slug>, so any piece can be
 * linked to directly and Back closes the viewer.
 */
const Art = () => {
  const [params, setParams] = useSearchParams();

  const open = useMemo(() => {
    const i = art.findIndex((p) => p.slug === params.get("piece"));
    return i >= 0 ? i : null;
  }, [params]);

  const show = useCallback(
    (i: number | null) =>
      setParams(i == null ? {} : { piece: art[i].slug }, {
        // Stepping between pieces replaces the entry; opening one adds it.
        replace: open != null && i != null,
        preventScrollReset: true,
      }),
    [open, setParams],
  );

  return (
    <div className="min-h-dvh">
      <SiteNav />

      <main id="main" className="pt-32 pb-24">
        <div className="container-page">
          <Reveal>
            <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
              <p className="mono text-[11px] uppercase tracking-[0.18em] text-ink-tertiary">
                Illustration
              </p>
              <p className="mono hidden text-[11px] uppercase tracking-[0.18em] text-ink-tertiary sm:block">
                {art.length} pieces
              </p>
            </div>

            <h1 className="mt-8 max-w-3xl text-balance font-display text-4xl font-bold text-ink sm:text-5xl">
              Off the clock, I draw.
            </h1>
            <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-ink-secondary">
              Characters, myths and the odd superhero: digital paintings, character designs, ink
              studies and a logo.
            </p>
          </Reveal>

          <ul className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {art.map((piece, i) => (
              <li key={piece.slug} className="mb-8 break-inside-avoid">
                <Reveal delay={(i % 3) * 70}>
                  <button
                    type="button"
                    onClick={() => show(i)}
                    aria-label={`View ${piece.title}, ${piece.kind.toLowerCase()}`}
                    className="group block w-full rounded-lg text-left"
                  >
                    <span className="block overflow-hidden rounded-lg border border-line bg-surface transition-colors duration-200 group-hover:border-line-strong">
                      <img
                        src={artThumb(piece)}
                        alt={piece.alt}
                        width={piece.width}
                        height={piece.height}
                        loading={i < 3 ? "eager" : "lazy"}
                        decoding="async"
                        className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </span>
                    <span className="mt-3 flex items-baseline justify-between gap-3">
                      <span className="font-display text-base font-semibold text-ink">
                        {piece.title}
                      </span>
                      <span className="mono shrink-0 text-[11px] text-ink-tertiary">
                        {piece.kind}
                      </span>
                    </span>
                  </button>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <SiteFooter />
      <ArtViewer index={open} onIndex={show} />
    </div>
  );
};

export default Art;
