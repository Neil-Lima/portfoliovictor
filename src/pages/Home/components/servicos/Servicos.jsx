import React from 'react'
import servicos from './img/servicosImage.jpg'

function Servicos() {
  return (
   <>
<div className="container">
<h1 style={{color: "var(--bs-cyan)", textAlign:"center"}}>Serviços:</h1><br/>
<div class="row row-cols-1 row-cols-md-2">
    <div class="col">
        <img class="rounded w-100 h-100 fit-cover" style={{minHeight: "300px", background: `url(${servicos})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}/></div>
    <div class="col d-flex flex-column justify-content-center p-4">
        <div class="text-center text-md-start d-flex flex-column align-items-center align-items-md-start mb-5">
            <div class="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon md" style={{background: "var(--bs-blue)"}}>
                <i class="fab fa-html5" style={{fontSize: "30px"}}></i>
            </div>
            <div>
                <h4>Desenvolvedor Front-End</h4>
                <p>Produção de websites responsivos, sistemas, landing pages e sites dinâmicos.</p>
            </div>
        </div>
        <div class="text-center text-md-start d-flex flex-column align-items-center align-items-md-start mb-5">
            <div class="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon md">
                <i class="far fa-file-code" style={{fontSize: "30px"}}></i>
            </div>
            <div>
                <h4>Templates profissionais</h4>
                <p></p>
                <p>Templates de sites profissionais que atraem clientes para o seu negócio. </p>
            </div>
        </div>
        <div class="text-center text-md-start d-flex flex-column align-items-center align-items-md-start">
            <div class="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon md"><i class="fab fa-react"></i></div>
            <div>
                <h4>Desenvolvedor React</h4>
                <p>Criação de aplicativos Web utilizando uma das mais poderosas tecnologias do Front-End do mercado.</p>
            </div>
        </div>
    </div>
</div>
</div>
   
   </>
  )
}

export default Servicos