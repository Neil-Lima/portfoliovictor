import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { FaReact } from 'react-icons/fa'; // Importar o ícone React do Chakra UI

import Victor from './img/victor.jpg';

function Hero() {
  return (
    <Box
      bg="url('https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&amp;w=1000&amp;q=80')"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundAttachment="fixed"
      padding="66px"
      borderRadius="lg"
      boxShadow="md"
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        bg="rgba(35,35,74,0.81)"
        textAlign="center"
        padding="10px"
      >
        <Image
          className="border rounded-circle border-5"
          src={Victor}
          alt="Victor"
          width="150px"
          border="6px solid rgb(97,218,251)"
          borderRadius="full"
        />
        <Text as="h2" color="teal.400" fontSize="xl" mt={2}>
          VICTOR NEIL
        </Text>
        <Text as="p" fontSize="xl">
          Desenvolvedor Front-End <FaReact style={{ display: 'inline', verticalAlign: 'text-bottom' }} /> React
        </Text>
      </Flex>
    </Box>
  );
}

export default Hero;
