import Head from "next/head";
import { FollowMe } from "../components/FollowMe";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { GostoDeConversar } from "../components/sobre/GostoDeConversar";
import { Hero } from "../components/sobre/Hero";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre mim | Marina Fernandes</title>
        <meta property="og:title" content="Marina Fernandes" />
        <meta
          name="description"
          content="moda, estilo de vida, viagens, bem-estar, atividade física, comida saudável e maternidade"
        />
        <meta
          property="og:description"
          content="moda, estilo de vida, viagens, bem-estar, atividade física, comida saudável e maternidade"
        />
        <meta property="og:image" content="favicon.png" key="ogimage" />
      </Head>
      <Header logo />
      <Hero />
      <GostoDeConversar />
      <FollowMe />
      <Footer />
    </>
  );
}
