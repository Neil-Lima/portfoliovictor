import React from 'react';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';

function CardsProjetos() {
  return (

    <Flex justify="center" mt={10}>
      <Box as="div" className="col" style={{ margin: '10px' }}>
        <Box
          as="div"
          className="card"
          style={{
            textAlign: 'center',
            borderStyle: 'solid',
            borderColor: 'blue',
            background: 'rgba(255,255,255,0)',
          }}
        >
          <Image className="card-img-top w-100 d-block" />
          <Box className="card-body">
            <Text as="h4" className="card-title" style={{ color: 'lightBlue' }}>
              Ultrabook
            </Text>
            <Text style={{color:"white"}}>
              Clone de uma rede social estática semelhante ao facebook. Este projeto foi feito com React, React-boostrap e Chakra-ui.
            </Text>
            <Button colorScheme="blue" mt={3} variant="outline">
              Acessar Repositório
            </Button>
          </Box>
        </Box>
      </Box>

      <Box as="div" className="col" style={{ margin: '10px' }}>
        <Box
          as="div"
          className="card"
          style={{
            textAlign: 'center',
            borderStyle: 'solid',
            borderColor: 'teal',
            background: 'rgba(255,255,255,0)',
          }}
        >
          <Image className="card-img-top w-100 d-block" />
          <Box className="card-body">
            <Text as="h4" className="card-title" style={{ color: 'teal' }}>
              Filmes Online
            </Text>
            <Text style={{color:"white"}}>
              Este é um clone de app de filmes online. Este projeto foi feito com React-typescript, React-boostrap, React-hooks, Chakra-ui e um hook que eu mesmo desenvolvi para consumir a api fake com json-server.
            </Text>
            <Button colorScheme="teal" mt={3} variant="outline">
              Acessar Repositório
            </Button>
          </Box>
        </Box>
      </Box>

      <Box as="div" className="col" style={{ margin: '10px' }}>
        <Box
          as="div"
          className="card"
          style={{
            textAlign: 'center',
            borderStyle: 'solid',
            borderColor: 'orange',
            background: 'rgba(255,255,255,0)',
          }}
        >
          <Image className="card-img-top w-100 d-block" />
          <Box className="card-body">
            <Text as="h4" className="card-title" style={{ color: 'orange' }}>
              Animes Crud
            </Text>
            <Text style={{color:"white"}}>
              Este é um projeto pessoal que eu criei para manipulação de api fake de animes com json server, utilizando um hook que eu desenvolvi para manipulação de api. Este projeto também é feito com React-boostrap e chakra-ui.
            </Text>
            <Button colorScheme="orange" mt={3} variant="outline">
              Acessar Repositório
            </Button>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default CardsProjetos;
