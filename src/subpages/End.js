import React, { useState } from "react"
import Fade from "react-reveal/Fade"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function End() {
  let [subd,setSubd] = useState(false),
    [success,setSuccess] = useState(false),
    [error,setError] = useState(false),
    [state,setState] = useState({})

  let disabled = {}

  if (subd) disabled.disabled = true

  setState = e => Object.assign(state, { [e.target.name]: e.target.value })

  return (
    <section className="contact-us">
      <div className="container">
        <div className="flexbox">
          <Fade left>
            <h2>Contact us by submitting the form below or call:</h2> 
            <p>
              Austin Nelson<br/>
              Shaw Business Development<br/>
              <a href="tel:7133023220">713-302-3220</a>
            </p>
            <form disabled name="shawContactForm" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={e => {

              setSubd(true)

              fetch("/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: encode({ "form-name": e.target.name, ...state }),
              })
              .then(() => {
                setSuccess(true)
              })
              .catch(err => setError(true) && console.log(err))

              e.preventDefault()
            }}>
              <div className="row my-4">
                <div className="col-lg-6 mb-4">
                  <label htmlFor="fullname" hidden>Full Name</label>
                  <input
                    required
                    type="name"
                    name="fullname"
                    className="inputBox"
                    placeholder="Your Full Name"
                    onBlur={setState}
                    {...disabled}
                  />
                </div>
                <div className="col-lg-6 mb-4">
                  <label htmlFor="email" hidden>Email Address</label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="inputBox"
                    placeholder="Your Email"
                    onBlur={setState}
                    {...disabled}
                  />
                </div>
                <div className="col-lg-12">
                  <label htmlFor="company" hidden>Company Name</label>
                  <input
                    required
                    type="text"
                    name="company"
                    className="inputBox"
                    placeholder="Company Name"
                    onBlur={setState}
                    {...disabled}
                  />
                </div>
              </div>
              <label htmlFor="message" hidden>Your Message</label>
              <textarea name="message" required rows="20" className="inputBox mb-4" placeholder="Your Message" onBlur={setState} {...disabled} />
              <button type="submit" className="submitter btn mb-4 py-3" {...disabled}>
                Submit
              </button>
              { success ? <button className="btn" disabled>Thank you! We'll be in touch shortly.</button> : 
                error ? <button className="btn" disabled>Oops, something went wrong. Refresh and try again.</button> : null}
              <div data-netlify-recaptcha="true"></div>
            </form>
          </Fade>
        </div>
      </div>
    </section>
  )
}
