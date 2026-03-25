

# Portfolio Website for Boopathi Raja — Neural Network / Synapse Style

## Concept
A dark portfolio with an animated neural network canvas background. Nodes pulse and synapses fire as connections animate between them. Sections reveal with synapse-like energy bursts. Color palette: deep dark (#0a0a12) with electric blue (#00d4ff) and violet (#8b5cf6) accents.

## Technical Approach

**Canvas Background**: Use an HTML Canvas component with animated nodes and connecting lines that pulse. Nodes drift slowly, connections glow when close. This avoids heavy 3D libraries while keeping performance smooth.

**Color System**: Update CSS variables for a dark neural theme — near-black backgrounds, electric blue primary, violet accents.

## Files to Create/Modify

1. **`src/components/NeuralBackground.tsx`** — Canvas-based animated neural network with floating nodes, pulsing connections, and glow effects. Runs on requestAnimationFrame.

2. **`src/components/HeroSection.tsx`** — Full-screen hero with Boopathi Raja's name, "Vibe Coder" tagline, glowing text with synapse animation on hover, and a CTA button.

3. **`src/components/ProjectsSection.tsx`** — Grid of project cards with neural-node corner accents, glow-on-hover, and placeholder projects (editable later).

4. **`src/components/AboutSection.tsx`** — About section with a bio area, skill nodes displayed as pulsing circles connected by lines (mini neural network visualization for skills).

5. **`src/components/ContactSection.tsx`** — Contact form with glowing input borders on focus, styled with the neural theme.

6. **`src/components/Navbar.tsx`** — Sticky top nav with smooth scroll links, glow effect on active section.

7. **`src/pages/Index.tsx`** — Compose all sections with NeuralBackground overlay.

8. **`src/index.css`** — Update CSS variables: dark backgrounds, electric blue/violet primaries, custom glow utilities.

9. **`tailwind.config.ts`** — Add custom animations: `pulse-glow`, `synapse-fire`, `float`, `fade-in-up`.

## Sections

- **Hero**: Full viewport, animated name reveal, "Vibe Coder" subtitle with typing or glow effect
- **Projects**: 3-column grid (responsive), 4 placeholder project cards with hover glow
- **About**: Split layout — text left, animated skill-node visualization right
- **Contact**: Centered form with name, email, message fields, glowing submit button

