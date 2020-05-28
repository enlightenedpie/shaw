import React, {useState, useEffect} from "react"
import Navbar from "../components/Navbar"
import { useStaticQuery, graphql, Link } from "gatsby"

function LandingPage() {
  const { pageDataYaml } = useStaticQuery(graphql`
    {
      pageDataYaml {
        welcomeText
        landingText
      }
    }
  `)

  const { welcomeText, landingText } = pageDataYaml

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
        <Navbar />
        <div className="centerItems">
          <h1>{welcomeText}</h1>
          <h2>{landingText}</h2>
        </div>
          <p>Originally established in 1987, Shaw has a long history of successful pipe and module fabrication using cutting-edge technologies and processes. With our recent acquisition of the pipe fabrication assets of McDermott International, Shaw has reemerged as the technological leader in the industry, with one of the largest portfolios of manufacturing facilities in the world and the ability to handle projects of any size−from expansive pipelines to billion-dollar refinery expansions and more.</p>
          <p>Headquartered in Houston, Texas, Shaw’s global footprint includes five manufacturing facilities across the southern US and two in the Middle East which, combined, comprise 2 million square feet of state-of-the-art fabrication facilities equipped with the latest manufacturing technology and production management systems. In addition to meeting the needs of Shaw contracts, all of our manufacturing locations are also available to serve the needs of third-party heavy-industrial clients.</p>
      </div>
    </section>
  )
}

export default LandingPage
