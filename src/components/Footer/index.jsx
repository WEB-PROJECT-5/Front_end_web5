import React from 'react'
import './style.css'
export default function Footer() {
  return (
    <div>
        <footer className="container-xl">
          <div className="footer ">
            <div className="footer-top row">
              <div className="footer-logo col-4">
                <img src="https://res.cloudinary.com/phucdev/image/upload/v1730797820/LOGO_MINI_gnydkq.png" alt="" />
                <p className="footer-text">Empowering education, promoting sustainability, and exploring the future—one game at a time!</p>
              </div>
              <div className="footer-item col-2">
                <h4>About us</h4>
                <ul className="footer-item-list">
                  <li>Introduce</li>
                  <li>Terms</li>
                  <li>Privacy</li>
                  <li>Contact us</li>
                </ul>
              </div>
              <div className="footer-item col-3"> <h4>Contact us</h4>
                <ul className="footer-contact ">
                  <li>Have questions or feedback? Reach out to us anytime!</li>
                  <li>+84 932 092 302</li>
                </ul>
              </div>
              <div className="footer-item d-flex justify-content-between col-3">
                <ul className="footer-social gap-4">
                  <li><span><i className="fa-brands fa-facebook fa-2xl" /></span></li>
                  <li><span><i className="fa-brands fa-instagram  fa-2xl" /></span></li>
                  <li><span><i className="fa-brands fa-twitter fa-2xl" /></span></li>
                  <li><span><i className="fa-brands fa-linkedin fa-2xl" /></span></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <hr />
        <div className="copyright">
          <p className="copyright-text">Copyright ® 2024 web5 team</p>
        </div>
      </div>
  )
}
