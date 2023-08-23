import React from 'react'
import Hero from './components/hero/Hero'
import Servicos from './components/servicos/Servicos'
import Sobre from './components/Sobre/Sobre'
import Tecnologias from './components/tecnologias/Tecnologias'
import Navegacao from './components/navegacao/Navegacao'
import Contato from './components/Contato/Contato'
import CardsProjetos from './components/CardsProjetos/CardsProjetos'
import { Container } from 'react-bootstrap'

function Home() {
  return (
    <>
      <Navegacao />
      <Hero />
      <Container>
      <Sobre /><br />
      <Servicos /> <br />
      <Tecnologias /><br />
      <CardsProjetos /><br />
      <Contato /><br />
      </Container>
    </>

  )
}

export default Home