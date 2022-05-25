import React from "react";

const Article = ({ data }) => {
  return (
    <div className="text-center">
      <h1 className="mt-10 text-4xl font-medium mb-6">{data.title}</h1>
      <p className="">{data.body}</p>
    </div>
  );
};

export async function getStaticProps(context) {
  const articleId = context.params.article;

  const article = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${articleId}`
  );
  const data = await article.json();

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
  const article = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await article.json();

  const paths = data.map((article) => ({
    params: { article: article.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default Article;
