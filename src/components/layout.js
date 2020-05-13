import React from "react"
import Header from "./header/header"
import Footer from "./footer/footer"
import SocialNetworks from "./socialNetworks/socialNetworks"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <SocialNetworks />
      <Footer />
    </>
  )
}

export default Layout
