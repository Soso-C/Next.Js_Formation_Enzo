import React from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
export default function blog({ data }) {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-4xl font-medium mt-10 pb-4">
        Bievenue sur le Blog
      </h1>
      <p className="text-center">Voici les articles</p>

      <div className="flex flex-col md:flex-row justify-center items-center mt-10 md:flex-wrap gap-5 mb-10 px-4 md:px-0">
        {data?.slice(0, 24).map((article) => (
          <div
            key={uuidv4()}
            className="w-full min-h-[150px] md:w-[400px] border border-gray-300 p-4"
          >
            <h2 className="font-bold">{article.title}</h2>
            <p className="pb-4 pt-2 text-sm truncate">{article.body}</p>
            <Link href={`/blog/${article.id.toString()}`}>
              <a className="text-blue-600 underline">Lisez cet article</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const article = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await article.json();

  return {
    props: {
      data,
    },
  };
}
