import React from 'react'
import html from './img/html.png' 
import css from './img/css.png'
import bootstrap  from './img/bootstrap-stack.png'
import bootstrapReact from './img/bootstrap-react.png'
import javascript from './img/js.png'
import chakra from './img/chakra.png'
import materialize from './img/materialize-logo-0FCAD8A6F8-seeklogo.com.png'
import mongodb from './img/mongodb.png'
import mysql from './img/mysql-logo2.png'
import react from './img/react.png'
import jsonServer from './img/json-server.png'
import styleComponent from './img/StyleComponent.png'
import typescript from './img/typescript.png'

function Tecnologias() {
  return (
    <>
    <div class="container">
      <h1 style={{marginTop: "22px", textAlign: "center", color: "var(--bs-cyan)"}}>Conhecimentos:</h1>
    <div class="row">
        <div class="col">
            <div class="card" style={{textAlign: "center", background: "rgba(33,37,41,0)"}}>
                <div class="card-body">
                    <h6 style={{color: "rgb(97,218,251)"}}>HTML 5</h6>
                    <img src={html} style={{width: "100px", height: "100px"}} />
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card" style={{textAlign: "center", background: "rgba(33,37,41,0)"}}>
                <div class="card-body">
                    <h6 style={{color: "rgb(97,218,251)"}}>CSS</h6>
                    <img src={css} style={{width: "100px", height: "100px"}} />
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card" style={{textAlign: "center", background: "rgba(33,37,41,0)"}}>
                <div class="card-body">
                    <h6 style={{color: "rgb(97,218,251)"}}>JAVASCRIPT</h6>
                    <img src={javascript} style={{width: "100px", height: "100px"}} />
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card" style={{textAlign: "center", background: "rgba(33,37,41,0)"}}>
                <div class="card-body">
                    <h6 style={{color: "rgb(97,218,251)"}}>BOOTSTRAP</h6>
                    <img src={bootstrap} style={{width: "100px", height: "100px"}} />
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card" style={{textAlign: "center", background: "rgba(33,37,41,0)"}}>
                <div class="card-body">
                    <h6 style={{color: "rgb(97,218,251)"}}>MATERIALIZE</h6>
                    <img src={materialize} style={{width: "138px", height: "100px"}} />
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card" style={{textAlign: "center", background: "rgba(33,37,41,0)"}}>
                <div class="card-body">
                    <h6 style={{color: "rgb(97,218,251)"}}>REACT</h6>
                    <img src={react} style={{width: "122px", height: "100px"}} />
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card" style={{textAlign: "center", background: "rgba(33,37,41,0)"}}>
                <div class="card-body">
                    <h6 style={{color: "rgb(97,218,251)"}}>BOOTSTRAP REACT</h6>
                    <img src={bootstrapReact} style={{width: "142px", height: "100px"}} />
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card" style={{textAlign: "center", background: "rgba(33,37,41,0)"}}>
                <div class="card-body">
                    <h6 style={{color: "rgb(97,218,251)"}}>MONGO DB</h6>
                    <img src={mongodb} style={{width: "100px", height: "100px"}} />
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card" style={{textAlign: "center", background: "rgba(33,37,41,0)"}}>
                <div class="card-body">
                    <h6 style={{color: "rgb(97,218,251)"}}>STYLE-COMPONENT</h6>
                    <img src={styleComponent} style={{width: "100px", height: "100px"}} />
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card" style={{textAlign: "center", background: "rgba(33,37,41,0)"}}>
                <div class="card-body">
                    <h6 style={{color: "rgb(97,218,251)"}}>REACT-TYPESCRIPT</h6>
                    <img src={typescript} style={{width: "121px", height: "100px"}} />
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card" style={{textAlign: "center", background: "rgba(33,37,41,0)"}}>
                <div class="card-body">
                    <h6 style={{color: "rgb(97,218,251)"}}>MYSQL</h6>
                    <img src={mysql} style={{width: "100px", height: "100px"}} />
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card" style={{textAlign: "center", background: "rgba(33,37,41,0)"}}>
                <div class="card-body">
                    <h6 style={{color: "rgb(97,218,251)"}}>CHAKRA-UI</h6>
                    <img src={chakra} style={{width: "100px", height: "100px"}} />
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card" style={{textAlign: "center", background: "rgba(33,37,41,0)"}}>
                <div class="card-body">
                    <h6 style={{color: "rgb(97,218,251)"}}>JSON-SERVER</h6>
                    <img src={jsonServer} style={{width: "189px", height: "65px"}} />
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Tecnologias