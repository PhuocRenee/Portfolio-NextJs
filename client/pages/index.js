import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import MainHeader from "../components/MainHeader";

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJs Portfolio</title>
        <meta name="keywords" content="portfolio webdeveloper NextJs" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <MainHeader />
        <Projects />
        <About />
        <Contact />
      </main>
      <div>HEllo World</div>
    </>
  );
}
