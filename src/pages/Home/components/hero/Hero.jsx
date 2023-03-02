import React from 'react'
import Victor from './img/victor.jpg'
function Hero() {
  return (
    <>
  <div class="card" style={{background: "url('https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&amp;w=1000&amp;q=80')",backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', padding: "66px"}}>
    <div class="card-body" style={{background: "rgba(35,35,74,0.81)", textAlign: "center", padding: "46px"}}>
      <img class="border  rounded-circle border-5"  src={Victor} style={{width: "150px", border: "6px solid rgb(97,218,251)" }}/>
        <h2 class="card-title" style={{color: "rgb(97,218,251)"}}>VICTOR NEIL</h2>
        <p class="card-text" style={{fontSize: "26px"}}>Desenvolvedor Front-End React</p>
    </div>
  </div>
    </>
  )
}

export default Hero