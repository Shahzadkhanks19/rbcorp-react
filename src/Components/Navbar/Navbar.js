import React, { useState, useEffect } from "react";
import "../Navbar/navbar.css";
import navlogo from "./Images/Rb corp for coding (3).png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector(".navbar-container");
    const headBan = document.querySelector(".head-ban");
    const sticky = navbar.offsetTop + headBan.clientHeight;

    const handleScroll = () => {
      if (window.pageYOffset >= sticky) {
        setIsSticky(true);
        // You can add more actions here when the navbar becomes sticky
      } else {
        setIsSticky(false);
        // Actions when scrolling back to the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={
          isSticky
            ? "navbar-container sticky container-fluid navbar-container head-ban fixed-top"
            : "navbar-container container-fluid navbar-container head-ban fixed-top"
        }
      >
        {/* <div className="container-fluid navbar-container head-ban fixed-top"> */}
        <div className="container">
          <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid">
              <Link className="navbar-brand w-25" to="/">
                <img src={navlogo} alt="nav-logo" className="img-fluid" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item ms-4">
                    <Link className="nav-link" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item ms-4">
                    <Link className="nav-link" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item dropdown ms-4">
                    <a
                      className="nav-link dropdown-toggle"
                      href="!#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Our Businesses
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/beyonist">
                          Beyonist
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/finance">
                          RB Finance App
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/charity">
                          RB Charity Foundation
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/service">
                          RB Service Connect
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/buffet">
                          Royalties Buffet
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item ms-4">
                    <Link className="nav-link" to="/gallery">
                      Gallery
                    </Link>
                  </li>
                  <li className="nav-item ms-4">
                    <Link className="nav-link" to="/blog">
                      Blogs
                    </Link>
                  </li>
                  <li className="nav-item ms-4">
                    <Link className="nav-link" to="/career">
                      Careers
                    </Link>
                  </li>
                  <li className="nav-item ms-4">
                    <Link className="nav-link" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
