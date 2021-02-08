import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import { GlobalStyled } from "./styles/GlobalStyled"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyled />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
