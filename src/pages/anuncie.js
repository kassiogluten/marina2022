import Head from "next/head";
import { FollowMe } from "../components/FollowMe";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { GostoDeConversar } from "../components/sobre/GostoDeConversar";
import { Hero } from "../components/anuncie/Hero";
import { Publico } from "../components/anuncie/Publico";

export default function Anuncie() {
  return (
    <>
      <Head>
        <title>Anuncie | Marina Fernandes</title>
        <meta property="og:title" content="Marina Fernandes" />
        <meta
          name="description"
          content="Anuncie para um público de engajamento real."
        />
        <meta
          property="og:description"
          content="Anuncie para um público de engajamento real."
        />
        <meta property="og:image" content="favicon.png" key="ogimage" />
      </Head>
      <Header logo />
      <Hero />
      <Publico />
      <FollowMe />
      <Footer />
    </>
  );
}
