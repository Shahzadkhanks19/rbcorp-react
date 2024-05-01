import React, { useEffect } from "react";
import "../Gallery/gallery.css";
import videoSrc from "../Gallery/Images/gallery-hero.mp4";
import image1 from "../Gallery/Images/logo-banner.jpg";
import image2 from "../Gallery/Images/1709662441_download (3).webp";
import image3 from "../Gallery/Images/1709719362_Blue Watercolor Minimalist Quote Instagram Post_20240222_183940432.jpg";
import image4 from "../Gallery/Images/1709719767_image_pSn.webp";
import image5 from "../Gallery/Images/1709720388_image_PLy.webp";
import image6 from "../Gallery/Images/gal-charity-1.jpg";
import image7 from "../Gallery/Images/gal-charity-2.jpg";
import image8 from "../Gallery/Images/gal-charity-3.jpg";
import image9 from "../Gallery/Images/gal-charity-4.jpg";
import image10 from "../Gallery/Images/gal-charity-5.jpg";
import image11 from "../Gallery/Images/gal-charity-6.jpg";
import image12 from "../Gallery/Images/gal-charity-7.jpg";
import image13 from "../Gallery/Images/gal-charity-8.jpg";
import image14 from "../Gallery/Images/gal-charity-9.jpg";
import image15 from "../Gallery/Images/rb-buf-1.jpg";
import image16 from "../Gallery/Images/rb-buf-2.jpg";
import image17 from "../Gallery/Images/rb-buf-3.jpg";
import image18 from "../Gallery/Images/rb-buf-4.jpg";
import image19 from "../Gallery/Images/rb-buf-5.jpg";
import image20 from "../Gallery/Images/rb-buf-6.jpg";
import image21 from "../Gallery/Images/rb-buf-7.jpg";

function Gallery() {
  useEffect(() => {
    document.title = "RB Corp | Gallery";
  }, []);
  return (
    <>
      {/* <!-- HEADER --> */}
      <div className="container-fluid gx-0">
        <div className="gallery-hero">
          <video preload="auto" autoPlay muted loop id="video-bg">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="gallery-hero-content">
            <h1>
              RB CORP <span>Gallery</span>
            </h1>
            <p>Gateway to visual Inspiration</p>
          </div>
        </div>
      </div>
      {/* <!--gallery Section--> */}

      <section className="gal mt-5">
        <header>
          <h1 className="heading">RB CORP</h1>
        </header>
        <div className="container-fluid">
          <div className="row gy-3">
            <img src={image1} alt="BANNER" />
          </div>
        </div>
      </section>
      {/* <!--end--> */}

      <section id="gallery-2col" className="gallery py-5">
        <header>
          <h2 className="heading">BEYONIST</h2>
        </header>
        <div className="container">
          <div className="row gallery-list">
            <div className="col-md-6 my-2 my-md-3 gallery-item">
              <a href="!#" className="item-link text-white">
                <div className="item-image">
                  <img src={image2} alt="" className="img-fluid item-img1" />
                </div>
              </a>
            </div>
            <div className="col-md-6 my-2 my-md-3 gallery-item">
              <a href="!#" className="item-link text-white">
                <div className="item-image2">
                  <img src={image3} alt="" className="img-fluid item-img2" />
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 my-2 my-md-3 gallery-item">
              <a href="!#" className="item-link text-white">
                <div className="item-image3">
                  <img src={image4} alt="" className="img-fluid item-img3" />
                </div>
              </a>
            </div>
            <div className="col-md-6 my-2 my-md-3 gallery-item">
              <a href="!#" className="item-link text-white">
                <div className="item-image4">
                  <img src={image5} alt="" className="img-fluid item-img4" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- section 4 --> */}

      <header>
        <h2 className="heading">RB CHARITY FOUNDATION</h2>
      </header>
      <div className="container">
        {/* <!-- First row --> */}

        <div className="row align-items-center justify-content-center my-1">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="imgg mb-2">
              <img
                src={image6}
                alt=""
                className="img-fluid img-responsive w-100 py-1"
              />
            </div>
            <div className="imgg">
              <img
                src={image7}
                alt=""
                className="img-fluid img-responsive w-100 py-1"
              />
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <div className="imgg">
              <img
                src={image8}
                alt=""
                className="img-fluid img-responsive w-100 py-1"
              />
            </div>
          </div>
        </div>

        {/* <!-- Second row --> */}
        <div className="row align-items-center justify-content-center my-1">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="imgg mt-1">
              <img
                src={image9}
                alt=""
                className="img-fluid img-responsive w-100"
              />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="imgg py-2">
              <img
                src={image10}
                alt=""
                className="img-fluid img-responsive w-100"
              />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="imgg mb-1">
              <img
                src={image11}
                alt=""
                className="img-fluid img-responsive w-100"
              />
            </div>
          </div>
        </div>

        {/* <!-- Third row --> */}
        <div className="row align-items-center justify-content-center my-1">
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <div className="imgg">
              <img
                src={image12}
                alt=""
                className="img-fluid img-responsive w-100 py-1"
              />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="imgg mb-2">
              <img
                src={image13}
                alt=""
                className="img-fluid img-responsive w-100 py-1"
              />
            </div>
            <div className="imgg">
              <img
                src={image14}
                alt=""
                className="img-fluid img-responsive w-100 py-1"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- section 4 --> */}
      <div className="container">
        <div className="row">
          <div className="col-12 bey-h">
            <header>
              <h2 className="heading">ROYALTIES BUFFET</h2>
            </header>
          </div>
        </div>
      </div>

      <div className="container d-flex align-items-center justify-content-center flex-column gap-2">
        <div className="container">
          {/* <!-- First row --> */}

          <div className="row align-items-center justify-content-center my-1">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="imgg1 mb-2">
                <img
                  src={image15}
                  alt=""
                  className="img-fluid img-responsive w-100 py-1"
                />
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <div className="imgg1">
                <img
                  src={image16}
                  alt=""
                  className="img-fluid img-responsive w-100 py-1"
                />
              </div>
            </div>
          </div>

          {/* <!-- Second row --> */}
          <div className="row align-items-center justify-content-center my-1">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="imgg1 mt-1">
                <img
                  src={image17}
                  alt=""
                  className="img-fluid img-responsive w-100"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="imgg1 py-2">
                <img
                  src={image18}
                  alt=""
                  className="img-fluid img-responsive w-100"
                />
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="imgg1 mb-1">
                <img
                  src={image19}
                  alt=""
                  className="img-fluid img-responsive w-100"
                />
              </div>
            </div>
          </div>

          {/* <!-- Third row --> */}
          <div className="row align-items-center justify-content-center my-1">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <div className="imgg1">
                <img
                  src={image20}
                  alt=""
                  className="img-fluid img-responsive w-100 py-1"
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="imgg1 mb-2">
                <img
                  src={image21}
                  alt=""
                  className="img-fluid img-responsive w-100 py-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
