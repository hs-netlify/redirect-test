import React from "react";

export const getStaticProps = async (context) => {
  const page = context.params.slug;
  const data = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${page}`)
  ).json();

  if (Object.keys(data).length === 0) {
    return {
      props: {},
      notFound: true,
    };
  }
  return { props: { data } };
};

export const getStaticPaths = async () => {
  const paths = [
    {
      params: {
        slug: "1",
      },
    },
    {
      params: {
        slug: "2",
      },
    },
  ];
  return { paths, fallback: false };
};

const Movie = ({ data }) => {
  console.log(data ? true : false);
  return <pre>Working: {JSON.stringify(data, "", 2)}</pre>;
};

export default Movie;
