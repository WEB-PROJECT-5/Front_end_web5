import React from 'react'
import './style.css'
export default function Footer() {
  return (
    <div>
        <footer className="container-xl">
          <div className="footer ">
            <div className="footer-top row"data-aos="fade-right">
              <div className="footer-logo col-md-6 col-lg-3">
                <img src="https://i.postimg.cc/Y2D91Zrq/LOGO-MINI-gnydkq.png" alt="Logo" />
                <p className="footer-text">Empowering education, promoting sustainability, and exploring the future—one game at a time!</p>
              </div>
              <div className="footer-item col-md-6 col-lg-3"data-aos="fade-right">
              <span class="magic-hover magic-hover__square">About us</span>
                <ul className="footer-item-list">
                  <li>Introduce</li>
                  <li>Terms</li>
                  <li>Privacy</li>
                  <li>Contact us</li>
                </ul>
              </div>
              <div className="footer-item col-md-6 col-lg-3"data-aos="fade-right"> 
              <span class="magic-hover magic-hover__square">Contact us</span>
                <ul className="footer-contact ">
                  <li>Have questions or feedback? Reach out to us anytime!</li>
                  <li>+84 932 092 302</li>
                </ul>
              </div>
              <div className="footer-item d-flex justify-content-between col-md-6 col-lg-3" data-aos="fade-right">
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
        <div className="copyright" data-aos="fade-right">
          <p className="copyright-text">Copyright ® 2024 web5 team</p>
        </div>
      </div>
  )
}
