import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJs Portfolio | About</title>
        <meta name="keywords" content="portfolio webdeveloper NextJs" />
      </Head>
      <div>HEllo World</div>
    </>
  );
}
