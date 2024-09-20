import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
   <div>
      <Header/>

      <Hero/>
   </div>
  );
}
async function getPosts() {
  const query = `
  {
    posts(first: 5) {
      nodes {
        title
        content
        uri
      }
    }
  }
    `;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
      query
    )}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 0,
      },
    }
  );

  const { data } = await res.json();

  return data.posts.nodes;
}

export async function PostList() {
  const posts = await getPosts();

  return (
    <>
      {posts.map((post) => (
        <div key={post.uri} className="card">
          <Suspense fallback={<Loading />}>
            <Link href={`/post/${post.uri}`}>
              <h3>{post.title}</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: [],
                }}
              />
            </Link>
          </Suspense>
        </div>
      ))}
    </>
  );
}