import React, { useEffect } from "react";
import "../Service/service.css";
import videoSrc from "../Service/Images/service-hero.mp4";
import image1 from "../Service/Images/chef 2.jpg";
import image2 from "../Service/Images/Chef 5.jpg";
import image3 from "../Service/Images/driver.jpg";
import image4 from "../Service/Images/tailor.jpg";
import image5 from "../Service/Images/Tailors-transformed.jpeg";
import image6 from "../Service/Images/driver 2.jpg";
import image7 from "../Service/Images/car.jpeg";

function Service() {
  useEffect(() => {
    document.title = "RB Corp | RB Service Connect";
  }, []);
  return (
    <>
      <div className="container-fluid vh-100 gx-0">
        <div className="service-hero">
          <video preload="auto" autoPlay muted loop id="video-bg">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="service-hero-content">
            <h1>
              RB Service <span>Connect</span>
            </h1>
            <p>Empowerment Meets Employment</p>
          </div>
        </div>
      </div>
      <div className="container her">
        <div className="hero-tex">
          <h1 className="mt-5 intro-head">
            {" "}
            <span className="intro-head-1 ">Introducing</span>
            Royalties-Service-Connect
          </h1>
          <p className="mt-5 fs-4 text-dark">
            <i>
              {" "}
              Boosting Achievement in the Transportation and Culinary Industries
            </i>
            <br />
            Success in the fast-paced industries of culinary arts and
            transportation is primarily determined by talent. Our employment
            agency specializes in matching talented cooks and seasoned drivers
            with interesting jobs that complement their backgrounds and goals.
            We enable people and companies to prosper in these cutthroat markets
            with our specialized recruitment solutions.
            <br /> <br />
            <i>Boosting the Art of Cooking</i>
            <br />
            A group of gifted chefs who bring imagination, enthusiasm, and
            expertise to the table are the driving force behind every well-run
            eatery, lodging establishment, or caterer. Whether the candidate
            wants to work at a high-end resort, a lively café, or a restaurant
            with a Michelin star, our agency is committed to helping it happen.
            from pastry chefs to sous chefs to executive chefs.
            <br />
            <br />
            <i>Navigating the Road to Success</i>
            <br />
            The foundation of logistics and mobility in the transportation
            industry is competent driving. Drivers are essential to the
            operations of businesses, whether they are driving heavy machinery
            on building sites, delivering items across the nation, or
            chauffeuring clients in elegant cars. Drivers of all stripes,
            including truck drivers, delivery drivers, chauffeurs, and heavy
            equipment operators, are the focus of our recruitment agency. We
            place competent workers with respectable companies that place a high
            priority on professionalism, dependability, and safety.
            <br />
            <br />
            <i>Personalized Hiring Solutions</i>
            <br />
            At our organization, we are aware that when it comes to hiring one
            size does not fit all. For this reason we provide specialized
            services catered to the particular requirements of both drivers and
            cooks. from carrying out in-depth interviews to evaluating cultural
            and technical proficiency.
          </p>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="blog-card card h-100">
              <img src={image1} className="card-img-top" alt="img" />
              <div className="card-body">
                <h1 className="intro-head-1">
                  {" "}
                  <span className="intr"></span> Navigating Careers Together
                </h1>
                <h5 className="card-text mt-3">
                  Join TalentTrek, your compass in the job market. Our agency
                  specializes in guiding your career journey, connecting you
                  with opportunities that fit your aspirations. Let us navigate
                  the path to success together.
                </h5>
              </div>
              <div className="d-grid mx-auto mb-3">
                <button className="btn-kn-mr btn" type="button">
                  {" "}
                  <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="blog-card card h-100">
              <img src={image2} className="card-img-top" alt="img" />
              <div className="card-body">
                <h1 className="intro-head-1">
                  {" "}
                  <span className="intro-head">Career Connect:</span> Your Path
                  to Success
                </h1>
                <h5 className="card-text mt-3">
                  Join Career Connect, where opportunities meet ambitions. Our
                  agency specializes in matching talents with the perfect career
                  fit. Let us guide you through personalized consultations and
                  expert advice to elevate your professional journey.
                </h5>
              </div>
              <div className="d-grid mx-auto mb-3">
                <button className="btn-kn-mr btn" type="button">
                  {" "}
                  <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="blog-card card h-100">
              <img src={image3} className="card-img-top" alt="img" />
              <div className="card-body">
                <h1 className="intro-head-1">
                  {" "}
                  <span className="intro-head">Job Pros:</span> Your Career
                  Partners
                </h1>
                <h5 className="card-text mt-3">
                  Job Pros is your trusted career partner, committed to finding
                  the right job for you. Our personalized approach ensures a
                  seamless match between your skills and employer needs,
                  propelling your career to new heights.
                </h5>
              </div>
              <div className="d-grid mx-auto mb-3">
                <button className="btn-kn-mr btn" type="button">
                  {" "}
                  <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="blog-card card h-100">
              <img src={image4} className="card-img-top" alt="img" />
              <div className="card-body">
                <h1 className="intro-head-1">
                  {" "}
                  <span className="intro-head">CareerBoost:</span> Your Gateway
                  to Success
                </h1>
                <h5 className="card-text mt-3">
                  CareerBoost offers tailored solutions to propel your career
                  forward. With our dedicated team and extensive network, we
                  connect you to opportunities that match your skills and
                  ambitions, ensuring a path to long-term success.
                </h5>
              </div>
              <div className="d-grid mx-auto mb-3">
                <a href="https://rbcharityfoundation.org/">
                  <button className="btn-kn-mr btn" type="button">
                    {" "}
                    <i
                      className="fa fa-plus-circle me-2"
                      aria-hidden="true"
                    ></i>
                    Read more
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- cards -->

  <!-- our values --> */}

      <div className="images-container">
        <div className="container  mt-5">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col-md-12">
              <h1 className="mt-5 our-values">Our Values:</h1>
            </div>
            <div className="col">
              <div className="serv-image-1">
                <div className="mx-auto">
                  <h5 className=" text-light text-uppercase text-center">
                    Babysitting Services
                  </h5>
                  <p>
                    Trusted care for your little ones. Experienced sitters
                    ensure safety and fun for your peace of mind.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="serv-image-2">
                <div className="mx-auto">
                  <h5 className=" text-light text-uppercase text-center">
                    Chef Services
                  </h5>
                  <p>
                    {" "}
                    Culinary excellence at your doorstep. Talented chefs
                    crafting delightful meals tailored to your taste preferences
                    and dietary needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="col ">
              <div className="serv-image-3 ">
                <div className="mx-auto">
                  <h5 className=" text-light text-uppercase text-center">
                    Tailoring Services
                  </h5>
                  <p>
                    Perfect fit guaranteed. Expert tailors offering custom
                    solutions for your wardrobe needs, ensuring style and
                    comfort every time.
                  </p>
                </div>
              </div>
            </div>

            <div className="col ">
              <div className="serv-image-4 ">
                <div className="mx-auto">
                  <h5 className=" text-light text-uppercase text-center">
                    Driver Services
                  </h5>
                  <p>
                    Reliable transportation solutions. Experienced drivers
                    providing safe and efficient journeys, wherever you need to
                    go, whenever you need to be there
                  </p>
                </div>
              </div>
            </div>

            <div className="d-grid mb-3 mt-2" id="button-2">
              <a href="https://rbcharityfoundation.org/">
                <button
                  id="button-2"
                  className="btn p-3 rounded-pill"
                  style={{ width: "180px" }}
                  type="button"
                >
                  <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
                  Read more
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- What we provides --> */}
      <div className="container pt-5 pb-5">
        <h2 className="pb-4">What we provide?</h2>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {/* <!-- Card 1 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img src={image1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="intro-head">Baby sitting</h5>
                <p className="card-text">
                  Expert baby sitters for your peace of mind. Reliable, caring.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Card 2 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img src={image1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="intro-head">Chef</h5>
                <p className="card-text">
                  Offers personalized financial expert advice.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Card 3 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img src={image5} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="intro-head">Tailoring</h5>
                <p className="card-text">
                  Empowering customers with financial literacy resources.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Card 4 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img src={image3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="intro-head">Driver</h5>
                <p className="card-text">
                  Expert baby sitters for your peace of mind. Reliable, caring,
                  ensure your child's safety.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- card 5 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img src={image2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="intro-head">Part-time</h5>
                <p className="card-text">
                  Experienced trailer drivers for your logistics needs.
                  Reliable, efficient, and skilled professionals ensuring timely
                  deliveries with utmost care.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- card 6 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img src={image3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="intro-head">Home Servant</h5>
                <p className="card-text">
                  Experienced trailer drivers for your logistics needs.
                  Reliable, efficient, and skilled professionals ensuring timely
                  deliveries with utmost care.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- card 7 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img src={image7} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="intro-head">Part-time home Servant</h5>
                <p className="card-text">
                  Experienced trailer drivers for your logistics needs.
                  Reliable, efficient, and skilled professionals ensuring timely
                  deliveries with utmost care.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Card 8 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img src={image6} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="intro-head">Full-time Home Servant</h5>
                <p className="card-text">
                  Dedicated full-time home servants for all your household
                  needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
