import React from "react"
import Fade from "react-reveal/Fade"
import parse from "html-react-parser"
import { useStaticQuery, graphql } from "gatsby"

function Services() {
  const { pageDataYaml } = useStaticQuery(graphql`
    {
      pageDataYaml {
        landingText
        bodyText
      }
    }
  `)

  const { landingText, bodyText } = pageDataYaml

  return (
    <section className="about-us">
      <Fade bottom>
        <h1>{landingText}</h1>
        {parse(bodyText)}
      </Fade>
    </section>
  )
}

export default Services
