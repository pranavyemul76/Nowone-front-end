import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4
              data-aos="zoom-in-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              Sitesoch
            </h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about/page">About</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4
              data-aos="zoom-in-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              Get Help
            </h4>
            <ul>
              <li>
                <a href="/">Shipping</a>
              </li>
              <li>
                <a href="/">Returns</a>
              </li>
              <li>
                <a href="/">Order Status</a>
              </li>
              <li>
                <a href="/">Payment Options</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4
              data-aos="zoom-in-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              Address
            </h4>
            <ul>
              <li>
                <a href="/">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cupiditate adipisci quia ab omnis id ipsum quae inventore{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4
              data-aos="zoom-in-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              follow us
            </h4>
            <div className="social-links">
              <a href="/">
                <i className="fab fa-google"></i>
              </a>
              <a href="/">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
