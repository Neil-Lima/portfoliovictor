import React from 'react';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { useTrail, animated } from 'react-spring';

function CardsProjetos() {
  const projects = [
    {
      title: 'Ultrabook',
      description: 'Clone de uma rede social estática semelhante ao Facebook feito com chakra-ui e React-boostrap.',
      color: 'blue',
      repositoryLink: 'https://github.com/Neil-Lima/ultrabook_social',
    },
    {
      title: 'Filmes Online',
      description: 'Clone de app de filmes online. Feito com React-typescript, chakra-ui, React-boostrap e um Hook que desenvolvi para manipulação de api chamado useApi',
      color: 'teal',
      repositoryLink: 'https://github.com/Neil-Lima/filmeOnline',
    },
    {
      title: 'Animes Crud',
      description: 'Projeto pessoal para manipulação de api fake de animes feito com React-Bootstrap e chakra-ui e um hook que eu mesmo desenvolvi chamado useApi...',
      color: 'orange',
      repositoryLink: 'https://github.com/Neil-Lima/animesCrud',
    },
    {
      title: 'Mini Aplicativos',
      description: 'Projeto pessoal que contém mini aplicativos feitos com React-boostrap e react-hooks e styled-components',
      color: 'red',
      repositoryLink: 'https://github.com/Neil-Lima/Mini_aplicativos'
    },
  ];

  const trail = useTrail(projects.length, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    to: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    delay: 200,
  });

  return (
    <>
      <Text textAlign="center" color="white" fontSize="xl" mt={4}>
        Projetos:
      </Text>
      <Flex justify="center" mt={10}>
        {trail.map((props, index) => (
          <animated.div
            key={index}
            style={{ ...props, margin: '10px' }}
            className="col"
          >
            <Box
              as="div"
              className="card"
              style={{
                textAlign: 'center',
                borderStyle: 'solid',
                borderColor: projects[index].color,
                background: 'rgba(255,255,255,0)',
              }}
            >
              <Image className="card-img-top w-100 d-block" />
              <Box className="card-body">
                <Text as="h4" className="card-title" style={{ color: projects[index].color }}>
                  {projects[index].title}
                </Text>
                <Text style={{ color: 'white' }}>{projects[index].description}</Text>
                <Button
                  as="a"
                  href={projects[index].repositoryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  colorScheme={projects[index].color}
                  mt={3}
                  variant="outline"
                >
                  Acessar Repositório
                </Button>
              </Box>
            </Box>
          </animated.div>
        ))}
      </Flex>
    </>
  );
}

export default CardsProjetos;
