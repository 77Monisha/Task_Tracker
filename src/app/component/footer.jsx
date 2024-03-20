"use client";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-center items-center flex-col mt-16  w-full  bg-zinc-500 border-2 border-zinc-500 h-[60px] rounded-md sm:text-xs">
      <div className="w-1/3 flex justify-center items-center">
        <p className="text-white text-lg">
          &copy; 2024 Task Tracker. All Rights Reserved.
        </p>
      </div>
      <div className="icons  w-1/3 flex flex-row justify-center items-center">
        <ul className="space-x-3">
          <SocialIcon
            url="www.instagram.com"
            style={{ width: "40px", height: "40px" }}
          />
          <SocialIcon
            url="www.facebook.com"
            style={{ width: "40px", height: "40px" }}
          />
          <SocialIcon
            url="www.twitter.com"
            style={{ width: "40px", height: "40px" }}
          />
          <SocialIcon
            url="www.linkedin.com"
            style={{ width: "40px", height: "40px" }}
          />
        </ul>
      </div>
      <div className="w-1/3 flex flex-wrap flex-row justify-center items-center space-x-6 text-white text-lg">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
      </div>
    </footer>
  );
};

export default Footer;
