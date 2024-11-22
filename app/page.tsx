import { draftMode } from "next/headers";

import MoreStories from "./components/moreStories";

import Header from "@/app/components/header";
import HeroPost from "@/app/components/heroPost";
import { getAllPosts } from "@/lib/api";

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Header />
      <div className="container mx-auto px-5">
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        <MoreStories morePosts={morePosts} />
      </div>
    </>
  );
}
