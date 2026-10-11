import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { art, artThumb } from "@/data/art";

const TEASER_SLUGS = ["monsoon", "last-stand", "the-visitor", "curiosity"];

/** Home-page window onto /art: four pieces, each opening straight into the viewer. */
const ArtTeaser = () => {
  const pieces = TEASER_SLUGS.map((slug) => art.find((p) => p.slug === slug)).filter(
    (p): p is NonNullable<typeof p> => p != null,
  );

  return (
    <section className="scroll-mt-24 border-t border-line py-24" id="art">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Illustration</p>
              <h2 className="mt-4 text-balance font-display text-3xl font-bold text-ink sm:text-4xl">
                Off the clock, I draw
              </h2>
              <p className="mt-3 max-w-xl text-pretty leading-relaxed text-ink-secondary">
                Digital paintings, character designs and ink studies.
              </p>
            </div>

            <Link
              to="/art"
              className="group mono inline-flex h-11 items-center gap-2 rounded-lg border border-line px-4 text-xs text-ink-secondary transition-colors hover:border-line-strong hover:text-ink"
            >
              All {art.length} pieces
              <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {pieces.map((piece, i) => (
            <li key={piece.slug}>
              <Reveal delay={i * 70}>
                <Link to={`/art?piece=${piece.slug}`} className="group block rounded-lg">
                  <span className="block aspect-[4/5] overflow-hidden rounded-lg border border-line bg-surface transition-colors duration-200 group-hover:border-line-strong">
                    <img
                      src={artThumb(piece)}
                      alt={piece.alt}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </span>
                  <span className="mt-3 block font-display text-sm font-semibold text-ink">
                    {piece.title}
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ArtTeaser;
