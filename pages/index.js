import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../src/components/Header/Header";
import MainSlider from "../src/components/MainSlider/MainSlider";
import Footer from "../src/components/Footer/Footer";
import About from "../src/components/About/About";
import PreFooter from "../src/components/PreFooter/PreFooter";
import Services from "../src/components/Services/Services";
import Team from "../src/components/Team/Team";

export default function Home() {
  return (
    <>
      <Header />
      <MainSlider />
      <About />
      <Services />
      <Team />
      <PreFooter />
      <Footer />
    </>
  );
}
