import { draftMode } from "next/headers";

import Avatar from "../../components/avatar";
import CoverImage from "../../components/coverImage";
import Date from "../../components/date";
import MoreStories from "../../components/moreStories";

import Header from "@/app/components/header";
import { getAllPosts, getPostAndMorePosts } from "@/lib/api";
import { Markdown } from "@/lib/markdown";

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { isEnabled } = draftMode();
  const { post, morePosts } = await getPostAndMorePosts(params.slug, isEnabled);

  return (
    <>
      <Header isInArticlePage={true} />
      <div className="container mx-auto px-5">
        <article>
          <h1 className="mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl">
            {post.title}
          </h1>
          <div className="hidden md:mb-12 md:block">
            {post.author && (
              <Avatar name={post.author.name} picture={post.author.picture} />
            )}
          </div>
          <div className="mb-8 sm:mx-0 md:mb-16">
            <CoverImage title={post.title} url={post.coverImage.url} />
          </div>
          <div className="mx-auto max-w-2xl">
            <div className="mb-6 block md:hidden">
              {post.author && (
                <Avatar name={post.author.name} picture={post.author.picture} />
              )}
            </div>
            <div className="mb-6 text-lg">
              <Date dateString={post.date} />
            </div>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="prose">
              <Markdown content={post.content} />
            </div>
          </div>
        </article>
        <hr className="border-accent-2 mb-24 mt-28" />
        <MoreStories morePosts={morePosts} />
      </div>
    </>
  );
}
