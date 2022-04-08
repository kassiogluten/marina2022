import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Heading,
  Spinner,
  Text,
  VStack,
  Center,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { graphCMSClient } from "../lib/graphCMSClient";

import Link from "next/link";

export function SearchModal({ modalSearch, setModalSearch, search }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  async function get() {
    console.log("get");
    try {
      setLoading(true);

      const { posts } = await graphCMSClient().request(
        `
        {
          posts(orderBy: createdAt_DESC, where: {_search: "${search}"}) {
            id
            title
            slug
          }
        }
            `
      );

      console.log("posts", posts);

      const formatedPost = posts.map((post) => {
        return {
          id: post.id,
          title: post.title,
          slug: post.slug,
        };
      });

      setData(formatedPost);
      setLoading(false);
    } catch (err) {
      console.log("erro:", err);
      setLoading(false);
      return <Heading>Erro</Heading>;
    }
  }

  useEffect(() => {
    if (search.length > 2) get();
  }, [modalSearch, search]);
  console.log("search:", data);

  const Results = () => {
    return data.map((item) => (
      <Link key={item.id} href={`/blog/${item.slug}`} passHref>
        <Button align="start" fontSize={12} onClick={() => setModalSearch(false)} maxW={350} as="a">
          <Text noOfLines={2}>{item.title}</Text>
        </Button>
      </Link>
    ));
  };

  return (
    <Modal isOpen={modalSearch} onClose={() => setModalSearch(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontWeight={400}>
          Resultados de: <b>{search}</b>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* <Button onClick={get}>teste</Button> */}
          <VStack>{loading ? <Spinner /> : <Results />}</VStack>
          {!loading && data.length < 1 && (
            <Center>Nada encontrado com esse termo 😥</Center>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
