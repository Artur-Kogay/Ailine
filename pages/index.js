import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../src/components/Header/Header";
import MainSlider from "../src/components/MainSlider/MainSlider";
import Footer from "../src/components/Footer/Footer";
import About from "../src/components/About/About";
import PreFooter from "../src/components/PreFooter/PreFooter";
import Largest from "../src/components/LargestBlock/Largest";
import Form from "../src/components/Form/Form";

export default function Home() {
  return (
    <>
      <Header />
      <MainSlider />
      <About />
      <Form />
      <Largest />
      <PreFooter />
      <Footer />
    </>
  );
}
