export type Post = {
  slug: string;
  title: string;
  date: string;
  read: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "why-attention-still-surprises-me",
    title: "why attention still surprises me",
    date: "2026-06-10",
    read: "6 min",
    excerpt: "Re-deriving scaled dot-product attention from scratch and what I noticed the second time around.",
    body: [
      "I re-derived scaled dot-product attention from scratch this week, mostly as an exercise, and ended up writing this post because a few things genuinely surprised me on the second pass.",
      "The first surprise: the softmax is doing more work than I gave it credit for. It's not just normalizing — it's making the operation differentiable through a sparse-ish selection. Without it, attention collapses into a weighted average that can't learn to focus.",
      "The second surprise: the 1/√d scaling factor isn't a polish — it's load-bearing. Drop it on a 256-dim head and training stalls almost immediately because the softmax saturates.",
      "Third: keys and queries being separate matrices, not shared, is what lets a token ask one question while answering a different one. Tying them sounds parameter-efficient and is mostly a bad idea.",
      "Nothing here is new. But re-deriving things you think you understand is, I'm increasingly convinced, the single highest-leverage thing you can do as someone learning ML in public.",
    ],
  },
  {
    slug: "small-models-big-lessons",
    title: "small models, big lessons",
    date: "2026-05-22",
    read: "9 min",
    excerpt: "Training a 10M-param LM on my laptop taught me more than any paper I've read this year.",
    body: [
      "I spent a month training and re-training a ~10M parameter language model on my laptop. No cluster, no wandb sweeps, just a single 4090 and a lot of patience.",
      "The model is too small to be useful. That was the point. When every training run finishes in under an hour, you can actually run the experiments you want to run instead of the ones you can afford.",
      "Lessons I didn't expect: learning-rate warmup matters way more at small scale than I thought. Weight decay does basically nothing under 50M params. And the loss curve shape is genuinely a function of data ordering — shuffle seed alone moves final loss by ~3%.",
      "Most of all: training a model end-to-end, even a tiny one, makes you read papers differently. You start noticing which choices the authors actually had to make and which ones they inherited.",
    ],
  },
  {
    slug: "the-bitter-lesson-revisited",
    title: "the bitter lesson, revisited",
    date: "2026-04-03",
    read: "4 min",
    excerpt: "A quick take on Sutton's essay after spending a weekend hand-engineering features that compute eventually crushed.",
    body: [
      "I spent a weekend hand-engineering features for a small classification problem. Got to 87% accuracy and felt clever.",
      "Then I threw the raw inputs at a small MLP with no feature engineering. 91% in twenty minutes of training.",
      "Sutton's bitter lesson lands differently when it's your own clever features getting outperformed by a stack of linear layers. The essay is short — go read it — but the gist is that methods which scale with compute consistently beat methods that bake in human cleverness.",
      "It's bitter because the human cleverness was the fun part.",
    ],
  },
  {
    slug: "hello-world",
    title: "hello world",
    date: "2026-03-15",
    read: "2 min",
    excerpt: "Why I'm starting this site and what to expect (or not).",
    body: [
      "Hi. This is a personal site for the things I build and think about, mostly around machine learning, AI, and computer science in general.",
      "No content calendar, no newsletter, no SEO. Posts go up when I have something to say and projects show up when they're far enough along to share. Expect rough edges.",
      "If something here is useful or wrong, I'd love to hear about it.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
