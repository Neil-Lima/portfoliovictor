import React from 'react'
import Eu from './img/eu.jpg'
function Sobre() {
  return (
   <>
     <div className="container">
     <div class="row" style={{margin: "15px", textAlign: "center", marginTop: "15px"}}>
    <div class="col-md-5" style={{textAlign: "center"}}>
        <i class="far fa-star" style={{marginTop: "17px", fontSize: "32px", color: "var(--bs-cyan)"}}></i>
        <h2 style={{marginTop: "5px", color: "var(--bs-cyan)"}}>Sobre mim:</h2>
        <p>Olá, me chamo Victor Lima, tenho 29 anos, sou desenvolvedor Front-End junior, Estou cursando o terceiro semestre de análise e desenvolvimento de sistemas.</p>
        <p>Estou em busca de uma oportunidade no ramo de Front-End e futuramente trabalhar com aplicativos mobile.</p>
        <p>Possuo conhecimento nas tecnologias Html, Css, javascript, Bootstrap, Mysql, Materialize, MongoDb, Style-components, React, React-typescript, etc.</p>
    </div>
    <div class="col-md-7">
        <img src={Eu} style={{width: "410px"}} /></div>
     </div>
     </div>
   </>
  )
}

export default Sobre