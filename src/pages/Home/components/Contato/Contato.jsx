import React from 'react';
import { Box, Button, Container, Flex, Input, Textarea } from '@chakra-ui/react';
import { FaWhatsapp, FaEnvelope, FaGithub } from 'react-icons/fa';

function Contato() {
  return (
    <>
      <Box as="section" pos="relative" py={{ base: 4, xl: 5 }}>
        <Container pos="relative">
          <Flex justify="center">
            <Box w={{ base: '100%', md: 'auto' }} mb={{ base: 4, md: 0 }} mr={{ md: 4, xl: 0 }}>
              <Flex flexDir="column" justify="center" align="start" h="100%">
                <Flex align="center" p={3}>
                  <Box
                    className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon"
                    color="blue.500"
                  >
                    <FaWhatsapp />
                  </Box>
                  <Box px={2}>
                    <Box as="h6" mb={0}>
                      Whatsapp
                    </Box>
                    <Box as="p" mb={0}>
                      (91) 981179825
                    </Box>
                  </Box>
                </Flex>
                <Flex align="center" p={3}>
                  <Box
                    className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon"
                    color="blue.500"
                  >
                    <FaEnvelope />
                  </Box>
                  <Box px={2}>
                    <Box as="h6" mb={0}>
                      Email
                    </Box>
                    <Box as="p" mb={0}>
                      neil.033@hotmail.com
                    </Box>
                  </Box>
                </Flex>
                <Flex align="center" p={3}>
                  <Box
                    className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon"
                    color="blue.500"
                  >
                    <FaGithub />
                  </Box>
                  <Box px={2}>
                    <Box as="h6" mb={0}>
                      Github
                    </Box>
                    <Box as="p" mb={0}>
                      Neil-Lima
                    </Box>
                  </Box>
                </Flex>
              </Flex>
            </Box>            
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default Contato;
