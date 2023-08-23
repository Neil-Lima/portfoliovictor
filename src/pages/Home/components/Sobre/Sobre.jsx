import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import Eu from './img/eu.jpg';

function Sobre() {
  return (
      
    <Box p={4}>
      <Flex direction={{ base: 'column', md: 'row' }} align="center">
        <Flex
          direction="column"
          align="center"
          mr={{ base: 0, md: 8 }}
          mb={{ base: 4, md: 0 }}
          textAlign="center"
        >
          <Box
            as={FaStar}
            mt={3}
            fontSize="32px"
            color="teal.400"
          />
          <Text as="h2" mt={2} color="teal.400">
            Sobre mim:
          </Text>
          <Text>
            Olá, me chamo Victor Lima, tenho 30 anos, moro em Belém do Pará, sou desenvolvedor
            Front-End junior, Estou cursando o quarto semestre de análise e
            desenvolvimento de sistemas.
          </Text>
          <Text>
            Estou em busca de uma oportunidade no ramo de Front-End e
            futuramente trabalhar com aplicativos mobile.
          </Text>
          <Text>
            Possuo conhecimento nas tecnologias Html, Css, javascript, Bootstrap,
            Mysql, Materialize, Style-components, React, React-typescript, Chakra-ui, Material-ui, Json-server, etc.
          </Text>
        </Flex>
        <Image src={Eu} alt="Eu" width="410px" />
      </Flex>
    </Box>
    
    
  );
}

export default Sobre;
