import React, { useEffect } from 'react'
import blog from './img/blog.png'
import ultrabook from './img/ultrabook.png'
import filmes from './img/filmes.png'
function Portfolio() {
   
  return ( 
    <>
    <h1 style={{textAlign: "center", color: "var(--bs-cyan)"}}>Portfolio</h1>
    <p style={{textAlign: "center"}}>Veja alguns projetos pessoais  que desenvolvi</p>.
    <p style={{textAlign: "center"}}>Vale lembrar que esses projetos tem como objetivo apenas mostrar as minhas habilidades e servem apenas como mostruário.</p>
    <div class="container"> 
    <div class="row" style={{marginTop: "35px", textAlign: "center"}}>
        <div class="col" style={{marginRight: "5px", borderStyle: "solid", borderColor: "var(--bs-cyan)"}}>
            <div class="card" data-bss-hover-animate="tada" style={{background: "rgba(255,255,255,0)", textAlign: "center"}}>
                <img class="card-img-top w-100 d-block" src={ultrabook} style={{height: "180px"}} />
                <div class="card-body">
                    <h5 class="card-title" style={{color: "var(--bs-cyan)"}}>ULTRABOOK</h5>
                    <p class="card-text">Rede social criada com React.js, Bootstrap e json-server.</p>
                    <button class="btn btn-primary" type="button">Ir para o projeto</button>
                </div>
            </div>
        </div>
        <div class="col" style={{marginRight: "5px", borderStyle: "solid", borderColor: "var(--bs-cyan)"}}>
            <div class="card" data-bss-hover-animate="tada" style={{background: "rgba(255,255,255,0)", textAlign: "center"}}>
                <img class="card-img-top w-100 d-block" src={blog} style={{height: "180px"}} />
                <div class="card-body">
                    <h5 class="card-title" style={{color: "var(--bs-cyan)"}}>BLOG MULTIVERSO DA NERDICE</h5>
                    <p class="card-text">Blog pessoal que desenvolvi com o objetivo de abordar temas como filmes, séries, animes, etc. este projeto foi criado com Html, Boostrap, React.js, Javascript, cms, Css.</p>
                    <button class="btn btn-primary" type="button">Ir para o projeto</button>
                </div>
            </div>
        </div>

        <div class="col" style={{marginRight: "5px", borderStyle: "solid", borderColor: "var(--bs-cyan)"}}>
            <div class="card" data-bss-hover-animate="tada" style={{background: "rgba(255,255,255,0)", textAlign: "center"}}>
                <img class="card-img-top w-100 d-block" src={filmes} style={{height: "180px"}} />
                <div class="card-body">
                    <h5 class="card-title" style={{color: "var(--bs-cyan)"}}>FILMES ONLINE</h5>
                    <p class="card-text">Clone de site de Filmes Online feito com React, json-server, React-query e bootstrap.</p>
                    <button class="btn btn-primary" type="button">Ir para o projeto</button>
                </div>
            </div>
        </div>
     
    </div>
        
    <div class="row" style={{marginTop: "35px", textAlign: "center"}}>             
        <div class="col" style={{marginRight: "5px", borderStyle: "solid", borderColor: "var(--bs-cyan)"}}>
           <div class="card" data-bss-hover-animate="tada" style={{background: "rgba(255,255,255,0)",textAlign: "center"}}>
            <img class="card-img-top w-100 d-block" src="https://www.dcam.ufscar.br/infraestrutura/infraestrutura2/carregando/image" style={{height:"180px"}}/>
                    <div class="card-body">
                        <h5 class="card-title" style={{color: "var(--bs-cyan)"}}>Clone mercado Livre</h5>
                        <h5>Em breve</h5>
                    </div>
                </div><span class="spinner-border spinner-border-sm" role="status" style={{fontSize: "19px", width: "82px", height: "80px"}}></span>
         </div>

         <div class="col" style={{marginRight: "5px", borderStyle: "solid", borderColor: "var(--bs-cyan)"}}>
           <div class="card" data-bss-hover-animate="tada" style={{background: "rgba(255,255,255,0)",textAlign: "center"}}>
            <img class="card-img-top w-100 d-block" src="https://www.dcam.ufscar.br/infraestrutura/infraestrutura2/carregando/image" style={{height:"180px"}}/>
                    <div class="card-body">
                        <h5 class="card-title" style={{color: "var(--bs-cyan)"}}>Clone mercado Livre</h5>
                        <h5>Em breve</h5>
                    </div>
                </div><span class="spinner-border spinner-border-sm" role="status" style={{fontSize: "19px", width: "82px", height: "80px"}}></span>
         </div>

         <div class="col" style={{marginRight: "5px", borderStyle: "solid", borderColor: "var(--bs-cyan)"}}>
           <div class="card" data-bss-hover-animate="tada" style={{background: "rgba(255,255,255,0)",textAlign: "center"}}>
            <img class="card-img-top w-100 d-block" src="https://www.dcam.ufscar.br/infraestrutura/infraestrutura2/carregando/image" style={{height:"180px"}}/>
                    <div class="card-body">
                        <h5 class="card-title" style={{color: "var(--bs-cyan)"}}>Clone mercado Livre</h5>
                        <h5>Em breve</h5>
                    </div>
                </div><span class="spinner-border spinner-border-sm" role="status" style={{fontSize: "19px", width: "82px", height: "80px"}}></span>
         </div>
        
    </div>    
    </div>
   

    </>
  )
}

export default Portfolio