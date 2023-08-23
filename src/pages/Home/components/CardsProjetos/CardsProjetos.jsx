import React from 'react';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';

function CardsProjetos() {
  const projects = [
    {
      title: 'Ultrabook',
      description: 'Clone de uma rede social estática semelhante ao Facebook. Feito com React, React-bootstrap e Chakra-ui.',
      color: 'blue',
      repositoryLink: 'https://github.com/Neil-Lima/ultrabook_social',
    },
    {
      title: 'Filmes Online',
      description: 'Clone de app de filmes online. Feito com React-typescript, React-bootstrap, React-hooks, Chakra-ui e um hook para consumir a api fake com json-server.',
      color: 'teal',
      repositoryLink: 'https://github.com/Neil-Lima/filmeOnline',
    },
    {
      title: 'Animes Crud',
      description: 'Projeto pessoal para manipulação de api fake de animes com json server, usando um hook próprio para manipulação de api. Feito com React-bootstrap e Chakra-ui.',
      color: 'orange',
      repositoryLink: 'https://github.com/Neil-Lima/animesCrud',
    },
  ];

  return (
    <Flex justify="center" mt={10}>
      {projects.map((project, index) => (
        <Box as="div" className="col" style={{ margin: '10px' }} key={index}>
          <Box
            as="div"
            className="card"
            style={{
              textAlign: 'center',
              borderStyle: 'solid',
              borderColor: project.color,
              background: 'rgba(255,255,255,0)',
            }}
          >
            <Image className="card-img-top w-100 d-block" />
            <Box className="card-body">
              <Text as="h4" className="card-title" style={{ color: project.color }}>
                {project.title}
              </Text>
              <Text style={{ color: 'white' }}>{project.description}</Text>
              <Button as="a" href={project.repositoryLink} target="_blank" rel="noopener noreferrer" colorScheme={project.color} mt={3} variant="outline">
                Acessar Repositório
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
    </Flex>
  );
}

export default CardsProjetos;
