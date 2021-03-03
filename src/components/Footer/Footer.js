import React, { useState } from 'react'
import { setNewsletterEmail } from '../../actions'
import { Link } from 'react-router-dom'
import { useDataLayerValue } from '../../DataLayer.js'
import './Footer.css'

const Footer = () => {
  const [{ newsletterEmail }, dispatch] = useDataLayerValue()
  const [subscriptionStatus, setSubscriptionStatus] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
    if (newsletterEmail) {
      setSubscriptionStatus(!subscriptionStatus)
    }
  }

  return (
    <section className="container footer">
      <div className="footer__wrapper">
        <div className="footer__promo">
          {!subscriptionStatus ? (
            <>
              <label htmlFor="email">
                Creating reminders will never be the same
              </label>
              <form onSubmit={(e) => submitHandler(e)}>
                <input
                  type="email"
                  name="emial"
                  value={newsletterEmail}
                  onChange={(event) =>
                    setNewsletterEmail(event.target.value, dispatch)
                  }
                  placeholder="Your email"
                />
                <button type="submit">Join newsletter</button>
              </form>
            </>
          ) : (
            <div className="subscription-success">
              <h1>You have successfully subsribed to our newsletter!</h1>
              <h3>Check you mail for confirmation email</h3>
            </div>
          )}
        </div>
        <div className="footer__social">
          <h1 className="label">Follow us on</h1>
          <div className="footer__icons">
            <a href="https://www.instagram.com/saltomax/" target="blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/artur.pushko" target="blank">
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCSmcbyReaBc5_P9j_VE2E6Q"
              target="blank"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://vk.com/saltonax" target="blank">
              <i className="fab fa-vk"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__links">
        <div className="footer__copyright">© Artur Pushko 2021</div>
        <div className="footer__terms-and-conditions">
          <Link to="/terms-and-conditions">Terms and Conditions</Link>
          <Link to="/privacy-policy">Privacy and Policy</Link>
        </div>
      </div>
    </section>
  )
}

export default Footer
