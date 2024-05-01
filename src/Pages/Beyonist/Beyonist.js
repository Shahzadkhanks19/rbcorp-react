import React, { useEffect } from "react";
import "../Beyonist/beyonist.css";
import videoSrc from "../Beyonist/Images/beyonist-hero.mp4";
import blogImage1 from "../Beyonist/Images/b.jpg";
import blogImage2 from "../Beyonist/Images/a.jpg";
import blogImage3 from "../Beyonist/Images/oily_skin_desktop.webp";
import cardImage1 from "../Beyonist/Images/p.jpeg";
import cardImage2 from "../Beyonist/Images/h.jpeg";
import cardImage3 from "../Beyonist/Images/s.jpeg";
import cardImage4 from "../Beyonist/Images/o.jpeg";
import cardImage5 from "../Beyonist/Images/2.jpg";

function Beyonist() {
  useEffect(() => {
    document.title = "RB Corp | Beyonist";
  }, []);
  return (
    <>
      <div className="container-fluid gx-0">
        <div className="beyonist-hero">
          <video preload="auto" autoPlay muted loop id="video-bg">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="beyonist-hero-content">
            <h1>
              Welcome to <span>Beyonist</span>
            </h1>
            <p>Be Honest with your Skin</p>
          </div>
        </div>
        {/* <!-- welcome to beyonist start --> */}
        <div className="container">
          <div>
            <h1 className="mt-5">
              Welcome to{" "}
              <span style={{ color: "#fe4f5d", fontSize: "55px" }}>
                Beyonist
              </span>
            </h1>
            <p className="mt-5 fs-4">
              Beyonist is a beauty and skincare brand, collaborated to create a
              stunning lifestyle. At Beyonist, we believe real beauty is the
              root of holistic well-being. <br />
              <br />
              <i>Move to the cloud</i> <br />
              Our brand is dedicated to craft premium skincare products. Our
              products not only enhance the outlooks, but also nourishes the
              skin. Beyonist assures your investment, as this brand is aligned
              with transformative growth. We are composed to enamour the beauty
              and health market
              <br />
              <br />
              <i>Embrace the partner ecosystem </i> <br />
              Our perfectly formulated products serve the consumers evolving
              their needs. We also ensure long lasting satisfaction for our
              consumers. As an investor, rest assured that Beyonist is not just
              a brand, it is a flourishing venture with promising returns. Hence
              join us in our journey to redefine health and beauty.
            </p>
          </div>
        </div>

        {/* <!-- cards --> */}
        <div className="container mt-5">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {/* <!-- card 1 --> */}
            <div className="col">
              <div className="blog-card card h-100">
                <img src={blogImage2} className="card-img-top" alt="img" />
                <div className="card-body">
                  <h1 className="card-title">Gentle Cleansing</h1>
                  <h5 className="card-text mt-3">
                    Cleansing your skin removes dirt, oil, and impurities, but
                    it's important not to strip away its natural oils. Use a
                    gentle, non-comedogenic cleanser suitable for your skin
                    type, and avoid harsh scrubbing or overwashing.
                  </h5>
                </div>
                <div className="d-grid mx-auto mb-3">
                  <button className="btn p-3 rounded-pill" type="button">
                    {" "}
                    <i
                      className="fa fa-plus-circle me-2"
                      aria-hidden="true"
                    ></i>
                    Read more
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- card 2 --> */}
            <div className="col">
              <div className="blog-card card h-100">
                <img src={blogImage1} className="card-img-top" alt="img" />
                <div className="card-body">
                  <h1 className="card-title">Hydration</h1>
                  <h5 className="card-text mt-3">
                    Keeping your skin hydrated helps maintain its elasticity,
                    suppleness, and overall health. Use moisturizers and
                    hydrating serums containing ingredients like hyaluronic acid
                    and glycerin to lock in moisture.
                  </h5>
                </div>
                <div className="d-grid mx-auto mb-3">
                  <button className="btn p-3 rounded-pill" type="button">
                    {" "}
                    <i
                      className="fa fa-plus-circle me-2"
                      aria-hidden="true"
                    ></i>
                    Read more
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- card 3 --> */}
            <div className="col">
              <div className="blog-card card h-100">
                <img src={blogImage2} className="card-img-top" alt="img" />
                <div className="card-body">
                  <h1 className="card-title">Sun Protection</h1>
                  <h5 className="card-text mt-3">
                    <p>
                      Protecting your skin from harmful UV rays is essential for
                      preventing premature aging, sunburns, and reducing the
                      risk of skin cancer. Use broad-spectrum sunscreen with SPF
                      30 or higher daily, regardless of weather conditions.
                    </p>
                  </h5>
                </div>
                <div className="d-grid mx-auto mb-3">
                  <button className="btn p-3 rounded-pill" type="button">
                    {" "}
                    <i
                      className="fa fa-plus-circle me-2"
                      aria-hidden="true"
                    ></i>
                    Read more
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- card 4 --> */}
            <div className="col">
              <div className="blog-card card h-100">
                <img src={blogImage3} className="card-img-top" alt="img" />
                <div className="card-body">
                  <h1 className="card-title">Skin Type Awareness</h1>
                  <h5 className="card-text mt-3">
                    {" "}
                    Understanding your skin type (e.g., oily, dry, combination,
                    sensitive) is crucial for selecting appropriate products and
                    establishing an effective skincare routine.
                  </h5>
                </div>
                <div className="d-grid mx-auto mb-3">
                  <button className="btn p-3 rounded-pill" type="button">
                    {" "}
                    <i
                      className="fa fa-plus-circle me-2"
                      aria-hidden="true"
                    ></i>
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- cards --> */}
        {/* <!-- welcome to beyonist end --> */}

        {/* <!-- Our values start --> */}
        <div className="images-container">
          <div className="container  mt-5">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col-md-12">
                <h1 className="mt-5 our-values">Our Values</h1>
              </div>
              {/* <!-- img 1 --> */}
              <div className="col">
                <div className="bey-image-1">
                  <div className="mx-auto">
                    <h5 className=" text-light text-uppercase text-center">
                      Cruelty-Free
                    </h5>
                    <p>
                      Pledging not to test products on animals and ensuring all
                      products are cruelty-free.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- img 2 --> */}
              <div className="col">
                <div className="bey-image-2">
                  <div className="mx-auto">
                    <h5 className=" text-light text-uppercase text-center">
                      Transparency
                    </h5>
                    <p>
                      Promising transparency in sourcing, manufacturing
                      processes, and ingredient lists, empowering consumers to
                      make informed choices.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- img 3 --> */}
              <div className="col ">
                <div className="bey-image-3 ">
                  <div className="mx-auto">
                    <h5 className=" text-light text-uppercase text-center">
                      Sustainability
                    </h5>
                    <p>
                      Striving to minimize environmental impact through
                      sustainable packaging, eco-friendly practices, and
                      supporting conservation efforts.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- img 4 --> */}
              <div className="col ">
                <div className="bey-image-4">
                  <div className="mx-auto">
                    <h5 className=" text-light text-uppercase text-center">
                      Customer Support and Assistance
                    </h5>
                    <p>
                      We understand that navigating the world of finance can
                      sometimes be overwhelming, which is why we're here to
                      support you every step of the way.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- button --> */}
              <div className="d-grid mb-3 mt-2" id="button-2">
                <button
                  id="button-2"
                  className="btn p-3 rounded-pill"
                  style={{ width: "180px" }}
                  type="button"
                >
                  <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Our value end -->
    
<!-- what we provide start -->
<!-- cards --> */}
        <div className="container pt-5 pb-5">
          <h2 className="pb-4">What we provide?</h2>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {/* <!-- Card 1 --> */}
            <div className="col">
              <div className="service-card card h-100">
                <img src={cardImage1} className="card-img-top1" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Premium Quality Products</h5>
                  <p className="card-text">
                    Emphasize the brand's commitment to delivering high-quality
                    skincare solutions crafted with the finest ingredients and
                    backed by rigorous research and development.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Card 2 --> */}
            <div className="col">
              <div className="service-card card h-100">
                <img src={cardImage2} className="card-img-top1" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Effective Formulations </h5>
                  <p className="card-text">
                    Highlight the efficacy of the brand's formulations in
                    addressing various skincare concerns, whether it's
                    hydration, anti-aging, acne treatment, or sensitive skin
                    care.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Card 3 --> */}
            <div className="col">
              <div className="service-card card h-100">
                <img src={cardImage3} className="card-img-top1" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Clinically Proven Results</h5>
                  <p className="card-text">
                    {" "}
                    Provide evidence of the brand's products' efficacy through
                    clinical studies or customer testimonials, showcasing
                    tangible results and improvements in skin health.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Card 4 --> */}
            <div className="col">
              <div className="service-card card h-100">
                <img src={cardImage4} className="card-img-top1" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Cruelty-Free </h5>
                  <p className="card-text">
                    Offer valuable resources such as skincare tips, tutorials,
                    and expert advice to empower customers to make informed
                    choices and achieve their skincare goals.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- card 5 --> */}
            <div className="col">
              <div className="service-card card h-100">
                <img src={cardImage5} className="card-img-top1" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Transparent Communication </h5>
                  <p className="card-text">
                    Emphasize transparency in ingredient sourcing, product
                    development processes, and manufacturing standards,
                    fostering trust and credibility with consumers.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Card 6 --> */}
            <div className="col">
              <div className="service-card card h-100">
                <img src={blogImage2} className="card-img-top1" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Holistic Approach to Skincare</h5>
                  <p className="card-text">
                    Position the brand as more than just a product provider but
                    a partner in promoting overall skin health and well-being,
                    advocating for holistic skincare routines.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Card 7 --> */}
            <div className="col">
              <div className="service-card card h-100">
                <img src={blogImage1} className="card-img-top1" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Customized Solutions</h5>
                  <p className="card-text">
                    Highlight the brand's approach to personalized skincare,
                    offering products tailored to different skin types,
                    concerns, skin health.and preferences.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Card 8 --> */}
            <div className="col">
              <div className="service-card card h-100">
                <img src={blogImage3} className="card-img-top1" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Community Engagement</h5>
                  <p className="card-text">
                    Showcase the brand's commitment to building a supportive
                    community of skincare enthusiasts, fostering engagement
                    through social media, events, and educational initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Beyonist;
