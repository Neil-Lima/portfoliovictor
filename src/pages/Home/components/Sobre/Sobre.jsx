import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import { useTrail, animated } from 'react-spring';
import Eu from './img/eu.jpg';

function Sobre() {
  const aboutText = [
    "Olá, me chamo Victor Lima, tenho 30 anos, moro em Belém do Pará, sou desenvolvedor Front-End junior, Estou cursando o quarto semestre de análise e desenvolvimento de sistemas.",
    "Estou em busca de uma oportunidade no ramo de Front-End e futuramente trabalhar com aplicativos mobile.",
    "Possuo conhecimento nas tecnologias Html, Css, javascript, Bootstrap, Mysql, Materialize, Style-components, React, React-typescript, Chakra-ui, Material-ui, Json-server, etc."
  ];

  const trail = useTrail(aboutText.length, {
    from: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
    to: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    delay: 200,
  });

  return (
    <Box p={4}>
      <Flex direction={{ base: 'column', md: 'row' }} align="center">
        <Flex
          direction="column"
          align="center"
          ml={{ base: 0, md: 8 }}
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
          {trail.map((props, index) => (
            <animated.div key={index} style={{ ...props, marginBottom: '10px' }}>
              <Text>{aboutText[index]}</Text>
            </animated.div>
          ))}
        </Flex>
        <animated.div style={trail[0]}>
          <Image src={Eu} alt="Eu" width="410px" />
        </animated.div>
      </Flex>
    </Box>
  );
}

export default Sobre;
