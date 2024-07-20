import React from "react";
import foot from "../assets/footer.img.jpeg"
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={foot}
          alt="Founder"
        />

        <h2>Ayush jain</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/ayush-jain-a8a4a0224" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://instagram.com/ayush_jain_a_j_" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/ayushjain12004" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;