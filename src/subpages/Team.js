import React from "react"
import { SocialIcon } from "react-social-icons"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql } from "gatsby"

function Team() {
  return (
    <div id = "team" className="container-fluid" style={{ backgroundColor: "whitesmoke" }}>
      <div className="container">
        <div className="flexbox">
          <Fade bottom>
          <h3 className="text-center my-4">About Us</h3>
          <div className="row my-5">
              <p>Originally established in 1987, Shaw has a long history of successful pipe and module fabrication using cutting-edge technologies and processes. With our recent acquisition of the pipe fabrication assets of McDermott International, Shaw has reemerged as the technological leader in the industry, with one of the largest portfolios of manufacturing facilities in the world and the ability to handle projects of any size−from expansive pipelines to billion-dollar refinery expansions and more.</p>
              <p>Headquartered in Houston, Texas, Shaw’s global footprint includes five manufacturing facilities across the southern US and two in the Middle East which, combined, comprise 2 million square feet of state-of-the-art fabrication facilities equipped with the latest manufacturing technology and production management systems. In addition to meeting the needs of Shaw contracts, all of our manufacturing locations are also available to serve the needs of third-party heavy-industrial clients.</p>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Team
