import React, { useEffect } from "react";
import "../Charity/charity.css";
import videoSrc from "../Charity/Images/charity-hero.mp4";
import image1 from "../Charity/Images/charity 1.webp";
import image2 from "../Charity/Images/charity 2.webp";
import image3 from "../Charity/Images/charity 3.JPG";
import image4 from "../Charity/Images/charity 4.JPG";
import image5 from "../Charity/Images/charity 9.jpeg";
import image6 from "../Charity/Images/charity 10.jpeg";
import image7 from "../Charity/Images/charity 11.jpeg";
import image8 from "../Charity/Images/charity 12.jpeg";
import image9 from "../Charity/Images/charity 13.jpeg";
import image10 from "../Charity/Images/charity 14.jpeg";
import image11 from "../Charity/Images/charity 15.jpeg";
import image12 from "../Charity/Images/charity 16.jpeg";

function Charity() {
  useEffect(() => {
    document.title = "RB Corp | RB Charity";
  }, []);
  return (
    <>
      <div className="container-fluid gx-0">
        <div className="charity-hero">
          <video preload="auto" autoPlay muted loop id="video-bg">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="charity-hero-content">
            <h1>
              RB Charity<span> Foundation</span>
            </h1>
            <p>Dedicated to Uplifting</p>
          </div>
        </div>
      </div>
      <div className="container her">
        <div className="hero-tex">
          <h1 className="mt-5">
            Introducing to{" "}
            <span style={{ color: "rgb(83, 128, 0)", fontSize: "55px" }}>
              Royolties Charity Foundation
            </span>
          </h1>
          <p className="mt-5 fs-4">
            RB Corp's charitable initiative is dedicated to uplifting and
            empowering marginalized communities across India. Through a
            multifaceted approach, this initiative aims to address the
            fundamental needs of individuals who are less educated or
            illiterate, as well as housewives and widows facing societal
            constraints. The cornerstone of our efforts is the{" "}
            <b>"Service Connect"</b> program, through which we provide
            comprehensive training tailored to enhance skills and knowledge,
            leading to meaningful employment opportunities and personal
            development. Moreover, we are committed to recognizing the
            accomplishments of our beneficiaries by presenting them with
            certificates for their achievements, thereby boosting their
            confidence and credentials. In addition to educational empowerment,
            RB Corp is also dedicated to providing essential goods such as
            stationery, clothes, and other necessities to those in need.
            Furthermore, we understand the critical importance of alleviating
            food insecurity, and as such, our initiative includes the
            distribution of free food to individuals and families who are
            struggling to meet this basic need
            <br />
            <br />
            <i>Our Vision</i> <br />
            RB Corp's Charity is a compassionate initiative aimed at empowering
            individuals in need through education and support. Through our
            partnership with <b>"Service Connect,"</b> we offer tailored
            training programs to individuals who may be less educated,
            illiterate, housewives, widows facing societal restrictions, and
            others seeking a more secure future. Those who successfully complete
            these training programs receive certificates, recognizing their
            dedication and achievement. In addition to education and training,
            we provide essential goods such as stationery, clothing, and other
            necessities to support the daily lives of those facing challenges.
            Furthermore, we prioritize addressing immediate needs by
            distributing free food to individuals experiencing food insecurity.
            At RB Corp's Charity, we believe in creating opportunities for
            personal and professional development, fostering a sense of
            empowerment and dignity among those we aim to serve. Through
            collaborative efforts and community support, we strive to make a
            meaningful impact in the lives of individuals facing adversity.
            <br />
            <br />
            <i>Our Mission </i> <br />
            The mission of RB Corp's charity initiative is to empowering
            education opportunities, alleviate hunger, poverty, and social
            inequalities by providing free food and essential goods to
            marginalized communities. Through targeted outreach and sustainable
            programs, our mission is to uplift individuals from vulnerable
            backgrounds, equip them with necessary skills, and break societal
            boundaries hindering their progress. RB Corp also keeps kids at
            priority by providing them school necessities like stationary items
            and toys, etc.
            <br />
            <br />
          </p>
        </div>
      </div>
      {/* <!-- hero text -->

    <!-- cards --> */}
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="blog-card card h-100">
              <img src={image1} className="card-img-top" alt="img" />
              <div className="card-body">
                <h1 className="card-title">
                  Empowering Change Through Innovative Programs & Initiatives
                </h1>
                <h5 className="card-text mt-3">
                  Explore our diverse range of programs aimed at creating
                  positive change in communities worldwide. From education to
                  healthcare, we're making a difference.
                </h5>
              </div>
              <div className="d-grid mx-auto mb-3">
                <button className="btn p-3 rounded-pill" type="button">
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
                <h1 className="card-title">
                  Celebrating Transformative Impact: Inspiring Success Stories
                  of Hope and Resilience
                </h1>
                <h5 className="card-text mt-3">
                  Discover the inspiring stories of individuals whose lives have
                  been transformed by our work. Your support has helped us
                  achieve remarkable milestones, and together, we can do even
                  more.
                </h5>
              </div>
              <div className="d-grid mx-auto mb-3">
                <button className="btn p-3 rounded-pill" type="button">
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
                <h1 className="card-title">
                  Join Us for Meaningful Engagement: Upcoming Events That Make a
                  Difference
                </h1>
                <p className="card-text mt-3">
                  Stay updated on our upcoming events and join us in making an
                  impact. From fundraisers to awareness campaigns, there's
                  always an opportunity to get involved.
                </p>
              </div>
              <div className="d-grid mx-auto mb-3">
                <button className="btn p-3 rounded-pill" type="button">
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
                <h1 className="card-title">
                  Together, We Can Make a Difference: Discover How You Can Help
                  Support Our Cause
                </h1>
                <h5 className="card-text mt-3">
                  Find out how you can contribute to our cause and make a
                  difference. Whether it's through donations, volunteering, or
                  spreading the word, every action counts.
                </h5>
              </div>
              <div className="d-grid mx-auto mb-3">
                <button className="btn p-3 rounded-pill" type="button">
                  <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- cards -->

    <!-- our values --> */}
      <div className="images-container">
        <div className="container mt-5">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col-md-12">
              <h1 className="mt-5 our-values">Our Values</h1>
            </div>
            <div className="col">
              <div className="char-image-1">
                <div className="mx-auto">
                  <h5 className="text-light text-uppercase text-center">
                    Community Outreach & Engagement
                  </h5>
                  <p>
                    "Building Bridges, Changing Lives: Our Commitment to
                    Community Empowerment".
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="char-image-2">
                <div className="mx-auto">
                  <h5 className="text-light text-uppercase text-center">
                    Impactful Volunteer Opportunities
                  </h5>
                  <p>
                    Volunteer with Purpose: Join Our Team and Create Lasting
                    Change.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="char-image-3">
                <div className="mx-auto">
                  <h5 className="text-light text-uppercase text-center">
                    Educational Initiatives for Brighter Futures
                  </h5>
                  <p>
                    Education: The Key to Unlocking Potential and Shaping
                    Tomorrow.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="char-image-4">
                <div className="mx-auto">
                  <h5 className="text-light text-uppercase text-center">
                    Health & Wellness Initiatives for a Better Tomorrow
                  </h5>
                  <p>
                    Healthy Lives, Brighter Futures: Nurturing Wellness in Every
                    Community.
                  </p>
                </div>
              </div>
            </div>

            <div className="d-grid mb-3 mt-2" id="button-2">
              <button
                id="button-2"
                className="btn p-3 rounded-pill"
                style={{ width: "180px" }}
                type="button"
              >
                <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- cards --> */}
      <div className="container pt-5 pb-5">
        <h2 className="pb-4">What we provide?</h2>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {/* <!-- Card 1 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img src={image5} className="card-img-top1" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Transparency</h5>
                <p className="card-text">
                  We Provide clear and transparent information to needed person.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Card 2 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img src={image6} className="card-img-top1" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Personalized Advice</h5>
                <p className="card-text">
                  Offers personalized financial expert advice.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Card 3 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img src={image7} className="card-img-top1" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Education</h5>
                <p className="card-text">
                  Empowering person with financial literacy resources.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Card 4 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img src={image8} className="card-img-top1" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Accessibility</h5>
                <p className="card-text">
                  Ensures that our services are easily accessible to person who
                  required.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- card 5 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img src={image9} className="card-img-top1" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Health facilities</h5>
                <p className="card-text">
                  provide health facilities to those who need.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Card 6 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img src={image10} className="card-img-top1" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Last Possibility</h5>
                <p className="card-text">
                  Offers help till last and also help in educating their child .
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Card 7 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img src={image11} className="card-img-top1" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Flexibility</h5>
                <p className="card-text">
                  Provides flexible helping of products and services.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Card 8 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img src={image12} className="card-img-top1" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Customer Support</h5>
                <p className="card-text">
                  Offers exceptional customer support and assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Charity;
