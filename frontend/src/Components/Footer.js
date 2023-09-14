import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="FooterContainer">
        <div className="brand Footer_Brand">
          <Link to={"/"}>
            <h1>
              <span className="the">The</span>Serian
            </h1>
          </Link>
        </div>
        <div className="Footer_text">
        <div className="Footer_Pages">
          <h3>Quick Link </h3>
          <ul>
          <li><Link to={"/"} >Home</Link></li>
            <li><Link to={"/Bollywood"} >Bollywood</Link></li>
            <li><Link to={"/HollyWood"} >HollyWood</Link></li>
            <li><Link to={"/Technology"} >Technology</Link></li>
            <li><Link to={"/Fitness"} >Fitness</Link></li>
            <li><Link to={"/Food"} >Food</Link></li>
          </ul>
        </div>
        <div className="FooterContact">
            <h3> Contact US </h3>
          <Link to={"https://www.facebook.com/nitinrajputindia/"} target="_blank"><div className="social_child"> <AiFillFacebook className="fb"/>facebook</div></Link>
          <Link to={"https://www.instagram.com/nitinrajputindia/"} target="_blank" ><div className="social_child"><AiFillInstagram className="insta"/> Intagram</div></Link>
          <Link to={"https://github.com/nitinrajputind"} target="_blank"><div className="social_child"><AiFillGithub className="git"/> github</div></Link>
          <Link to={"https://www.linkedin.com/in/nitinrajputindia"} target="_blank"><div className="social_child"> <AiFillLinkedin className="link"/>linkedin</div></Link>
        </div>
        </div>

      </div>
      <div className="CopyRightContainer">
        <h3>All CopyRight @ 2023 reserved Nitin Rajput With ❤️ </h3>
      </div>
    </footer>
  );
};

export default Footer;
