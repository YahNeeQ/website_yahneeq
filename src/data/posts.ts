import { createServerFn } from "@tanstack/react-start";

import { sanityClient } from "@/lib/sanity";
import type { ContentBlock, ContentImage } from "@/data/projects";

export type Post = {
  slug: string;
  title: string;
  date: string;
  read: string;
  excerpt: string;
  body: ContentBlock[];
  mainImage?: ContentImage;
};

const postFields = `{
  title,
  "slug": slug.current,
  "date": publishedAt,
  read,
  excerpt,
  "body": body[]{
    ...,
    _type == "image" => {
      alt,
      caption,
      "url": asset->url
    }
  },
  "mainImage": mainImage {
    alt,
    "url": asset->url
  }
}`;

export const getPosts = createServerFn({ method: "GET" }).handler(async (): Promise<Post[]> => {
  try {
    return await sanityClient.fetch<Post[]>(
      `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) ${postFields}`,
    );
  } catch (error) {
    console.error("Unable to load posts from Sanity", error);
    return [];
  }
});

export const getPost = createServerFn({ method: "GET" })
  .inputValidator((slug: string) => slug)
  .handler(async ({ data: slug }): Promise<Post | null> => {
    try {
      return await sanityClient.fetch<Post | null>(
        `*[_type == "post" && slug.current == $slug][0] ${postFields}`,
        { slug },
      );
    } catch (error) {
      console.error("Unable to load post from Sanity", error);
      return null;
    }
  });
