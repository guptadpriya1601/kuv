import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import Card from "../components/about/card";
import jugal from "../public/images/jugal.jpg";
import matin from "../public/images/matin.jpg";
import priya from "../public/images/priya.jpg";

export default function about() {
  const datas = [
    { image: jugal.src, name: "jugal", role: "My lollipop Boy" },
    { image: matin.src, name: "matin", role: "My lollipop Boy" },
    { image: priya.src, name: "priya", role: "My lollipop Boy" },
  ];
  return (
    <VStack h="100%" mb="20px">
        <Box w="100%">
        <Text m="20px"  fontSize="50px">About us
        </Text>
        <Text m="20px">Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets.[1] Lorem ipsum was introduced to the digital world in the mid-1980s, when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker. Other popular word processors, including Pages and Microsoft Word, have since adopted Lorem ipsum,[2] as have many LaTeX packages,[3][4][5] web content managers such as Joomla! and WordPress, and CSS libraries such as Semantic UI.[6]</Text>
        </Box>
      <Text m="20px" color="black" fontSize="3xl" as="b">Our Developer Team</Text>
      <HStack w="100% " justifyContent="space-evenly" flexWrap="wrap"> 
        {datas.map((data) => (
          <Card image={data.image} role={data.role} name={data.name} />
        ))}
      </HStack>
    </VStack>
  );
}
