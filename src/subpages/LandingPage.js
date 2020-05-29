import React, {useState, useEffect} from "react"
import Navbar from "../components/Navbar"
import { useStaticQuery, graphql, Link } from "gatsby"

function LandingPage() {
  const { pageDataYaml, logoYaml } = useStaticQuery(graphql`
    {
      pageDataYaml {
        welcomeText
        landingText
        bodyText
      }
      logoYaml {
        logo
      }
    }
  `)

  const { welcomeText, landingText } = pageDataYaml

  const { logo } = logoYaml

  let [active, setActive] = useState(0),
    images = [
      "/images/bg04.jpg",
      "/images/bg05.jpg",
      "/images/bg06.jpg"
    ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(images.length === active ? 0 : active++)
    }, 6000);

    return () => clearInterval(interval);
  });

  return (
    <section id = "home" className = "home-container">
      {images.map((img,i) => <img src={img} className={i===active ? 'active' : ''} />)}
      <div className="container">
        <div className="centerItems">
          <img src={logo} />
        </div>
      </div>
    </section>
  )
}

export default LandingPage
