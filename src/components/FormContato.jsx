import React, { useState } from "react";
import {
  Text,
  VStack,
  Heading,
  Button,
  Input,
  useToast,
  Textarea,
  Flex,
  InputLeftElement,
  InputGroup,
  InputLeftAddon,
  Icon,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import axios from "axios";
import { FiMail, FiPhone, FiUser } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

export function FormContato() {
  const {
    register,
    trigger,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  async function handleSendMessage(data) {
    setIsLoading(true);

    try {
      const { Nome, Email, Telefone, Mensagem } = data;

      await axios.post("/api/mail/contactForm", {
        name: Nome,
        phone: Telefone,
        email: Email,
        message: Mensagem,
      });

      toast({
        title: "Obrigado.",
        description: "Sua mensagem foi enviada",
        status: "success",
        isClosable: true,
        position: "top",
      });

      reset();

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      toast({
        title: "Ocorreu um erro.",
        description:
          "Por favor, tente novamente mais tarde ou entre em contato com a gente através do WhatsApp.",
        status: "error",
        isClosable: true,
        position: "top",
      });
    }
  }

  return (
    <Flex flexDir="column" as="form" onSubmit={handleSubmit(handleSendMessage)}>
      <VStack spacing={4} py={8} align="start">
        <InputGroup>
          <InputLeftElement py="26px" px="35px">
            <Icon color="verde" boxSize={22} as={FaRegUserCircle} />
          </InputLeftElement>
          <Input
            bg="bege"
            id="Nome"
            borderColor={errors.Nome ? "black" : "inherit"}
            p="25px"
            pl={61}
            placeholder="Qual seu nome ?"
            type="text"
            {...register("Nome", { required: true })}
          />
        </InputGroup>

        {errors.Nome && <Text>Nome obrigatório! ☝️</Text>}

        <InputGroup>
          <InputLeftElement py="26px" px="35px">
            <Icon color="verde" boxSize={22} as={FiMail} />
          </InputLeftElement>

          <Input
            bg="bege"
            id="Email"
            borderColor={errors.Email ? "black" : "inherit"}
            p="25px"
            pl={61}
            placeholder="Qual seu e-mail ?"
            type="text"
            {...register("Email", { required: true })}
          />
        </InputGroup>
        {errors.Email && <Text>Email obrigatório! ☝️</Text>}

        <InputGroup>
          <InputLeftElement py="26px" px="35px">
            <Icon color="verde" boxSize={22} as={FiPhone} />
          </InputLeftElement>
          <Input
            bg="bege"
            id="Telefone"
            borderColor={errors.Telefone ? "black" : "inherit"}
            p="25px"
            pl={61}
            placeholder="E seu telefone ?"
            type="text"
            {...register("Telefone", { required: true })}
          />
        </InputGroup>
        {errors.Telefone && <Text>Telefone obrigatório! ☝️</Text>}

        <Textarea
          bg="bege"
          h={200}
          id="Mensagem"
          placeholder="Deixe sua mensagem"
          {...register("Mensagem")}
        />
      </VStack>
      {!isValid ? (
        <Button
          sx={{ cursor: "not-allowed" }}
          opacity=".3"
          bg="verde"
          colorScheme="white"
          h="56px"
          w="100%"
          fontSize="14px"
          onClick={() => {
            trigger();
          }}
        >
          Enviar
        </Button>
      ) : (
        <Button
          isLoading={isLoading}
          bg="verde"
          colorScheme="white"
          h="56px"
          w="100%"
          type="submit"
          fontSize="14px"
        >
          Enviar
        </Button>
      )}
    </Flex>
  );
}
