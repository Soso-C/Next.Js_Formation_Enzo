import React from "react";

const User = ({ data }) => {
  const { name, username, email, website, phone } = data;

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="border border-gray-300 p-4 w-full max-w-[600px]">
        <h1 className="text-xl font-medium">{name}</h1>
        <p className="font-medium text-gray-500">{`Username : ${username}`}</p>

        <div className="border w-full mt-2 rounded">
          <p className="p-2 w-full border-b">{`Username: ${username}`}</p>
          <p className="p-2 w-full border-b">{`Email: ${email}`}</p>
          <p className="p-2 w-full border-b">{`Site web: ${website}`}</p>
          <p className="p-2 w-full">{`Telephone: ${phone}`}</p>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  const userId = context.params.username;

  const users = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const data = await users.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await users.json();

  const paths = data.map((users) => ({
    params: { username: users.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default User;
