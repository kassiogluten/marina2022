import Head from "next/head";
import { FollowMe } from "../../components/FollowMe";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { GostoDeConversar } from "../../components/sobre/GostoDeConversar";
import { Hero } from "../../components/blog/Hero";
import { Blog } from "../../components/blog/Blog";
import { SingleBlog } from "../../components/blog/SingleBlog";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Blog | Marina Fernandes</title>
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
      <SingleBlog />
      <Footer />
    </>
  );
}
