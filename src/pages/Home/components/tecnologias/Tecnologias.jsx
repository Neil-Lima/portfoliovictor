import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';

import html from './img/html.png';
import css from './img/css.png';
import bootstrap from './img/bootstrap-stack.png';
import bootstrapReact from './img/bootstrap-react.png';
import javascript from './img/js.png';
import chakra from './img/chakra.png';
import materialize from './img/materialize-logo-0FCAD8A6F8-seeklogo.com.png';
import mongodb from './img/mongodb.png';
import mysql from './img/mysql-logo2.png';
import react from './img/react.png';
import jsonServer from './img/json-server.png';
import styleComponent from './img/StyleComponent.png';
import typescript from './img/typescript.png';
import material from './img/material.png';
import reactquery from './img/react-query.png';

const technologiesData = [
  { name: 'HTML 5', image: html },
  { name: 'CSS', image: css },
  { name: 'JAVASCRIPT', image: javascript },
  { name: 'BOOTSTRAP', image: bootstrap },
  { name: 'MATERIALIZE', image: materialize },
  { name: 'REACT', image: react },
  { name: 'BOOTSTRAP REACT', image: bootstrapReact },
  { name: 'STYLE-COMPONENT', image: styleComponent },
  { name: 'REACT-TYPESCRIPT', image: typescript },
  { name: 'MYSQL', image: mysql },
  { name: 'CHAKRA-UI', image: chakra },
  { name: 'JSON-SERVER', image: jsonServer },
  { name: 'Material-ui', image: material },
  { name: 'React-query', image: reactquery },
];

function Tecnologias() {
  return (

    <Box p={4}>
      <Text textAlign="center" color="white" fontSize="xl" mt={4}>
        Conhecimentos:
      </Text>
      <Flex flexWrap="wrap" justifyContent="center">
        {technologiesData.map((technology, index) => (
          <Box
            key={index}
            textAlign="center"
            bg="rgba(33, 37, 41, 0)"
            p={2}
            m={2}
            w="150px"
            position="relative"
          >
            <Text color="teal.400" fontSize="md" mb={2} zIndex={1}>
              {technology.name}
            </Text>
            <Image
              src={technology.image}
              alt={technology.name}
              boxSize="50px"
              style={{
                filter: "sepia(100%) hue-rotate(180deg) saturate(500%)",  // Aplicando a cor teal
              }}
            />
          </Box>
        ))}
      </Flex>
    </Box>
    );
}

export default Tecnologias;
