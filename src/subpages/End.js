import React, { useState } from "react"
import Fade from "react-reveal/Fade"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const onSubmit = e => {
  e.preventDefault()
  console.log(e.target)
}

export default function End() {
  let [subd,setSubd] = useState(false),
    [success,setSuccess] = useState(false),
    [state,setState] = useState({})

  let disabled = {}

  if (subd) disabled.disabled = true

  setState = e => Object.assign(state, { [e.target.name]: e.target.value })

  return (
    <section className="contact-us">
      <div className="container">
        <div className="flexbox">
          <Fade left>
            <h2>Contact us by submitting the form below or call us directly:</h2> 
            <p>
              Austin Nelson<br/>
              Shaw Business Development<br/>
              <a href="tel:7133023220">713-302-3220</a>
            </p>
            <form disabled name="shawContactForm" netlify data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={onSubmit}>
              <div className="row my-4">
                <div className="col-lg-6 mb-4">
                  <label for="fullname" hidden>Full Name</label>
                  <input
                    required
                    type="name"
                    name="fullname"
                    className="inputBox"
                    placeholder="Your Full Name"
                    {...disabled}
                  />
                </div>
                <div className="col-lg-6 mb-4">
                  <label for="email" hidden>Email Address</label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="inputBox"
                    placeholder="Your Email"
                    {...disabled}
                  />
                </div>
                <div className="col-lg-12">
                  <label for="company" hidden>Company Name</label>
                  <input
                    required
                    type="text"
                    name="company"
                    className="inputBox"
                    placeholder="Company Name"
                    {...disabled}
                  />
                </div>
              </div>
              <label for="message" hidden>Your Message</label>
              <textarea name="message" required rows="20" className="inputBox mb-4" placeholder="Your Message" {...disabled} />
              <button type="submit" className="submitter btn mb-4 py-3" {...disabled}>
                Submit
              </button>
              { success ? <button className="btn" disabled>Thank you! We'll be in touch shortly.</button> : null}
            </form>
          </Fade>
        </div>
      </div>
    </section>
  )
}
