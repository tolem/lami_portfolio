// dynamic routing - for individual blog posts
import { MDXRemote } from "next-mdx-remote";
import { getFiles, getFileBySlug } from "../../lib/mdx";
import BlogLayout from "../../layouts/blog";
import MDXComponents from "../../components/MDXComponents";

// SEO
import { NextSeo } from "next-seo";

// router to get current slug
import { useRouter } from "next/router";

// basic idea here : website/blog/slug -> it renders goes and gets the mdx file corresponding to the slug, then renders it
export default function Blog({ mdxSource, frontMatter }) {
  const router = useRouter();
  const slug = router.asPath.replace("/blog", "");

  const url = `https://thosam.vercel.app/blog${slug}`
  const title = `Blog - ${frontMatter.title}`;
  const description = `${frontMatter.title} - by Thösam Norlha-Tsang`;

  // overriding SEO
  const SEO = {
    title,
    description,
    canonical: url,

    openGraph: {
      title,
      description,
      url
    },
  };

  // getting the content of that mdx file and rendering
  return (
    <>
      <NextSeo {...SEO} />
      <BlogLayout frontMatter={frontMatter}>
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </BlogLayout>
    </>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles("blog");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""), // replacing by empty string
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("blog", params.slug);
  return { props: post }; // returning the post as props
}
