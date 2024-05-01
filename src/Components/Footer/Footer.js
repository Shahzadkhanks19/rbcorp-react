import React, { useState, useEffect } from "react";
import "../Footer/footer.css";
import footerlogo from "./Images/Rb corp for coding (3).png";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="text-center text-lg-start text-muted footer mt-5">
        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <!-- Right --> */}
          <div className="d-flex justify-content-center container">
            <a
              href="https://www.facebook.com/Beyonist"
              className="me-4 text-reset"
            >
              <i className="fab fa-facebook-f ftr-icon-fb"></i>
            </a>
            <a
              href="https://www.twitter.com/beyonist22"
              className="me-4 text-reset"
            >
              <i className="fab fa-x-twitter ftr-icon-x"></i>
            </a>
            <a
              href="https://www.youtube.com/@Beyonistt"
              className="me-4 text-reset"
            >
              <i className="fab fa-youtube ftr-icon-yt"></i>
            </a>
            <a
              href="https://www.instagram.com/beyonist.in/"
              className="me-4 text-reset"
            >
              <i className="fab fa-instagram ftr-icon-ig"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/beyonist/"
              className="me-4 text-reset"
            >
              <i className="fab fa-linkedin ftr-icon-ld"></i>
            </a>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="footer pt-4 pb-5">
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <a className="navbar-brand ms-auto" href="/">
                  <img
                    src={footerlogo}
                    alt=""
                    className="img-responsive"
                    // style={{background: none !important;}}
                  />
                </a>
                <p className="ms-0 text-white">
                  RB Corp is not confined to cosmetics, it’s part of a larger
                  corporation, Royalties Beauties Corporation. This
                  diversification provides stability and resilience.
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
                <p>
                  <a href="/about" className="text-white footer-link">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="/gallery" className="text-white footer-link">
                    Gallery
                  </a>
                </p>
                <p>
                  <a href="/blog" className="text-white footer-link">
                    Blogs
                  </a>
                </p>
                <p>
                  <a href="/career" className="text-white footer-link">
                    Careers
                  </a>
                </p>
                <p>
                  <a href="/contact" className="text-white footer-link">
                    Contact Us
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Our Businesses</h6>
                <p>
                  <a href="/beyonist" className="text-white footer-link">
                    Beyonist
                  </a>
                </p>
                <p>
                  <a href="/finance" className="text-white footer-link">
                    RB Finance App
                  </a>
                </p>
                <p>
                  <a href="/charity" className="text-white footer-link">
                    RB Charity Foundation
                  </a>
                </p>
                <p>
                  <a href="/service" className="text-white footer-link">
                    RB Service Connect
                  </a>
                </p>
                <p>
                  <a href="/buffet" className="text-white footer-link">
                    Royalties Buffet
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <a
                    href="https://maps.app.goo.gl/3wh4FmcKh3NHpmbo9"
                    className="text-decoration-none text-white footer-link"
                  >
                    <i className="fas fa-home me-3 text-white"></i>
                    3rd Floor Landmark Tower, South City 1, Sector 41, Gurugram,
                    Haryana 122001
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:royaltiesbcosmetics@gmail.com"
                    className="text-decoration-none text-white footer-link"
                  >
                    <i className="fas fa-envelope me-3 text-white"></i>
                    contact@rbcorp.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+91-8527999563"
                    className="text-decoration-none text-white footer-link"
                  >
                    <i className="fas fa-phone me-3 text-white"></i>
                    +91-8527999563
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center copyright p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <hr />© 2024 Copyright:
          <a
            className="text-reset fw-bold"
            href="/"
            style={{ fontStyle: "italic" }}
          >
            RB Corporation Holding Pvt. Ltd
          </a>
        </div>
      </footer>
      {/* <!-- nav to top buttton --> */}
      <button
        id="scrollToTopBtn"
        className="btn news-btn scrol-top"
        onClick={scrollToTop}
        style={{ display: isVisible ? "block" : "none" }}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </>
  );
}

export default Footer;
