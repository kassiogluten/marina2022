import Head from "next/head";
import { FollowMe } from "../components/FollowMe";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/home/Hero";
import { CategoriaA } from "../components/home/CategoriaA";
import { CategoriaB } from "../components/home/CategoriaB";
import { NovosConteudos } from "../components/home/NovosConteudos";
import { QuemSou } from "../components/home/QuemSou";
import { useEffect, useState } from "react";
import { graphCMSClient } from "../lib/graphCMSClient";
import { getPostsQuery } from "../queries/getPostsQuery";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataModa, setDataModa] = useState([]);
  const [dataMaternidade, setDataMaternidade] = useState([]);

  async function get() {
    try {
      setLoading(true);

      const todos = await graphCMSClient().request(getPostsQuery, {
        first: 6,
        skip: 0,
        category: [],
      });

      const todosPosts = todos.posts.map((post) => {
        return {
          id: post.id,
          title: post.title,
          tags: post.tags,
          slug: post.slug,
          img: post.coverImage?.url || "/favicon.png",
          shortDate: new Date(post.date + "T12:00").toLocaleDateString("pt-BR", {
            timeZone: "America/Sao_Paulo",
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
          }),
          longDate: new Date(post.date + "T12:00").toLocaleDateString("pt-BR", {
            timeZone: "America/Sao_Paulo",
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
          words: post.content.text.trim().split(/\s+/).length,
        };
      });

      console.log('todos', todos)
      console.log('todosPosts', todosPosts)

      const moda = await graphCMSClient().request(getPostsQuery, {
        first: 6,
        skip: 0,
        category: ["MODA"],
      });

      const modaPosts = moda.posts.map((post) => {
        return {
          id: post.id,
          title: post.title,
          tags: post.tags,
          slug: post.slug,
          img: post.coverImage?.url || "/favicon.png",
          shortDate: new Date(post.date).toLocaleDateString("pt-BR", {
            timeZone: "America/Sao_Paulo",
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
          }),
          longDate: new Date(post.date).toLocaleDateString("pt-BR", {
            timeZone: "America/Sao_Paulo",
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
          words: post.content.text.trim().split(/\s+/).length,
        };
      });

      const maternidade = await graphCMSClient().request(getPostsQuery, {
        first: 6,
        skip: 0,
        category: ["MATERNIDADE"],
      });

      const maternidadePosts = maternidade.posts.map((post) => {
        return {
          id: post.id,
          title: post.title,
          tags: post.tags,
          slug: post.slug,
          img: post.coverImage?.url || "/favicon.png",
          shortDate: new Date(post.date).toLocaleDateString("pt-BR", {
            timeZone: "America/Sao_Paulo",
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
          }),
          longDate: new Date(post.date).toLocaleDateString("pt-BR", {
            timeZone: "America/Sao_Paulo",
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
          words: post.content.text.trim().split(/\s+/).length,
        };
      });

      setData(todosPosts);
      setDataModa(modaPosts);
      setDataMaternidade(maternidadePosts);
      setLoading(false);
    } catch (err) {
      console.log("erro:", err);
    } finally {
    }
  }
  // console.log("moda", dataModa);
  // console.log("maternidade", dataMaternidade);

  useEffect(() => {
    get();
  }, []);

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
      <NovosConteudos data={data} loading={loading} />
      <QuemSou />
      <CategoriaA data={dataModa} />
      <CategoriaB data={dataMaternidade} />
      <FollowMe />
      <Footer />
    </>
  );
}
