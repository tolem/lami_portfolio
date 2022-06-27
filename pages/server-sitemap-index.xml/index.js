/* Bruh, idk if this thing works or not */

import { GetServerSideProps } from "next";
import { getServerSideSitemap } from "next-sitemap";

// fetching from api and returning response as json 
export const GetBlogPosts = async () => {
  const response = await fetch("https://thosam.vercel.app/blog", {
    method: "GET",
  });
  const result = await response.json();
  return result;
};

export const getServerSideProps = async (contex) => {
  const siteUrl = "https://thosam.vercel.app";
  const data = await GetBlogPosts();

  const fields = data.map((articles) => ({
    loc: `${siteUrl}/${articles.id}`,
    lastmod: new Date().toISOString(),
  }));
  return getServerSideSitemap(context, fields);
};

// no particular use
export default function Site() {}
