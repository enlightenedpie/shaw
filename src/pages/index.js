import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import "../global.css"
import LandingPage from "../subpages/LandingPage";
import Services from "../subpages/Services";
import End from "../subpages/End";
import Footer from "../components/Footer";

function Index() {
  const query = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          canonical
          description
          title
        }
      }
    }
  `)

  let { siteMetadata: { title, description, canonical } } = query.site
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href={canonical} />
        <meta name="description" content={description}/>
      </Helmet>
      <LandingPage/>
      <Services/>
      <End/>
      <Footer/>
    </>
  )
}

export default Index
