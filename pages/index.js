import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../src/components/Header/Header";
import MainSlider from "../src/components/MainSlider/MainSlider";
import Footer from "../src/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <MainSlider />
      <Footer />
    </>
  );
}
