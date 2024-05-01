import React, { useEffect } from "react";
import AOS from "aos";
import "../About/about.css";
import videoSrc from "../About/Images/about-hero.mp4";
import aboutImage from "../About/Images/about.JPG";
import ceoBanner from "../About/Images/ceo-banner.jpg";
import beyonist from "../About/Images/beyonist logo file.jpg";
import finance from "../About/Images/rb finance logo file.jpg";
import charity from "../About/Images/charity logo file.jpg";
import service from "../About/Images/rb service connect logo file.jpg";
import buffet from "../About/Images/buffet logo file.jpg";

function About() {
  useEffect(() => {
    AOS.init();
    document.title = "RB Corp | About Us";
  }, []);
  return (
    <>
      {/* <!-- HEADER --> */}
      <div className="container-fluid vh-100 gx-0">
        <div className="about-hero">
          <video autoPlay muted loop id="video-bg">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="about-hero-content">
            <h1>
              Introduction to <span>RB CORP</span>
            </h1>
            <p>Changing lives</p>
          </div>
        </div>
      </div>
      {/* <!-- first section --> */}
      <div className="container mb-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-6">
            <div className=" mb-4">
              <div className="card-body py-5">
                <h2> About</h2>
                <h2 className="text-primary">
                  RB Corporation Holding pvt. ltd.
                </h2>
                <p className="card-text">
                  In this commercial industry era, RB Corp is a shining star
                  that has a versatile and ahead-wondering conglomerate of
                  different industries. With a large portfolio encompassing
                  splendor, food, activity education, freight forwarding, and
                  finance, RB Corp has emerged as a powerhouse that seamlessly
                  navigates via numerous sectors. From redefining beauty with
                  Beyonist to empowering financial decisions with RB Finance,
                  satisfying taste buds via Royalties Buffet, connecting global
                  trade with Royalties Freight, and nurturing careers with
                  Royalties Job Agency, we’re dedicated to enriching lives
                  through education, training, and meaningful opportunities.
                  Each entity under its umbrella contributes to the overall
                  success and growth of the conglomerate, making RB Corp a
                  well-rounded and resilient business entity. In this blog, we
                  will discuss RB Corp and its subsidiaries, which can leave an
                  unerasable mark on their respective industries.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Img dot img section --> */}
          <div className="col-lg-6 mt-5 ">
            <div className="videoContainer">
              <img
                className="mainVideo image-block"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"
                alt="background"
              />
              <img
                src={aboutImage}
                className="dotsImg img-fluid"
                alt="aboutimage"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- first section --> */}

      {/* <!-- Our mission page --> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 m">
            <img
              className="building img-fluid"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw2.svg"
              alt="building"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <h2>About us!</h2>
              <p className="text-blk d-flex subHeading">
                RB Corp’s success lies in its ability to diversify and excel in
                multiple sectors simultaneously. Through its subsidiaries, there
                aren’t just cogs in the machine but individual bootstrappers
                contributing to the pot’s overarching vision of invention and
                impact. inclusively, these companies showcase RB Corp’s
                capability to diversify, acclimatize, and lead in an
                ever-evolving business geography. As the empire continues to
                expand its midair, the community between RB Corp and its
                accessories promises a future where invention meets impact,
                creating a lasting heritage in the commercial world
              </p>

              <div className="row">
                <div className="d-flex">
                  <div className="img">
                    <img
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"
                      alt="mission"
                    />
                  </div>
                  <div className="mission-text ms-2">
                    <h5>OUR MISSION</h5>
                    <p>
                      Empower minds, foster growth, shape a brighter tomorrow
                      together.
                    </p>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="img">
                    <img
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"
                      alt="values"
                    />
                  </div>
                  <div className="value-text ms-2">
                    <h5>OUR VALUES</h5>
                    <p>
                      Our value lies in unity, empathy, and relentless
                      innovation.{" "}
                    </p>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="img">
                    <img
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"
                      alt="vision"
                    />
                  </div>
                  <div className="vision-text ms-2">
                    <h5>OUR VISION</h5>
                    <p>
                      Our vision is a world united in progress and compassion.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ceo image --> */}
      <div className="text-center bg-image rounded-3 w-100">
        <img
          src={ceoBanner}
          className="img-fluid w-100 h-100"
          alt="ceobanner"
        />
      </div>
      {/* <!-- CEO SECTION --> */}
      <div className="container">
        <div className=" container1">
          <div className="row">
            <h1>CEO & Managing Director</h1>
            <div className="col-md-6 col-12">
              <p>
                {" "}
                Dear Friends, In these challenging times, I wanted to reach out
                to all of you with a message of hope, solidarity, and
                resilience. I am privileged to lead a company that operates on a
                global scale, and I am acutely aware of the impact that current
                events are having on communities around the world. Whether it's
                the ongoing health crisis, economic uncertainty, or social
                unrest, we are all facing unprecedented challenges that require
                us to come together as a global community. Now more than ever,
                it is crucial that we stand united in our commitment to creating
                a better future for all. We must work together to address the
                pressing issues facing our planet, from climate change and
                environmental degradation to poverty and inequality. We must
                strive for inclusivity, diversity, and equality, ensuring that
                no one is left behind. At RB CORP, we are deeply committed to
                being a force for positive change in the world. We believe in
                the power of innovation, collaboration, and compassion to drive
                meaningful impact and create a brighter tomorrow for generations
                to come.
              </p>
            </div>
            <div className="col-md-6 col-12">
              <p>
                {" "}
                As we navigate these uncertain times, I urge each and every one
                of you to remain resilient, compassionate, and hopeful.
                Together, we can overcome any obstacle and build a future that
                is more sustainable, equitable, and prosperous for all. We are
                focused on making this world change through the heart and skin
                care. We are changer in the world with adorable beauty products
                and connect services . We are making shine world in various
                field including beaty and doanation and financing world. Thank
                you for your continued support, and may we all emerge from this
                stronger and more united than ever before.
                <br /> <br />
                <strong>
                  <i>
                    Best regards,
                    <br /> Gladys Kumar
                    <br /> CEO of
                    <br /> RB CORP
                  </i>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!--All Companies Section  --> */}
      <div className="container">
        {/* <!-- Beyonist --> */}
        <div className="container  mb-5 mt-2">
          <div className="row">
            {/* <!-- Content --> */}
            <header>
              <h2 className="heading">BEYONIST</h2>
            </header>
            <div
              className="col-lg-6 mt-4"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <a href="https://beyonist.com/shop/">
                <img
                  src={beyonist}
                  className="img-fluid companies-img w-100"
                  alt="beyonist"
                />
              </a>
            </div>
            <div
              className="  col-lg-6 mt-4"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className=" mb-4">
                <div className="card-body">
                  <p className="card-text">
                    Beyonist, a distinguished beauty brand under the RB Corp,
                    has grown to be synonymous with innovation and
                    comprehensiveness in the splendor enterprise. With a
                    commitment to redefining splendour requirements, Beyonist
                    offers a variety of products that cater to a varied
                    purchaser base. From skin care necessities to trendsetting
                    cosmetics, Beyonist is at the cutting edge of the beauty
                    revolution, setting new benchmarks in the enterprise.
                  </p>

                  <div className="card-body">
                    <a href="https://beyonist.com/" className="btn btn-primary">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Rb Finance --> */}
            <div className="container mb-2 mt-5">
              <div className="row">
                {/* <!-- Content --> */}
                <header>
                  <h2 className="heading">RB FINANCE</h2>
                </header>
                <div
                  className="col-lg-6 mt-4"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="">
                    <div className="card-body">
                      <p className="card-text">
                        RB Corp’s financial branch, the RB Finance App, is a
                        testament to the conglomerate’s strategic vision.
                        Designed to provide a user-friendly interface for
                        financial management, the app has garnered significant
                        attention for delivering substantial returns on
                        principal investments. Whether it’s investments,
                        savings, or financial planning, the RB Finance App
                        offers a comprehensive suite of services, making it a
                        go-to platform for savvy investors.
                      </p>

                      <div className="card-body">
                        <a
                          href="https://rbfinanceapp.com/"
                          className="btn btn-primary"
                        >
                          READ MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 mt-4"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <a href="https://rbfinanceapp.com/">
                    <img
                      src={finance}
                      className="img-fluid companies-img w-100"
                      alt="Rb Finance"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- SERVICE CONNECT --> */}
            <div className="container mb-2 mt-5">
              <div className="row">
                {/* <!-- Content --> */}
                <header>
                  <h2 className="heading">ROYALTIES SERVICE CONNECT </h2>
                </header>
                <div
                  className="col-lg-6 mt-4"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <a href="https://rbcharityfoundation.org/">
                    <img
                      src={service}
                      className="img-fluid companies-img w-100"
                      alt="service logo"
                    />
                  </a>
                </div>
                <div
                  className="col-lg-6 mt-4"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className=" mb-4">
                    <div className="card-body">
                      <p className="card-text">
                        After recognizing the need to deal with unemployment, RB
                        Corp’s Royalties Job Agency takes an approach by
                        presenting education programs to the unemployed. The
                        company not only provides training to individuals with
                        important abilities but also connects them with
                        appropriate process possibilities. This social
                        initiative displays RB Corp’s commitment to creating an
                        effective impact on the community by empowering people
                        through employment.
                      </p>

                      <div className="card-body">
                        <a
                          href="https://rbcharityfoundation.org/"
                          className="btn btn-primary"
                        >
                          READ MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Charity --> */}
            <div className="container  mb-5 mt-5">
              <div className="row">
                {/* <!-- Content --> */}
                <header>
                  <h2 className="heading">RB CHARITY FOUNDATION</h2>
                </header>
                <div
                  className="mt-4  col-lg-6"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className=" mb-4">
                    <div className="card-body ">
                      <p className="card-text">
                        Advanced training materials, practical practice
                        sessions, and simulation software that mimics real-world
                        driving circumstances are beneficial to driver trainers.
                        Customer service, communication, and vehicle maintenance
                        should all be covered in training. Opportunities for
                        ongoing education guarantee that trainers remain
                        current. Technology integration makes progress tracking
                        and feedback-giving easier. Effectiveness is further
                        increased by putting an emphasis on safety and putting
                        evaluation systems in place. Together, these components
                        help to produce drivers who are capable and accountable.
                      </p>

                      <div className="card-body">
                        <a
                          href="https://rbcharityfoundation.org/charity.html"
                          className="btn btn-primary"
                        >
                          READ MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="mt-4 col-lg-6"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <a href="https://rbcharityfoundation.org/charity.html">
                    <img
                      src={charity}
                      className="img-fluid companies-img w-100"
                      alt="RB CHARITY FOUNDATION"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- BUFFET --> */}
            <div className="container  mb-2 mt-5">
              <div className="row">
                {/* <!-- Content --> */}
                <header>
                  <h2 className="heading">ROYALTIES BUFFET</h2>
                </header>
                <div
                  className="col-lg-6 mt-4"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <a href="!#">
                    <img
                      src={buffet}
                      className="img-fluid companies-img w-100"
                      alt="ROYALTIES BUFFET"
                    />
                  </a>
                </div>
                <div
                  className="col-lg-6 mt-4"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className=" mb-4">
                    <div className="card-body">
                      <p className="card-text">
                        Royalties Buffet, the meals commercial enterprise arm of
                        RB Corp, has carved a niche for itself in the culinary
                        world. Royalty’s Buffet, which is understood for its
                        delectable offerings and modern menu alternatives, is
                        more than just a food enterprise; it’s an enjoyment.
                        From informal eating to catering offerings, the brand
                        ensures that each foodie’s need is met with aptitude and
                        finesse.
                      </p>

                      <div className="card-body">
                        <a href="!#" className="btn btn-primary">
                          READ MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
