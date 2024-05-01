import React, { useEffect } from "react";
import Swiper from "swiper";
// import "";
import "../Blog/blog.css";
import videoSrc from "../Blog/Images/blog-hero.mp4";

function Blog() {
  useEffect(() => {
    const swiper = new Swiper(".slide-content", {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      centerSlide: true,
      fade: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
      },
    });
    document.title = "RB Corp | Blogs";

    return () => {
      swiper.destroy(); // Clean up Swiper instance when component unmounts
    };
  }, []);
  return (
    <>
      <div className="container-fluid gx-0">
        <div className="blog-hero">
          <video preload="auto" autoPlay muted loop id="video-bg">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="blog-hero-content">
            <h1>
              Blog <span>Insights</span>
            </h1>
            <p>Think Different</p>
          </div>
        </div>
      </div>
      <div className="container">
        <section className="py-5 header text-center">
          <div className="container py-4">
            <div>
              <h1 className="display-4">Our Blog</h1>
              <p className="font-italic text-muted mb-1 our-blog">
                Welcome to the center of creativity and inspiration, where we
                explore the essence of the mission and values of
                <b>" RB CORP "</b> . Our blog serves as more than simply a
                platform; it's a storytelling canvas on which we paint the vivid
                ideas, missions, and values of our business. Come along with us
                as we set off on a voyage through the creative passageways,
                where each post serves as a tribute to our dedication to
                quality. Here you'll discover provocative observations, market
                trends, and professional viewpoints that influence the core of
                our business. Explore the fascinating backstories of our
                ground-breaking initiatives to learn more about the complex web
                of innovation that makes us who we are. We urge you to
                experience the enthusiasm and commitment that fuel every project
                we undertake, from product premieres to behind-the-scenes looks.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* <!-- main body --> */}
      <section className="container">
        <div className="text-center">
          <h1 className="mb-5 text-center display-4">News & Events:</h1>
          <div className="row">
            {/* <!-- First Image --> */}
            <div className="col-lg-6 col-md-12">
              <div className="grid-item mb-5">
                <img
                  className="img-fluid w-75 img-thumbnail shadow-sm rounded-0 mb-3"
                  src="https://bootstrapious.com/i/snippets/sn-masonry/grid-item-1.png"
                  alt=".."
                />
                <div className="text-container">
                  <h2 className="h4 display-6">
                    Understand Your Money: Advice from "RB Finance App"
                  </h2>
                  <p className="text-muted font-italic">
                    Welcome to our blog, your go-to source for empowering
                    yourself financially! View user success stories, industry
                    trends, and advice from experts. We have everything you
                    need, from investment methods to time-saving tips for
                    budgeting. Accompany us on the path to fiscal autonomy via
                    "RB Finence APP"
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Second Image --> */}
            <div className="col-lg-6 col-md-12">
              <div className="grid-item mb-5">
                <img
                  className="img-fluid w-75 mb-3 img-thumbnail shadow-sm rounded-0"
                  src="https://bootstrapious.com/i/snippets/sn-masonry/grid-item-2.png"
                  alt=".."
                />
                <div className="text-container">
                  <h2 className="h4 display-6">
                    Discover a world of beauty with "Beyonist"and Unlock Your
                    Radiance.
                  </h2>
                  <p className="text-muted font-italic">
                    For professional skincare advice, cosmetics application
                    techniques, and insider information, our blog is the place
                    to go. Learn about the newest beauty trends, product
                    evaluations, and self-care practices to improve your
                    regimen. With us, exude confidence both within and out."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="text-center">
          <div className="row">
            {/* <!-- third Image --> */}
            <div className="col-lg-6 col-md-12 mb-5">
              <div className="grid-item mb-4">
                <img
                  className="img-fluid w-75 mb-3 img-thumbnail shadow-sm rounded-0"
                  src="https://bootstrapious.com/i/snippets/sn-masonry/grid-item-2.png"
                  alt=".."
                />
                <div className="text-container">
                  <h2 className="h4 display-6">
                    Welcome to the blog of "Royalities Service Connect": Your
                    One-Stop Shop for Solutions!
                  </h2>
                  <p className="text-muted font-italic">
                    Examine industry trends, client success stories, and expert
                    perspectives. With our services' updates, tricks, and
                    advice, stay ahead of the game. Join the discussion, pick up
                    insightful knowledge, and boost your journey with the most
                    recent information from our vibrant staff."
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- fourth Image --> */}
            <div className="col-lg-6 col-md-12">
              <div className="grid-item mb-4">
                <img
                  className="img-fluid w-75 mb-3 img-thumbnail shadow-sm rounded-0"
                  src="https://bootstrapious.com/i/snippets/sn-masonry/grid-item-1.png"
                  alt=".."
                />
                <div className="text-container">
                  <h2 className="h4 display-6">
                    Spreading Hope: Impact Stories from "RB Charity Foundation"
                  </h2>
                  <p className="text-muted font-italic">
                    Explore our blog to read motivational stories of social
                    change, outreach to the community, and transformation.
                    Examine the impact your assistance is having on the lives of
                    others who are less fortunate. Let's light the way to a
                    better tomorrow together."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="text-center">
          <div className="row">
            {/* <!-- fifth Image --> */}
            <div className="col-lg-6 col-md-12">
              <div className="grid-item mb-4">
                <img
                  className="img-fluid w-75 mb-3 img-thumbnail shadow-sm rounded-0"
                  src="https://bootstrapious.com/i/snippets/sn-masonry/grid-item-1.png"
                  alt="..."
                />
                <div className="text-container">
                  <h2 className="h4 display-6">
                    Delight Your Senses: Savor Tastes of Heavenly Cuisine with"
                    Royalties Buffet "!
                  </h2>
                  <p className="text-muted font-italic">
                    Learn fascinating stories about our delectable spreads,
                    culinary prowess, and dedication to fine dining. Take a
                    culinary voyage with us where each taste narrates a tale of
                    love and perfection, from menu inspiration to event
                    highlights.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- sixth Image --> */}
            <div className="col-lg-6 col-md-12">
              <div className="grid-item mb-5">
                <img
                  className="img-fluid w-75 mb-3 img-thumbnail shadow-sm rounded-0"
                  src="https://bootstrapious.com/i/snippets/sn-masonry/grid-item-2.png"
                  alt=".."
                />
                <div className="text-container">
                  <h2 className="h4 display-6">
                    Streamlining Global Logistics: Insights from "Royalties
                    Freight Forwarding".
                  </h2>
                  <p className="small text-muted font-italic">
                    Discover the ever-changing realm of logistics by working
                    with "Royalties Freight Forwarding". Our blog offers
                    professional advice, industry trends, and success stories
                    while navigating the challenges of international shipping.
                    Come along with us as we streamline freight solutions,
                    connecting businesses globally from point of origin to point
                    of destination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Newletter --> */}
      <div className="news mt-5">
        <div className="main">
          <div className="search-container">
            <h2>SUBSCRIBE TO RB CORP</h2>
            <h3 style={{ color: "#24dcd6" }}>NEWS LETTER</h3>
            <b>
              <h4>Get the latest post delivered right into your inbox</h4>
            </b>
            <form action="/action_page.php" className="d-flex">
              <input
                type="email"
                placeholder="YourMail@example.com"
                name="search"
                className="news-letter form-control me-2"
              />
              <button type="button" className="btn btn-success mb-1">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- More blogs --> */}

      <div className="slide-container swiper">
        <h2 className="ms-5">More Blogs</h2>
        <div className="slide-content">
          <div className="card-wrapper swiper-wrapper">
            <div className="card slider-card swiper-slide h-100">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img
                    src="https://tinypic.host/images/2022/12/19/img_avatar.png"
                    alt=""
                    className="card-img"
                  />
                </div>
              </div>

              <div className="card-content">
                <h2 className="name">Maximizing Your Skin's Potential</h2>
                <p className="description">
                  Unlock radiant skin with our Beyonist’s latest products and
                  expert tips for a glowing complexion that exudes confidence.
                </p>

                <button className="button">View More</button>
              </div>
            </div>
            <div className="card slider-card swiper-slide h-100">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img
                    src="https://tinypic.host/images/2022/12/19/img_avatar.png"
                    alt=""
                    className="card-img"
                  />
                </div>
              </div>

              <div className="card-content">
                <h2 className="name">Financial Freedom Starts Here</h2>
                <p className="description">
                  Discover innovative strategies and personalized solutions from
                  our RBfinanceapp to secure your financial future and achieve
                  your dreams.
                </p>

                <button className="button">View More</button>
              </div>
            </div>
            <div className="card slider-card swiper-slide h-100">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img
                    src="https://tinypic.host/images/2022/12/19/img_avatar.png"
                    alt=""
                    className="card-img"
                  />
                </div>
              </div>

              <div className="card-content">
                <h2 className="name">Buffet Bonanza: Taste the Difference</h2>
                <p className="description">
                  Indulge in a culinary journey with our royalties buffet,
                  offering exquisite Flavors and unmatched dining experiences
                  for every occasion.
                </p>

                <button className="button">View More</button>
              </div>
            </div>
            <div className="card slider-card swiper-slide h-100">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img
                    src="https://tinypic.host/images/2022/12/19/img_avatar.png"
                    alt=""
                    className="card-img"
                  />
                </div>
              </div>

              <div className="card-content">
                <h2 className="name">Unlock Your Career Potential</h2>
                <p className="description">
                  Empower yourself with job opportunities and career advice from
                  our RBServiceConnect, guiding you towards professional success
                  and fulfilment.
                </p>

                <button className="button">View More</button>
              </div>
            </div>
            <div className="card slider-card swiper-slide h-100">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img
                    src="https://tinypic.host/images/2022/12/19/img_avatar.png"
                    alt=""
                    className="card-img"
                  />
                </div>
              </div>

              <div className="card-content">
                <h2 className="name">Making an Impact: Charity Initiatives</h2>
                <p className="description">
                  Join us in our philanthropic endeavours as our charity
                  foundation creates positive change and supports communities in
                  need worldwide.
                </p>

                <button className="button">View More</button>
              </div>
            </div>
            <div className="card slider-card swiper-slide h-100">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img
                    src="https://tinypic.host/images/2022/12/19/img_avatar.png"
                    alt=""
                    className="card-img"
                  />
                </div>
              </div>

              <div className="card-content">
                <h2 className="name">Skincare Secrets: Beauty Unveiled</h2>
                <p className="description">
                  Discover insider tips and revolutionary products from our
                  beyonist, revealing the path to healthy, luminous skin for all
                  ages and skin types.
                </p>

                <button className="button">View More</button>
              </div>
            </div>
            <div className="card slider-card swiper-slide h-100">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img
                    src="https://tinypic.host/images/2022/12/19/img_avatar.png"
                    alt=""
                    className="card-img"
                  />
                </div>
              </div>

              <div className="card-content">
                <h2 className="name">"Wealth Building Blueprint"</h2>
                <p className="description">
                  Take control of your finances with expert guidance and
                  innovative solutions from our RBfinanceapp company, paving the
                  way to financial stability and prosperity.
                </p>

                <button className="button">View More</button>
              </div>
            </div>
            <div className="card slider-card swiper-slide h-100">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img
                    src="https://tinypic.host/images/2022/12/19/img_avatar.png"
                    alt=""
                    className="card-img"
                  />
                </div>
              </div>

              <div className="card-content">
                <h2 className="name">Feast Your Senses: Buffet Extravaganza</h2>
                <p className="description">
                  Experience a culinary adventure like no other with our
                  Royalties buffet, offering an array of delectable dishes to
                  tantalize your taste buds and satisfy every craving.
                </p>

                <button className="button">View More</button>
              </div>
            </div>
            <div className="card slider-card swiper-slide h-100">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img
                    src="https://tinypic.host/images/2022/12/19/img_avatar.png"
                    alt=""
                    className="card-img"
                  />
                </div>
              </div>

              <div className="card-content">
                <h2 className="name">Career Catalyst: Job Agency Insights</h2>
                <p className="description">
                  Navigate the job market with confidence and success with the
                  support of RBServiceConnect, connecting talented individuals
                  with rewarding career opportunities.
                </p>

                <button className="button">View More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="swiper-button-next swiper-navBtn d-none d-md-block"></div>
        <div className="swiper-button-prev swiper-navBtn d-none d-md-block"></div>
      </div>
    </>
  );
}

export default Blog;
