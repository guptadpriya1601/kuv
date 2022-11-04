import { Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function Card({ image, name, role }) {
  return (
    <VStack
      bg="black"
      p="10px"
      color="white"
      borderRadius="10px"
      boxShadow="2xl"
    >
      <Image
        borderRadius="50%"
        boxSize="150px"
        src={image}
        alt="Dan Abramov"
        border="2px bold black"
      />
      <Text fontSize="xl">{name}</Text>
      <Text fontSize="md">{role}</Text>
    </VStack>
  );
}
