import Head from "next/head";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { CategoriaA } from "../components/home/CategoriaA";
import { CategoriaB } from "../components/home/CategoriaB";
import { NovosConteudos } from "../components/home/NovosConteudos";
import { QuemSou } from "../components/home/QuemSou";

export default function Home() {
  return (
    <>
      <Head>
        <title>Marina Fernandes</title>
        <meta property="og:title" content="Marina Fernandes" />
        <meta
          name="description"
          content="Inspirando meninas mulheres a viverem a liberdade de ser quem elas são."
        />
        <meta
          property="og:description"
          content="Inspirando meninas mulheres a viverem a liberdade de ser quem elas são."
        />
        <meta property="og:image" content="/favicon.png" key="ogimage" />
      </Head>
      <Header />
      <Hero />
      <NovosConteudos />
      <QuemSou />
      <CategoriaA />
      <CategoriaB/>
    </>
  );
}
