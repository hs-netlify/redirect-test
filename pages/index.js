import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const getStaticProps = async () => {
  const data = await (await fetch("https://randomuser.me/api/")).json();

  return { props: { user: data }, revalidate: 600 };
};

export default function Home({ user }) {
  const context = process.env.NEXT_PUBLIC_CONTEXT_NAME;
  return <div className={styles.container}>Proxied site</div>;
}
