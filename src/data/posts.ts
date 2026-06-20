export type Post = {
  slug: string;
  title: string;
  date: string;
  read: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
