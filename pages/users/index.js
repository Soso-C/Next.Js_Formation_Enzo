/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default function user({ data }) {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-4xl font-medium mt-10 pb-4">
        La liste d'utilisateurs
      </h1>

      <div className="flex flex-col justify-center items-center mt-10 gap-5 mb-10">
        {data?.slice(0, 24).map((user) => (
          <div
            key={uuidv4()}
            className="w-full md:w-1/2 flex justify-between items-center border border-gray-300 p-4 rounded"
          >
            <p className="font-medium">{user.username}</p>
            <Link href={`/users/${user.id.toString()}`}>
              <a className="text-blue-600 underline">Contacter</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await users.json();

  return {
    props: {
      data,
    },
  };
}
