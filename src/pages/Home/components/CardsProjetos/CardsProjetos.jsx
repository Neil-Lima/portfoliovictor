import React from 'react';
import { Box, Button, Container, Flex, Image } from '@chakra-ui/react';

function CardsProjetos() {
  return (
    <>
      <Box className="card">
        <Image className="card-img-top w-100 d-block" />
        <Box className="card-body">
          <h4 className="card-title" textAlign="center">
            Título
          </h4>
          <Container marginBottom="10px">
            <Flex>
              <Image style={{ margin: '6px' }} />
              <Image style={{ margin: '6px' }} />
              <Image style={{ margin: '6px' }} />
            </Flex>
          </Container>
          <Button colorScheme="blue" type="button">
            Ver detalhes
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default CardsProjetos;
