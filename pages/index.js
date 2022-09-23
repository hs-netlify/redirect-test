import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({}) {
  const context = process.env.NEXT_PUBLIC_CONTEXT_NAME;
  return <div className={styles.container}>WORKING HERE </div>;
}
