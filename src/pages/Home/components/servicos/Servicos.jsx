import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { FaHtml5, FaFileCode, FaReact } from 'react-icons/fa';

import servicos from './img/servicosImage.jpg';

function Servicos() {
  return (
    <Box>
      <Box textAlign="center">
        <Text color="teal.400" fontSize="xl">
          Serviços:
        </Text>
      </Box>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="center"
        p={4}
      >
        <Image
          src={servicos}
          alt="Serviços"
          borderRadius="md"
          objectFit="cover"
          minH="300px"
          flex={{ base: 'none', md: 1 }}
        />
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 4 }}>
          <Flex direction="column" align={{ base: 'center', md: 'flex-start' }}>
            <Flex
              bg="blue.500"
              color="white"
              rounded="full"
              w="10"
              h="10"
              align="center"
              justify="center"
              mb={3}
            >
              <FaHtml5 size="30px" />
            </Flex>
            <Box>
              <Text fontSize="xl">Desenvolvedor Front-End</Text>
              <Text>
                Produção de websites responsivos, sistemas, landing pages e
                sites dinâmicos.
              </Text>
            </Box>
          </Flex>
          <Flex
            mt={4}
            direction="column"
            align={{ base: 'center', md: 'flex-start' }}
          >
            <Flex
              bg="blue.500"
              color="white"
              rounded="full"
              w="10"
              h="10"
              align="center"
              justify="center"
              mb={3}
            >
              <FaFileCode size="30px" />
            </Flex>
            <Box>
              <Text fontSize="xl">Templates profissionais</Text>
              <Text>
                Templates de sites profissionais que atraem clientes para o seu
                negócio.
              </Text>
            </Box>
          </Flex>
          <Flex
            mt={4}
            direction="column"
            align={{ base: 'center', md: 'flex-start' }}
          >
            <Flex
              bg="blue.500"
              color="white"
              rounded="full"
              w="10"
              h="10"
              align="center"
              justify="center"
              mb={3}
            >
              <FaReact size="30px" />
            </Flex>
            <Box>
              <Text fontSize="xl">Desenvolvedor React</Text>
              <Text>
                Criação de aplicativos Web utilizando uma das mais poderosas
                tecnologias do Front-End do mercado.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Servicos;
