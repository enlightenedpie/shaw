import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Navbar() {
  const { logoYaml } = useStaticQuery(graphql`
    {
      logoYaml {
        logo
      }
    }
  `)

  let { logo } = logoYaml
  return (
    <div className="pos-f-t">
      <nav className="navbar navbar-dark">
        <img src={logo} />
      </nav>
    </div>
  )
}

export default Navbar
