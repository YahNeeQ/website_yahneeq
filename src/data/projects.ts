import { createServerFn } from "@tanstack/react-start";

import { sanityClient } from "@/lib/sanity";

export type ContentImage = {
  url: string;
  alt?: string;
  caption?: string;
};

export type ContentBlock =
  | {
      _key: string;
      _type: "block";
      children: Array<{
        _key: string;
        _type: "span";
        marks: string[];
        text: string;
      }>;
      markDefs: Array<{
        _key: string;
        _type: string;
        href?: string;
      }>;
      style: string;
      listItem?: string;
      level?: number;
    }
  | {
      _key: string;
      _type: "image";
      url: string;
      alt?: string;
      caption?: string;
    };

export type Project = {
  slug: string;
  title: string;
  tag: string;
  status: "active" | "archived";
  desc: string;
  body: ContentBlock[] | string[];
  stack: string[];
  repo?: string;
  mainImage?: ContentImage;
  gallery?: ContentImage[];
};

const projectFields = `{
  title,
  "slug": slug.current,
  tag,
  status,
  "desc": description,
  stack,
  repo,
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
  },
  "gallery": gallery[] {
    alt,
    caption,
    "url": asset->url
  }
}`;

export const getProjects = createServerFn({ method: "GET" }).handler(
  async (): Promise<Project[]> => {
    try {
      return await sanityClient.fetch<Project[]>(
        `*[_type == "project" && defined(slug.current)] | order(_createdAt desc) ${projectFields}`,
      );
    } catch (error) {
      console.error("Unable to load projects from Sanity", error);
      return [];
    }
  },
);

export const getProject = createServerFn({ method: "GET" })
  .inputValidator((slug: string) => slug)
  .handler(async ({ data: slug }): Promise<Project | null> => {
    try {
      return await sanityClient.fetch<Project | null>(
        `*[_type == "project" && slug.current == $slug][0] ${projectFields}`,
        { slug },
      );
    } catch (error) {
      console.error("Unable to load project from Sanity", error);
      return null;
    }
  });
