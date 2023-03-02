import React from 'react'
import Navegacao from './components/Navbar/Navegacao'
function Layout({children}) {
  return (
    <>
    <Navegacao/>
    {children}
    </>
  )
}

export default Layout