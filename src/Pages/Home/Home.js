import React, { useState, useEffect } from "react";
import "../Home/home.css";
import hero1 from "../Home/Images/home-hero-1.jpg";
import hero2 from "../Home/Images/home-hero-2.jpg";
import hero3 from "../Home/Images/home-hero-3.jpg";
import hero4 from "../Home/Images/home-hero-4.jpg";
import hero5 from "../Home/Images/home-hero-5.jpg";
import wecareimage from "../Home/Images/we-care.png";
import ceoimage from "../Home/Images/ceo.jpg";
import charitylogo from "../Home/Images/Helping-Foundation-logo-web.png";
import cosmetic from "../Home/Images/sec-beyonist.png";
import fintech from "../Home/Images/sec-finance.png";
import recruitment from "../Home/Images/sec-service.jpg";
import csr from "../Home/Images/sec-csr.png";
import food from "../Home/Images/sec-buffet.jpg";
import video from "../Home/Images/charity.mp4";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    const slideInterval = 8000;

    const showSlide = (index) => {
      slides.forEach((slide) => {
        slide.style.opacity = "0";
      });

      const currentSlide = slides[index];
      currentSlide.style.opacity = "0.8";

      const img = currentSlide.querySelector("img");
      img.style.animation = "none";
      void img.offsetWidth;

      switch (index % 4) {
        case 0:
          img.style.animation = "panRight 10s ease-in-out infinite";
          break;
        case 1:
          img.style.animation = "panDown 10s ease-in-out infinite";
          break;
        case 2:
          img.style.animation = "panLeft 10s ease-in-out infinite";
          break;
        case 3:
          img.style.animation = "panUp 10s ease-in-out infinite";
          break;
        default:
          img.style.animation = "panUp 10s ease-in-out infinite";
          break;
      }
    };

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const interval = setInterval(nextSlide, slideInterval);

    showSlide(currentIndex);
    document.title = "RB Corp | Home";

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <>
      <div className="header-wrapper w-100">
        <div id="carousel" className="header-carousel">
          <div className="slide">
            <img src={hero1} alt="home-hero-1.jpg" />
          </div>
          <div className="slide">
            <img src={hero2} alt="home-hero-2.jpg" />
          </div>
          <div className="slide">
            <img src={hero3} alt="home-hero-3.jpg" />
          </div>
          <div className="slide">
            <img src={hero4} alt="home-hero-4.jpg" />
          </div>
          <div className="slide">
            <img src={hero5} alt="home-hero-5.jpg" />
          </div>
        </div>
      </div>

      <div className="hero container">
        <div className="hero-text">
          <h1 className="text-white">
            The Brand that values <br />
            their customers
          </h1>
          <h4 className="ms-5 text-white">
            We are customer centric organisation and believe <br />
            in quality products and satisfaction of the <br />
            customers.
          </h4>
          <a href="/about">
            <div className="btn">Read More</div>
          </a>
        </div>
      </div>

      <div className="container mt-4">
        <div className="d-flex justify-content-center">
          <img src={wecareimage} alt="We Care" className="img-fluid w-100" />
        </div>
        <div className="text d-flex justify-content-center mt-2 text-center">
          <p style={{ fontSize: "2rem" }} className="text-center">
            RB Corporation Holding Private Limited is a 6® company and the
            fastest growing private sector corporation in India.
          </p>
        </div>
      </div>

      <div className="mt-3 w-100">
        <div className="img w-100">
          <img src={ceoimage} alt="ceo" className="img-fluid w-100" />
        </div>
      </div>

      <div className="flex-container mt-5">
        <div
          className="flex-slide beyonist"
          onMouseEnter={() => handleHover(0)}
          onMouseLeave={() => handleHover(null)}
        >
          <div
            className="flex-title flex-title-beyonist"
            style={{
              transform: hoveredIndex === 0 ? "rotate(0deg)" : "rotate(90deg)",
              top: hoveredIndex === 0 ? "10%" : "15%",
            }}
          >
            Beyonist
          </div>
          <div
            className="flex-about flex-about-beyonist"
            style={{
              opacity: hoveredIndex === 0 ? 1 : 0,
            }}
          >
            Beyonist is a beauty and skincare brand, collaborated to create a
            stunning lifestyle. At Beyonist, we believe real beauty is the root
            of holistic well-being. Our brand is dedicated to craft premium
            skincare products. Our products not only enhance the outlooks, but
            also nourishes the skin. <br />
            <a href="https://beyonist.com/">
              <div className="accordion-btn btn mt-2">Learn More</div>
            </a>
          </div>
        </div>
        <div
          className="flex-slide finance"
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={() => handleHover(null)}
        >
          <h1
            className="flex-title"
            style={{
              transform: hoveredIndex === 1 ? "rotate(0deg)" : "rotate(90deg)",
              top: hoveredIndex === 1 ? "10%" : "15%",
            }}
          >
            RB Finance
          </h1>
          <div
            className="flex-about"
            style={{
              opacity: hoveredIndex === 1 ? 1 : 0,
            }}
          >
            At RB Finance, we're dedicated to empowering individuals worldwide
            to achieve financial success through secure and rewarding
            investments. With years of experience in the financial industry, we
            pride ourselves on offering transparent, tailored investment
            solutions designed to meet the diverse needs of our clients. <br />
            <a href="https://rbfinanceapp.com/">
              <h3 className="accordion-btn btn mt-2">Learn More</h3>
            </a>
          </div>
        </div>
        <div
          className="flex-slide charity"
          onMouseEnter={() => handleHover(2)}
          onMouseLeave={() => handleHover(null)}
        >
          <div
            className="flex-title"
            style={{
              transform: hoveredIndex === 2 ? "rotate(0deg)" : "rotate(90deg)",
              top: hoveredIndex === 2 ? "10%" : "15%",
            }}
          >
            RB Charity Foundation
          </div>
          <div
            className="flex-about"
            style={{
              opacity: hoveredIndex === 2 ? 1 : 0,
            }}
          >
            RB Charity Foundation is a philanthropic organization dedicated to
            providing essential goods and free meals to those in need. Committed
            to alleviating poverty and supporting disadvantaged communities, the
            foundation distributes necessary items and offers food assistance
            programs to individuals facing economic hardship.
            <br />
            <a href="https://rbcharityfoundation.org/charity.html">
              <div className="accordion-btn btn mt-2">Learn More</div>
            </a>
          </div>
        </div>
        <div
          className="flex-slide buffet"
          onMouseEnter={() => handleHover(3)}
          onMouseLeave={() => handleHover(null)}
        >
          <div
            className="flex-title"
            style={{
              transform: hoveredIndex === 3 ? "rotate(0deg)" : "rotate(90deg)",
              top: hoveredIndex === 3 ? "10%" : "15%",
            }}
          >
            Royalties Buffet
          </div>
          <div
            className="flex-about"
            style={{
              opacity: hoveredIndex === 3 ? 1 : 0,
            }}
          >
            Welcome to Royalties Buffet Experience Indulge in a culinary journey
            like no other at our exquisite buffet destination. We pride
            ourselves on offering a diverse array of delectable dishes,
            meticulously crafted to tantalize your taste buds and satisfy your
            cravings.
            <br />
            <a href="https://royalties-buffet-client.vercel.app/">
              <div className="accordion-btn btn mt-2">Learn More</div>
            </a>
          </div>
        </div>
        <div
          className="flex-slide service"
          onMouseEnter={() => handleHover(4)}
          onMouseLeave={() => handleHover(null)}
        >
          <div
            className="flex-title"
            style={{
              transform: hoveredIndex === 4 ? "rotate(0deg)" : "rotate(90deg)",
              top: hoveredIndex === 4 ? "10%" : "15%",
            }}
          >
            RB Service Connect
          </div>
          <div
            className="flex-about"
            style={{
              opacity: hoveredIndex === 4 ? 1 : 0,
            }}
          >
            RB Service Connect is a multifaceted agency specializing in job
            recruitment services and educational empowerment. Serving as a
            bridge between job seekers and employers, we match qualified
            candidates with suitable employment opportunities.
            <br />
            <a href="https://rbcharityfoundation.org/">
              <div className="accordion-btn btn mt-2">Learn More</div>
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div
          className="charity-section container mt-5"
          style={{ backgroundColor: "white" }}
        >
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <img src={charitylogo} alt="" className="img-fluid" />
              <p>
                <span className="fw-bold">RB Corp's </span>charitable initiative
                is dedicated to uplifting and empowering marginalized
                communities across India. Through a multifaceted approach, this
                initiative aims to address the fundamental needs of individuals
                who are less educated or illiterate, as well as housewives and
                widows facing societal constraints. The cornerstone of our
                efforts is the
                <b>"Service Connect"</b> program, through which we provide
                comprehensive training tailored to enhance skills and knowledge,
                leading to meaningful employment opportunities and personal
                development. Moreover, we are committed to recognizing the
                accomplishments of our beneficiaries by presenting them with
                certificates for their achievements, thereby boosting their
                confidence and credentials. In addition to educational
                empowerment, RB Corp is also dedicated to providing essential
                goods such as stationery, clothes, and other necessities to
                those in need. Furthermore, we understand the critical
                importance of alleviating food insecurity, and as such, our
                initiative includes the distribution of free food to individuals
                and families who are struggling to meet this basic need.
              </p>
              <a href="https://www.rbcharityfoundation.org/charity.html">
                <div className="charity-btn btn text-white">Learn More</div>
              </a>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
              <video
                preload="auto"
                autoPlay
                muted
                loop
                className="mt-3 mb-3 w-100"
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div className="sectors container mt-5 mb-5">
          <header>
            <h2 className="heading">Sectors we work at</h2>
          </header>
          <div className="row justify-content-center mt-4">
            <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12 mt-3">
              <a href="https://beyonist.com/" className="text-decoration-none">
                <div
                  className="card sector-card mx-auto bg-white"
                  style={{ border: "none", borderRadius: "0" }}
                >
                  <img
                    src={cosmetic}
                    alt=""
                    className="card-img-top img-fluid d-block mx-auto mt-4"
                    style={{ borderRadius: "0", height: "70px", width: "70px" }}
                  />
                  <div className="card-body text-center">
                    <div className="card-title text-center text-dark">
                      Cosmetics
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12 mt-3">
              <a
                href="https://rbfinanceapp.com/"
                className="text-decoration-none"
              >
                <div
                  className="card sector-card mx-auto"
                  style={{ border: "none", borderRadius: "0" }}
                >
                  <img
                    src={fintech}
                    alt=""
                    className="card-img-top img-fluid d-block mx-auto mt-4"
                    style={{ borderRadius: "0", height: "70px", width: "70px" }}
                  />
                  <div className="card-body text-center">
                    <div className="card-title text-center text-dark">
                      Fintech
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12 mt-3">
              <a
                href="https://www.rbcharityfoundation.org/"
                className="text-decoration-none"
              >
                <div
                  className="card sector-card mx-auto"
                  style={{ border: "none", borderRadius: "0" }}
                >
                  <img
                    src={recruitment}
                    alt=""
                    className="card-img-top img-fluid d-block mx-auto mt-4"
                    style={{ borderRadius: "0", height: "70px", width: "70px" }}
                  />
                  <div className="card-body text-center">
                    <div className="card-title text-center text-dark">
                      Recruitment
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12 mt-3">
              <a
                href="https://www.rbcharityfoundation.org/charity.html"
                className="text-decoration-none"
              >
                <div
                  className="card sector-card mx-auto"
                  style={{ border: "none", borderRadius: "0" }}
                >
                  <img
                    src={csr}
                    alt=""
                    className="card-img-top img-fluid d-block mx-auto mt-4"
                    style={{ borderRadius: "0", height: "70px", width: "70px" }}
                  />
                  <div className="card-body text-center">
                    <div className="card-title text-center text-dark">CSR</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12 mt-3">
              <a
                href="https://royalties-buffet-client.vercel.app/"
                className="text-decoration-none"
              >
                <div
                  className="card sector-card mx-auto"
                  style={{ border: "none", borderRadius: "0" }}
                >
                  <img
                    src={food}
                    alt=""
                    className="card-img-top img-fluid d-block mx-auto mt-4"
                    style={{ borderRadius: "0", height: "70px", width: "70px" }}
                  />
                  <div className="card-body text-center">
                    <div className="card-title text-center text-dark">Food</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

