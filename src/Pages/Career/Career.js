import React, { useEffect, useState } from "react";
import "../Career/career.css";
import { Link } from "react-router-dom";
import axios from "axios";
import videoSrc from "../Career/Images/career-hero.mp4";

function Career() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/career", {
        name: name,
        email: email,
        phone: phone,
        message: message,
      });
      alert("Message sent successfully");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      alert("Failed to send message" + error);
    }
  };

  useEffect(() => {
    document.title = "RB Corp | Careers";
  }, []);
  return (
    <>
      <div className="container-fluid gx-0">
        <div className="career-hero">
          <video preload="auto" autoPlay muted loop id="video-bg">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="career-hero-content">
            <h1>
              Welcome to <span>Career</span>
            </h1>
            <p>Discover Your Passion</p>
          </div>
        </div>
      </div>

      <div className="container mt-4 mb-4">
        <h1 className="text-center">Works we provide</h1>
      </div>

      <div className="container">
        {/* <!-- card row 1  --> */}
        <div className="row justify-content-center h-100">
          <div className="col-md-4 h-100">
            <div className="job-card card text-center mb-3 h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <b>Frontend Developer</b>
                </h5>
                <p className="card-text">
                  Craft captivating user interfaces, user experiences, bringing
                  designs to life with creativity and seamless interfaces that
                  engage users.
                </p>
                <Link to="/careerform" className="btn btn-primary">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- Backend --> */}
          <div className="col-md-4 h-100">
            <div className="job-card card text-center mb-3 h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <b>Backend Developer</b>
                </h5>
                <p className="card-text">
                  Architect robust systems, driving efficiency and scalability
                  to support digital infrastructure and ensure seamless
                  operations.
                </p>
                <Link to="/careerform" className="btn btn-primary">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- Database --> */}
          <div className="col-md-4 h-100">
            <div className="job-card card text-center mb-3 h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <b>Database Manager</b>
                </h5>
                <p className="card-text">
                  Ensure seamless data access and integrity with SQL or NoSQL
                  expertise. Drive strategic decisions with optimized storage.
                </p>
                <Link to="/careerform" className="btn btn-primary">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* <!-- card row 2 --> */}
        <div className="row justify-content-center h-100">
          {/* <!-- Multimedia --> */}
          <div className="col-md-4 h-100">
            <div className="job-card card text-center mb-3 h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <b>Multimedia Animation</b>
                </h5>
                <p className="card-text">
                  Spark imagination with captivating visuals and storytelling.
                  Join us to craft impactful animations and leave lasting
                  impressions.
                </p>
                <Link to="/careerform" className="btn btn-primary">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- DM --> */}
          <div className="col-md-4 h-100">
            <div className="job-card card text-center mb-3 h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <b>Digital Marketing</b>
                </h5>
                <p className="card-text">
                  Drive growth through strategic campaigns across digital
                  channels. Optimize engagement and deliver impactful results
                  with analytics.
                </p>
                <Link to="/careerform" className="btn btn-primary">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- E Com --> */}
          <div className="col-md-4 h-100">
            <div className="job-card card text-center mb-3 h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <b>E-Commerce</b>
                </h5>
                <p className="card-text">
                  Revolutionize online shopping experiences with e-commerce
                  expertise. Shape the future of retail through optimization and
                  innovation.
                </p>
                <Link to="/careerform" className="btn btn-primary">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* <!-- card row 3 --> */}
        <div className="row justify-content-center h-100">
          {/* <!-- sales --> */}
          <div className="col-md-4 h-100">
            <div className="job-card card text-center mb-3 h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <b>Sales Executive</b>
                </h5>
                <p className="card-text">
                  Drive revenue growth with persuasive sales strategies. Join us
                  to forge meaningful client relationships and elevate
                  products/services.
                </p>
                <Link to="/careerform" className="btn btn-primary">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- IT --> */}
          <div className="col-md-4 h-100">
            <div className="job-card card text-center mb-3 h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <b>IT Professional</b>
                </h5>
                <p className="card-text">
                  Ensure smooth operations and security, leveraging expertise to
                  maintain and optimize digital systems for reliability and
                  performance.
                </p>
                <Link to="/careerform" className="btn btn-primary">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- Interns --> */}
          <div className="col-md-4 h-100">
            <div className="job-card card text-center mb-3 h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <b>Internships</b>
                </h5>
                <p className="card-text">
                  Begin your career journey with mentorship and hands-on
                  experience. Make a real impact on projects and gain valuable
                  skills.
                </p>
                <Link to="/careerform" className="btn btn-primary">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h3>Why Work with us?</h3>
            <p>
              Enter a warm environment where people value and develop your
              talents. We support your growth by providing direction and
              engaging tasks because we have faith in you. Our fundamental value
              is collaboration, which promotes both creativity and friendships.
              Your path with us is about more than simply work; it's about
              realizing your potential and changing the world. We appreciate
              your distinct viewpoint and urge you to participate fully.
              Together, let's develop something truly unique, where each
              person's opinion counts and their input is valued.
            </p>
            <div className="btn">Learn More</div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="row mb-4">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">
                <div className="mb-3 career">
                  <i className="lni lni-invention rounded-circle bg-warning d-inline p-3"></i>
                </div>
                <h5 className="font-weight-bold text-2xl">
                  Individual Approaches
                </h5>
                <p className="career-text mb-0">
                  Embrace individuality, celebrating diverse perspectives and
                  empowering each person's unique strengths and contributions.
                </p>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">
                <div className="mb-3 career">
                  <i className="lni lni-consulting rounded-circle bg-warning d-inline p-3"></i>
                </div>
                <h5 className="font-weight-bold text-2xl">Team Coordination</h5>
                <p className="career-text mb-0">
                  Foster teamwork through effective communication, and mutual
                  support, ensuring synergy and success across all endeavors.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">
                <div className="mb-3 career">
                  <i className="lni lni-users rounded-circle bg-warning d-inline p-3"></i>
                </div>
                <h5 className="font-weight-bold text-2xl">
                  Well Understanding
                </h5>
                <p className="career-text mb-0">
                  Deepen connections through empathy and active listening,
                  fostering mutual trust and a shared understanding of diverse
                  perspectives.
                </p>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">
                <div className="mb-3 career">
                  <i className="lni lni-graph rounded-circle bg-warning d-inline p-3"></i>
                </div>
                <h5 className="font-weight-bold text-2xl">
                  Friendly Atmosphere
                </h5>
                <p className="career-text mb-0">
                  Create a welcoming environment where kindness and camaraderie
                  thrive, fostering friendships and a sense of belonging for
                  all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h1 className="text-center">Meet our team</h1>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="bg-white rounded-lg shadow-md p-4 h-100">
              <img
                src="https://via.placeholder.com/300"
                className="w-100 rounded-lg mb-4"
                alt="..."
              />
              <h5 className="text-xl font-bold mb-2">Mr.xyz</h5>
              <p className="text-gray-700">
                We have great opportunity for graphics, you can apply via our
                apply button. Happy time
              </p>
              <a href="!#" className="btn btn-primary btn-block">
                Visit us
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="bg-white rounded-lg shadow-md p-4 h-100">
              <img
                src="https://via.placeholder.com/300"
                className="w-100 rounded-lg mb-4"
                alt="..."
              />
              <h5 className="text-xl font-bold mb-2">Mr.xyz</h5>
              <p className="text-gray-700">
                We have great opportunity for web, you can apply via our apply
                button. Happy time
              </p>
              <a href="!#" className="btn btn-primary btn-block">
                Visit us
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="bg-white rounded-lg shadow-md p-4 h-100">
              <img
                src="https://via.placeholder.com/300"
                className="w-100 rounded-lg mb-4"
                alt="..."
              />
              <h5 className="text-xl font-bold mb-2">Mr.xyz</h5>
              <p className="text-gray-700">
                We have great opportunity for sales, you can apply via our apply
                now button. Happy time
              </p>
              <a href="!#" className="btn btn-primary btn-block">
                Visit us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row justify-content-center">
          {/* Quick Conatct Image */}
          <div className="col-lg-6">
            <img
              src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg"
              className="img-fluid w-100"
              alt="Contactimage"
            />
          </div>
          {/*  Quick Contact Form */}
          <div className="col-lg-6">
            <div className="contact-box ms-3">
              <h1 className="mt-2" style={{ fontFamily: "Arial" }}>
                Quick Contact
              </h1>
              <form className="mt-4" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input
                        className="form-control"
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input
                        className="form-control"
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input
                        className="form-control"
                        name="phone"
                        type="tel"
                        placeholder="Phone"
                        pattern="[6-9]{1}[0-9]{9}"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <textarea
                        className="form-control"
                        type="text"
                        name="message"
                        rows="3"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="btn mt-3 btn-block">
                      <span>SUBMIT</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container contact-detail mt-5 w-100">
        <div className="info-card card mt-4 border-0 mb-4 w-100">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4">
              <a
                className="text-decoration-none text-dark"
                href="https://www.google.com/maps/place/Beyonist+Skin+Care+Pvt+Ltd/@28.4558595,77.0453401,15z/data=!4m6!3m5!1s0x390d19a8f1feab27:0x5f9d15b558db8836!8m2!3d28.4588586!4d77.0615146!16s%2Fg%2F11l31b14v7?entry=ttu"
              >
                <div className="card-body c-detail text-center">
                  <div>
                    <i className="fa-solid fa-location-dot fa-2x"></i>
                  </div>
                  <div>
                    <h4 className="font-weight-medium">Location</h4>
                    <p>
                      3rd Floor.Landmark Tower, South City, Sector 41,
                      <br />
                      Gurugram, Haryana 122001
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-md-4">
              <div className="card-body c-detail text-center">
                <div className="mr-3">
                  <i className="fa-sharp fa-solid fa-phone-volume fa-2x"></i>
                </div>
                <div>
                  <h4 className="font-weight-medium text-center">Phone</h4>
                  <p>
                    +91 8527999563
                    <br />
                    +91 9876543211
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="card-body c-detail text-center">
                <div className="d-block">
                  <i className="fa-sharp fa-solid fa-envelope fa-2x"></i>
                </div>
                <div>
                  <h4 className="font-weight-medium text-center">Email</h4>
                  <p>
                    contact@rbcorp.com <br />
                    xyz@gmail.com
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

export default Career;
