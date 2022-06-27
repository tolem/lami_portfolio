// this is where we will fetch the data / articles

// bunch of imports that are needed
import fs from "fs";
import matter from "gray-matter";
import mdxPrism from "mdx-prism"; // for code snippets
import path from "path";
import readingTime from "reading-time"; // to get reading time of the blog post based how many words there are
import { serialize } from 'next-mdx-remote/serialize'

// custom Component for our MDX pages
import MDXComponents from "../components/MDXComponents";

import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeHighlight from "rehype-highlight";

// root of our application
const root = process.cwd();

// reading file through the path ("data" folder)
export async function getFiles(type) {
  return fs.readdirSync(path.join(root, "data", type));
}

//
export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, "data", type, `${slug}.mdx`), "utf8")
    : fs.readFileSync(path.join(root, "data", `${type}.mdx`), "utf8");

  const { data, content } = matter(source);

  const mdxSource = await serialize(content, {
    components: MDXComponents,
    mdxOptions: {
      rehypePlugins: [
        rehypeCodeTitles,
        mdxPrism,
        rehypeSlug,
        rehypeHighlight,
        
      ],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}

//
export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, "data", type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "data", type, postSlug),
      "utf8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
}
