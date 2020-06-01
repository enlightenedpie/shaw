import React from "react"
import { SocialIcon } from "react-social-icons"

var date = new Date()

function Footer({title,address}) {

  return (
    <footer>
      {/* <div>hello</div> */}
      <div>
        <p>&copy; Copyright {date.getFullYear()}</p>
        <span>|</span>
        <p>{title}</p>
        <span>|</span>
        <p>{address}</p>
      </div>
    </footer>
  )
}

export default Footer
