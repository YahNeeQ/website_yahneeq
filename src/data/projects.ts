export type Project = {
  slug: string;
  title: string;
  tag: string;
  status: "active" | "archived";
  desc: string;
  body: string[];
  stack: string[];
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "nano-transformer",
    title: "nano-transformer",
    tag: "ML",
    status: "active",
    desc: "A from-scratch transformer trained on tiny shakespeare. Single file, no frameworks beyond pytorch.",
    stack: ["python", "pytorch", "numpy"],
    body: [
      "I wanted to really understand the transformer block, so I rebuilt one from scratch in a single ~300-line file. No huggingface, no lightning — just pytorch and a text file.",
      "The model is a decoder-only stack with multi-head self-attention, learned positional embeddings, and a tied output head. It overfits tiny shakespeare in a few minutes on a laptop GPU and generates surprisingly coherent pseudo-Elizabethan rambling.",
      "Biggest lesson: most of the 'magic' is in the residual stream. Once you internalize that every block reads from and writes to the same shared bus, the rest becomes plumbing.",
    ],
  },
  {
    slug: "diffusion-playground",
    title: "diffusion playground",
    tag: "AI",
    status: "active",
    desc: "Interactive notebook for visualizing the forward/reverse process of DDPMs on toy datasets.",
    stack: ["python", "pytorch", "matplotlib"],
    body: [
      "A small notebook that animates the forward noising and reverse denoising of a DDPM on 2D toy distributions (swiss roll, two moons, checkerboard).",
      "Seeing the score field evolve over timesteps made the whole thing click for me in a way no paper ever did. The reverse process is essentially gradient ascent on a learned log-density — once you watch it happen, the math stops feeling mysterious.",
    ],
  },
  {
    slug: "vector-db-lite",
    title: "vector-db-lite",
    tag: "CS",
    status: "archived",
    desc: "Tiny in-memory vector store with HNSW indexing — built to understand ANN search.",
    stack: ["rust", "criterion"],
    body: [
      "An excuse to write some rust and actually read the HNSW paper end-to-end. The result is a single-process vector store that does cosine similarity over ~1M vectors in <5ms on my machine.",
      "Archived because faiss and qdrant exist and are much better. But I learned a ton about graph-based ANN, layer probabilities, and why deletion is genuinely hard.",
    ],
  },
  {
    slug: "tokenizer-lab",
    title: "tokenizer-lab",
    tag: "ML",
    status: "active",
    desc: "Comparing BPE, WordPiece and Unigram tokenizers on multilingual corpora.",
    stack: ["python", "tokenizers", "polars"],
    body: [
      "How much does tokenizer choice actually matter? More than I expected — especially on non-Latin scripts.",
      "This repo trains BPE, WordPiece and Unigram on the same multilingual corpus and reports fertility, compression ratio, and downstream perplexity on a fixed small LM. Unigram wins on most languages I tested. Surprised nobody, except me.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
