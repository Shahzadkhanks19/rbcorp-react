import React, { useEffect } from "react";
import "../Buffet/buffet.css";
import videoSrc from "../Buffet/Images/buffet-hero.mp4";

function Buffet() {
  useEffect(() => {
    document.title = "RB Corp | RB Buffet";
  }, []);
  return (
    <>
      <div className="container-fluid gx-0">
        <div className="buffet-hero">
          <video preload="auto" autoPlay muted loop id="video-bg">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="buffet-hero-content">
            <h1>
              Welcome to <span>Royalities Buffet</span>
            </h1>
            <p>Get ready to spice up</p>
          </div>
        </div>
      </div>
      <div className="container her">
        <div className="hero-tex">
          <h1 className="mt-5">
            Introducing to{" "}
            <span style={{ color: "goldenrod", fontSize: "55px" }}>
              Royalities Buffet
            </span>
          </h1>
          <p className="mt-5 fs-4">
            Welcome to Our Buffet Experience Indulge in a culinary journey like
            no other at our exquisite buffet destination. We pride ourselves on
            offering a diverse array of delectable dishes, meticulously crafted
            to tantalize your taste buds and satisfy your cravings. Whether
            you're a fan of international cuisine or crave comforting classics,
            our buffet has something for everyone. Savoury Selections From
            succulent roast meats to flavourful seafood delicacies, our savoury
            selection promises to delight even the most discerning palates.
            Indulge in tender cuts of beef, perfectly seasoned and expertly
            cooked to perfection. Dive into a sea of freshness with our
            assortment of prawns, oysters, and mussels, sourced from the finest
            waters. Vibrant Vegetarian Fare Vegetarian or vegan? Fear not, as
            our buffet is brimming with vibrant vegetarian options that are as
            delicious as they are nutritious. Sample our garden-fresh salads,
            bursting with seasonal produce and tossed in zesty dressings.
            Delight in the rich flavours of our vegetable stir-fries and creamy
            risottos, crafted with care to cater to every dietary preference.
            Irresistible Desserts No meal is complete without a sweet ending,
            and our dessert selection is sure to leave you craving more. Indulge
            in decadent cakes, flaky pastries, and creamy puddings that will
            satisfy your sweet tooth and leave you feeling utterly satisfied.
            From classic favourites to innovative creations, our dessert spread
            is a true feast for the senses. Family-Friendly Atmosphere At our
            buffet, we believe in creating a warm and welcoming atmosphere where
            families and friends can come together to enjoy good food and great
            company. Our spacious dining area provides ample seating for groups
            of all sizes, ensuring that everyone can gather around and share in
            the joy of a memorable meal. Book Your Table Today Whether you're
            planning a special celebration or simply craving a delicious meal,
            we invite you to experience the magic of our buffet. Book your table
            today and prepare to embark on a culinary adventure like no other.
            We look forward to serving you soon!
          </p>
        </div>
      </div>

      {/* <!-- hero text --> */}

      {/* <!-- cards --> */}
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="blog-card card h-100">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/025/065/315/small/fast-food-meal-with-ai-generated-free-png.png"
                className="card-img-top"
                alt="img"
              />
              <div className="card-body">
                <h1 className="card-title">Searching a hunger point?</h1>
                <h5 className="card-text mt-3">
                  At Royalties buffet we care about your hunger and health
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
                src="https://www.pngall.com/wp-content/uploads/7/Morning-Breakfast-Transparent.png"
                className="card-img-top"
                alt="img"
              />
              <div className="card-body">
                <h1 className="card-title">Breakfast , Lunch and Dinner</h1>
                <h5 className="card-text mt-3">
                  We are open for all , just take your phone and ordwer with us
                  , we would be happy to serve you foodie
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
                src="https://static.vecteezy.com/system/resources/previews/025/250/452/original/yummy-fried-chicken-cartoon-illustrations-and-clipart-of-tasty-fast-food-meal-generative-ai-png.png"
                className="card-img-top"
                alt="img"
              />
              <div className="card-body">
                <h1 className="card-title">Your Taste is our responsibilty</h1>
                <h5 className="card-text mt-3">
                  We care about your taste with your health. We are here to
                  serve you well and tasty as we can
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
                src="https://www.iconpacks.net/icons/2/free-parking-sign-icon-2526-thumb.png"
                className="card-img-top"
                alt="img"
              />
              <div className="card-body">
                <h1 className="card-title">Parking and location matters</h1>
                <h5 className="card-text mt-3">
                  Now we are open in city center where you can come and take a
                  calm breath because now you do not need to worry about your
                  parking location.
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

      {/* <!-- cards --> */}

      {/* <!-- our values --> */}
      <div className="images-container">
        <div className="container  mt-5">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col-md-12">
              <h1 className="mt-5 our-values">Our Values</h1>
            </div>
            <div className="col">
              <div className="buff-image-1">
                <div className="mx-auto">
                  <h5 className=" text-light text-uppercase text-center">
                    We love foodies
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos provident sint porro, qui blanditiis, officiis unde
                    optio veritatis autem consequatur sed nesciunt laboriosam ea
                    eos! Impedit explicabo pariatur omnis in.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="buff-image-2">
                <div className="mx-auto">
                  <h5 className=" text-light text-uppercase text-center">
                    Best hygienic food for your health
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos provident sint porro, qui blanditiis, officiis unde
                    optio veritatis autem consequatur sed nesciunt laboriosam ea
                    eos! Impedit explicabo pariatur omnis in.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="buff-image-3 ">
                <div className="mx-auto">
                  <h5 className="text-light text-uppercase text-center">
                    We are easy location
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos provident sint porro, qui blanditiis, officiis unde
                    optio veritatis autem consequatur sed nesciunt laboriosam ea
                    eos! Impedit explicabo pariatur omnis in.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="buff-image-4 ">
                <div className="mx-auto">
                  <h5 className="  text-uppercase text-center">
                    One to One serving
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos provident sint porro, qui blanditiis, officiis unde
                    optio veritatis autem consequatur sed nesciunt laboriosam ea
                    eos! Impedit explicabo pariatur omnis in.
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
                Start Ordering
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
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-tZOXX-oruVG4Xis-U6ct3TQPAoKJ9DV3Y_Ta7Qr7jM5tM4w2ae4dSU6-yDS5lPOhuwQ&usqp=CAU"
                className="card-img-top1"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Breakfast</h5>
                <p className="card-text">
                  We Provide healthy and good breakfast with great taste.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Card 2 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img
                src="https://pngimg.com/d/breakfast_PNG22.png"
                className="card-img-top1"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Lunch</h5>
                <p className="card-text">
                  {" "}
                  We offer a numnber of healthy and hygienic lunch with
                  delicious taste.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Card 3 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img
                src="https://pngimg.com/d/breakfast_PNG25.png"
                className="card-img-top1"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Snacks</h5>
                <p className="card-text">
                  Feeling hungry? well lets feed yourself with delicious snacks.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Card 4 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img
                src="https://www.pngarts.com/files/12/Breakfast-PNG-Download-Image.png"
                className="card-img-top1"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Dinner</h5>
                <p className="card-text">
                  Your night meal buddy is here , come at royalties buffet!
                </p>
              </div>
            </div>
          </div>
          {/* <!-- card 5 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img
                src="https://cdn-icons-png.flaticon.com/512/8/8206.png"
                className="card-img-top1"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Parking</h5>
                <p className="card-text">
                  Parking is not a issue now come freely with your vechicle.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Card 6 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/008/492/236/small/delivery-cartoon-illustration-png.png"
                className="card-img-top1"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Online ordering</h5>
                <p className="card-text">
                  Now we available are at your door. Just order with us{" "}
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Card 7 --> */}
          <div className="col">
            <div className="service-card card h-100">
              <img
                src="https://freepngimg.com/thumb/categories/956.png"
                className="card-img-top1"
                alt="..."
              />
              <div className="card-body" />
              <h5 className="card-title">Best drinks </h5>
              <p className="card-text">
                Our drinks has gained most popularity in all
              </p>
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
                <h5 className="card-title">Your hunger and health</h5>
                <p className="card-text">
                  Your health and hunger is our responsibilty, we are clean and
                  cool
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Buffet;
