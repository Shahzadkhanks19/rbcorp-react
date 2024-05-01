import React, { useEffect } from "react";
import "../Finance/finance.css";
import financeHero from "../Finance/Images/finance-hero.mp4";

function Finance() {
  useEffect(() => {
    document.title = "RB Corp | RB Finance";
  }, []);
  return (
    <>
      <div className="container-fluid vh-100 gx-0">
        <div className="finance-hero">
          <video preload="auto" autoPlay muted loop id="video-bg">
            <source src={financeHero} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="finance-hero-content">
            <h1>
              RB <span>Finance</span>
            </h1>
            <p>Think Different</p>
          </div>
        </div>
      </div>
      <div className="container her">
        <div className="hero-tex">
          <h1 className="mt-5">
            Our{" "}
            <span style={{ color: "purple", fontSize: "55px" }}>Expertise</span>
          </h1>
          <p className="mt-5 fs-4">
            Welcome to Our RB Finance App, your trusted companion in managing
            your finances efficiently and effectively. At RB Finance App, we
            understand the importance of financial well-being in today's
            fast-paced world. That's why we've created a platform that empowers
            you to take control of your money with ease, providing you with the
            tools and insights needed to make informed financial decisions. Our
            team is comprised of seasoned finance professionals and tech
            enthusiasts dedicated to delivering a seamless user experience.
            We're passionate about simplifying the complexities of finance,
            making it accessible to everyone, regardless of their financial
            expertise. With RB Finance you can: Track your expenses and income
            effortlessly, gaining a clear understanding of where your money is
            going. Set realistic financial goals and receive personalized
            insights and tips to help you achieve them. It is only app on play
            store, which provides user friendly interface and gives you a chance
            to earn on your returns. Securely manage your accounts and
            transactions, ensuring the safety and privacy of your sensitive
            information. Whether you're a seasoned investor or just starting
            your financial journey RB Finance here to support you every step of
            the way. Join our growing community of users who are taking charge
            of their financial futures with RB Finance. Download the app today
            and experience the difference for yourself. Thank you for choosing
            RB Finance for all your financial needs.
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
              <img
                src="https://images.pexels.com/photos/7414021/pexels-photo-7414021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top"
                alt="img"
              />
              <div className="card-body">
                <h1 className="card-title">
                  Invest Smarter, Secure Your Future
                </h1>
                <h5 className="card-text mt-3">
                  With Rb Finance you save your money with full security and
                  trust. We value your money
                </h5>
              </div>
              <div className="d-grid mx-auto mb-3">
                <button className="btn p-3 rounded-pill" type="button">
                  {" "}
                  <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="blog-card card h-100">
              <img
                src="https://images.pexels.com/photos/7413994/pexels-photo-7413994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top"
                alt="img"
              />
              <div className="card-body">
                <h1 className="card-title">
                  Why Choose RB Finance For Your Investments?
                </h1>
                <h5 className="card-text mt-3">
                  Rb finance is only app on play store helps you to earn your
                  returns and start saving with minimum amount{" "}
                </h5>
              </div>
              <div className="d-grid mx-auto mb-3">
                <button className="btn p-3 rounded-pill" type="button">
                  {" "}
                  <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="blog-card card h-100">
              <img
                src="https://images.pexels.com/photos/5833772/pexels-photo-5833772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top"
                alt="img"
              />
              <div className="card-body">
                <h1 className="card-title">
                  Investment frequency : with rb finance you gets great choice
                  to invent your money
                </h1>
                <h5 className="card-text mt-3">
                  With Rb Finance , we provides a number of variations which you
                  can select and start saving today
                </h5>
              </div>
              <div className="d-grid mx-auto mb-3">
                <button className="btn p-3 rounded-pill" type="button">
                  {" "}
                  <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="blog-card card h-100">
              <img
                src="https://images.pexels.com/photos/7414218/pexels-photo-7414218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top"
                alt="img"
              />
              <div className="card-body">
                <h1 className="card-title">
                  We are future, we are your goal. With Rb you can set your goal
                  and work on your priorities
                </h1>
                <h5 className="card-text mt-3">
                  Now, its time to say goodbye to your future problems, because
                  we are here RB Finance app
                </h5>
              </div>
              <div className="d-grid mx-auto mb-3">
                <button className="btn p-3 rounded-pill" type="button">
                  {" "}
                  <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="images-container">
        <div className="container  mt-5">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col-md-12">
              <h1 className="mt-5 our-values">Our Values</h1>
            </div>

            <div className="col">
              <div className="fin-image-1">
                <div className="mx-auto">
                  <h5 className="text-light text-uppercase text-center">
                    RB financeapp
                  </h5>
                  <p>
                    Now its time to jump on play store and download the app.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="fin-image-2">
                <div className="mx-auto">
                  <h5 className=" text-light text-uppercase text-center">
                    App Approved by Google Play Store
                  </h5>
                  <p>
                    With our user-friendly app, you can access your savings and
                    investment accounts anytime, anywhere, directly from your
                    smartphone or tablet.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="fin-image-3 ">
                <div className="mx-auto">
                  <h5 className="text-light text-uppercase text-center">
                    Financial Education Resources
                  </h5>
                  <p>
                    We believe in empowering our customers with the knowledge
                    and tools.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="fin-image-4 ">
                <div className="mx-auto">
                  <h5 className="  text-uppercase text-center">
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

            <div className="d-grid mb-3 mt-2" id="button-2">
              <button
                id="button-2"
                className="btn p-3 rounded-pill"
                style={{ width: "180px" }}
                type="button"
              >
                <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
                Start Savings
              </button>
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
              <img
                src="https://images.pexels.com/photos/15543046/pexels-photo-15543046/free-photo-of-sticky-notes-on-a-whiteboard-with-company-values.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top1"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Money Management</h5>
                <p className="card-text">
                  We Provide clear and transparent information about money
                  management.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Card 2 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img
                src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top1"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Great user interface</h5>
                <p className="card-text">Our app has great user interface.</p>
              </div>
            </div>
          </div>
          {/* <!-- Card 3 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img
                src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top1"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">24*7 support</h5>
                <p className="card-text">
                  We are always ready to help our users.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Card 4 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img
                src="https://images.pexels.com/photos/10375910/pexels-photo-10375910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top1"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">App On Play Store</h5>
                <p className="card-text">
                  Now you can downloa our Rbfinace on play store.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- card 5 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img
                src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top1"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Security</h5>
                <p className="card-text">
                  Prioritizing the security of customers and strict data
                  protection standards.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Card 6 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img
                src="https://images.pexels.com/photos/8292880/pexels-photo-8292880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top1"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Competitive Returns</h5>
                <p className="card-text">
                  Offers competitive interest rates and fees.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Card 7 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img
                src="https://www.entechus.com/hubfs/Imported_Blog_Media/shutterstock_1024328416-1.jpg"
                className="card-img-top1"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Flexibility</h5>
                <p className="card-text">
                  {" "}
                  Provides flexible financial savings.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Card 8 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img
                src="https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top1"
                alt="..."
              />
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

export default Finance;
