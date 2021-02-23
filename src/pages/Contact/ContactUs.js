import React from 'react'
import envelope from '../../assets/images/envelope.png'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <section className="contact-us container">
      <div className="contact-us wrapper">
        <div className="col-left">
          <img src={envelope} alt="" />
          <h3>
            If you have questions or just want to get in touch, use the form
            below. We look forward to hearing from you!
          </h3>
        </div>
        <div className="col-right">
          <h1 className="label">Contact Us</h1>
          <form action="" onSubmit="">
            <input type="text" name="" id="" placeholder="Your Name" />
            <input type="email" name="" placeholder="Your Email" />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
