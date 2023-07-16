import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="Home" id="Home"></div>
      <div className="Home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Empower your business with transformative technology solutions,
            paving the way for unrivaled success. Discover the innovative
            possibilities that await you at @techSolutions.co, where
            breakthrough advancements meet seamless integration, propelling you
            towards a future of limitless potential and unparalleled efficiency.
          </p>
        </div>
      </div>
      <div className="Home3" id="About">
        <div className="text">
          <h1>Know who we are !</h1>
          <p>
            Revolutionizing businesses through technology, TechBoosters is your
            ultimate partner for digital transformation. Our innovative
            solutions, including software development, web design, mobile apps,
            cloud computing, and IT consulting, empower your success.
            Collaborating closely with you, we create tailored, efficient
            solutions that drive growth and maximize your competitive advantage.
            Trust TechBoosters to unlock your business's potential, fuel
            innovation, and lead you confidently into the digital era. Join us
            in shaping the future of technology-driven success.
          </p>
        </div>
      </div>
      <div className="Home4" id="Brands">
        <div>
          <h1>Brands</h1>
          <div>
            <article>
              <div style={{ animationDelay: "0.3s" }}>
                <AiFillGoogleCircle />
                <p>Google</p>
              </div>
              <div style={{ animationDelay: "0.5s" }}>
                <AiFillAmazonCircle />
                <p>Amazon</p>
              </div>
              <div style={{ animationDelay: "0.7" }}>
                <AiFillLinkedin />
                <p>LinkedIn</p>
              </div>
              <div style={{ animationDelay: "1s" }}>
                <AiFillInstagram />
                <p>Instagram</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
