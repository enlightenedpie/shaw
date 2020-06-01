import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { SocialIcon } from "react-social-icons"

var date = new Date()

function Footer({title,address}) {
  const { socialYaml: { src } } = useStaticQuery(graphql`
    {
      socialYaml {
        src
      }
    }
  `)
  return (
    <footer>
      <div>{src.map((scc) => <SocialIcon url={scc} />)}</div>
      <div>
        <p>&copy; {date.getFullYear()}</p>
        <span>|</span>
        <p>{title}</p>
        <span>|</span>
        <p>{address}</p>
      </div>
    </footer>
  )
}

export default Footer
