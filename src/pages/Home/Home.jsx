import React from 'react'
import Hero from './components/hero/Hero'
import Servicos from './components/servicos/Servicos'
import Sobre from './components/Sobre/Sobre'
import Tecnologias from './components/tecnologias/Tecnologias'

function Home() {
  return (
   <>
    <Hero/>
   <Sobre/><br />
   <Servicos/> <br /> 
   <Tecnologias/> 
   </>
  
  )
}

export default Home