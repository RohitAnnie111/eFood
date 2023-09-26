import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="iconsdiv">
          <div className="item1">
            <a
              href="https://www.linkedin.com/in/rohit-kafle-3b2354260"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                <FaLinkedin />
                linkdin
              </p>{" "}
            </a>
          </div>

          <div className="item1">
            <p>
              <FaInstagram />
              insta{" "}
            </p>
          </div>

          <div className="item1">
            <p>
              <FaFacebook />
              facebook
            </p>
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill=" red"
            fill-opacity="1"
            d="M0,128L60,122.7C120,117,240,107,360,96C480,85,600,75,720,101.3C840,128,960,192,1080,192C1200,192,1320,128,1380,96L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>{" "}
        </svg>
      </div>
    </>
  );
}
