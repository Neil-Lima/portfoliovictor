import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './img/logo3.png'
function Navegacao() {
  return (
    <>
    <nav class="navbar navbar-light navbar-expand-md py-3" style={{color: "cyan", borderStyle: "solid"}}>
    <div class="container">
        <img src={Logo} style={{width: "90px"}} />
        <a class="navbar-brand d-flex align-items-center" to="/"></a>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-2">
            <span class="visually-hidden">Toggle navigation</span>
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navcol-2" class="collapse navbar-collapse" style={{color: "cyan", "info": "#0dcaf0", "--bs-info-rgb": "13,202,240",marginRight: "11px;"}}>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><Link class="nav-link active" to="/" style={{color: "cyan"}}>Home</Link></li>
                <li class="nav-item"><Link class="nav-link" to="/portfolio" style={{color: "cyan"}}>Portfolio</Link></li>
                <li class="nav-item"><Link class="nav-link" to="/contato" style={{color: "cyan"}}>Contato</Link></li>
            </ul>
        </div>
        <i class="bi bi-github" style={{fontSize: "30px", marginRight: "10px", color: "white"}}></i>
        <i class="bi bi-facebook" style={{fontSize: "30px", marginRight: "10px", color: "blue"}}></i>
        <i class="bi bi-instagram" style={{fontSize: "30px", marginRight: "10px", color: "pink  "}}></i>
    </div>
    </nav>
    </>
  )
}

export default Navegacao