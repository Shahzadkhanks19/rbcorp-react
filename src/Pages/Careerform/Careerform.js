import React, { useEffect } from "react";
import videoSrc from "../Careerform/Images/career-hero.mp4";

function Careerform() {
  useEffect(() => {
    document.title = "RB Corp | CareerForm";
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
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-md-6">
            <div className="form-container p-4 border border-gray-300 rounded-md">
              <form method="post" action="" enctype="multipart/form-data">
                <h2 className="text-xl text-center font-bold mb-4">
                  Apply Now
                </h2>
                <div className="mb-3">
                  <input
                    required
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    required
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    required
                    name="phone"
                    type="tel"
                    pattern="[6-9]{1}[0-9]{9}"
                    className="form-control"
                    placeholder="Contact Number"
                  />
                </div>
                <div className="mb-3">
                  <input
                    required
                    name="role"
                    type="text"
                    className="form-control"
                    placeholder="Role"
                  />
                </div>
                <div className="mb-3">
                  <select required name="experience" className="form-select">
                    <option>Years of experience</option>
                    <option>Fresher</option>
                    <option>1 - 2 years</option>
                    <option>2 - 4 years</option>
                    <option>4 - 7 years</option>
                    <option>7 - 10 years</option>
                    <option>10+ years</option>
                  </select>
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="3"
                    placeholder="Tell me about yourself...."
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="text-gray-700">
                    Resume<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    required
                    name="cv"
                    type="file"
                    accept=".docx, .pdf, .doc, .jpg, .jpeg"
                    className="form-control"
                  />
                </div>

                <div className="mb-3 text-center">
                  <button type="submit" className="btn btn-primary">
                    Apply
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Careerform;
