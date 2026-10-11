/**
 * Illustration — hand-drawn and digital pieces, in the order the gallery
 * shows them. Images live in src/assets/art as <slug>.webp (full, ≤1600px)
 * and <slug>-thumb.webp (grid, ≤720px); width/height are the full image's,
 * so the grid can reserve space before anything loads.
 */

export type ArtKind =
  | "Illustration"
  | "Character design"
  | "Ink on paper"
  | "Sketch"
  | "Logo"
  | "Fan art";

export interface ArtPiece {
  slug: string;
  title: string;
  kind: ArtKind;
  alt: string;
  width: number;
  height: number;
}

export const art: ArtPiece[] = [
  {
    slug: "monsoon",
    title: "Monsoon",
    kind: "Illustration",
    alt: "Close-up of a stern man in a red turban with an orange flower, rain streaking across his face at night.",
    width: 1600,
    height: 795,
  },
  {
    slug: "last-stand",
    title: "Last stand",
    kind: "Illustration",
    alt: "A wounded warrior in gold armour and a red cape grips an arrow on a smoky battlefield, facing a figure in green.",
    width: 1543,
    height: 1600,
  },
  {
    slug: "guardian",
    title: "Guardian",
    kind: "Illustration",
    alt: "A smiling black-and-gold idol seated cross-legged on a bell-shaped gold base, against olive green.",
    width: 1167,
    height: 1600,
  },
  {
    slug: "the-visitor",
    title: "The visitor",
    kind: "Illustration",
    alt: "A young monkey on a carved temple ledge reaches toward stone figures as leaves fall.",
    width: 1420,
    height: 1600,
  },
  {
    slug: "curiosity",
    title: "Curiosity",
    kind: "Illustration",
    alt: "A leopard in a dark jungle looks up at a blue and violet butterfly.",
    width: 1189,
    height: 1600,
  },
  {
    slug: "deckhand",
    title: "Deckhand",
    kind: "Illustration",
    alt: "A bearded sailor with a headband and gold earring, a green light glowing at his chest, in front of a ship's rigging and gilded carvings.",
    width: 1600,
    height: 1417,
  },
  {
    slug: "the-piper",
    title: "The piper",
    kind: "Illustration",
    alt: "A green, elf-like piper plays a horn with scarves streaming, leading a swarm of maze-patterned mice with glowing ears through dark branches.",
    width: 1600,
    height: 1600,
  },
  {
    slug: "daydreamer",
    title: "Daydreamer",
    kind: "Illustration",
    alt: "A smiling young man in a green jacket looks up, surrounded by black-and-white doodle creatures, a paper plane and a parachutist against a curved blue grid.",
    width: 1166,
    height: 1600,
  },
  {
    slug: "sunday-morning",
    title: "Sunday morning",
    kind: "Sketch",
    alt: "A sepia sketch of a couple asleep in bed, turned apart but holding hands.",
    width: 1596,
    height: 963,
  },
  {
    slug: "forest-elder",
    title: "Forest elder",
    kind: "Character design",
    alt: "A tree spirit with a leafy crown and a red forked staff, fireflies drifting around it in the dark.",
    width: 655,
    height: 620,
  },
  {
    slug: "sprout",
    title: "Sprout",
    kind: "Character design",
    alt: "A small leaf-headed creature with large purple eyes and a twig body, its tip glowing yellow, on black.",
    width: 751,
    height: 582,
  },
  {
    slug: "sapling",
    title: "Sapling",
    kind: "Character design",
    alt: "A wide-eyed sapling with a wooden body and three green leaves sprouting from its head, on black.",
    width: 511,
    height: 823,
  },
  {
    slug: "question",
    title: "Question",
    kind: "Character design",
    alt: "A round, puzzled creature with leaf ears and a leafy tunic, a yellow question mark floating above its head.",
    width: 652,
    height: 714,
  },
  {
    slug: "ink-study",
    title: "Ink study",
    kind: "Ink on paper",
    alt: "Pen-and-ink drawing of a bearded creature in a wide-brimmed hat beside a carved staff, with dense cross-hatching.",
    width: 1478,
    height: 1600,
  },
  {
    slug: "the-mig",
    title: "The MIG",
    kind: "Logo",
    alt: "Logo: 'The MIG' in gold blackletter over an ornate gold ornament and a black crescent blade, on deep green.",
    width: 1600,
    height: 1200,
  },
  {
    slug: "lfg",
    title: "LFG",
    kind: "Fan art",
    alt: "Fan art: Deadpool hangs upside down over a car in a comic panel while Wolverine's claws tear through, with bullet holes and the letters LFG.",
    width: 1462,
    height: 1600,
  },
  {
    slug: "daydreamer-study",
    title: "Daydreamer, study",
    kind: "Character design",
    alt: "Portrait study of the same young man in a green jacket, smiling up, on a plain blue background.",
    width: 1166,
    height: 1600,
  },
];

// Vite resolves every image in the folder at build time; the slug keys the lookup.
const files = import.meta.glob("../assets/art/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const url = (name: string) => files[`../assets/art/${name}.webp`];

export const artFull = (piece: ArtPiece) => url(piece.slug);
export const artThumb = (piece: ArtPiece) => url(`${piece.slug}-thumb`);
