"use client";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <footer className="flex flex-wrap flex-col mt-40  w-full">
      <div className="flex flex-row justify-center items-center w-full p-10 space-x-20">
        <div className="w-2/3">
          <label htmlFor="email" className="text-2xl font-bold pr-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-96 font-sans font-semibold text-lg"
          />
          <button className="bg-stone-600 text-white p-2 rounded-xl ml-2">
            Ask your Query
          </button>
        </div>
        <div className="w-1/3 ">
          <div>
            <table className="flex flex-col flex-wrap w-full">
              <thead className="flex flex-row font-semibold text-2xl">
                <tr className="flex flex-row gap-56">
                  <th className="text-left">About</th>
                  <th className="text-right ml-6">Product</th>
                </tr>
              </thead>
              <tbody className="mt-2">
                <tr className="flex flex-row justify-between">
                  <td>
                    <ul className="space-y-2">
                      <li className="text-left">
                        <a href="#">Company Overview</a>
                      </li>
                      <li className="text-left">
                        <a href="#">Mission & Vision</a>
                      </li>
                      <li className="text-left">
                        <a href="#">Our Team</a>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul className="space-y-2">
                      <li className="text-left">
                        <a href="#">Product Features</a>
                      </li>
                      <li className="text-left">
                        <a href="#">Pricing</a>
                      </li>
                      <li className="text-left">
                        <a href="#">Testimonials</a>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap w-full bg-zinc-500 border-2 border-zinc-500 h-[60px] mt-20 rounded-md">
        <div className="w-1/3 flex justify-center items-center">
          <p className="text-white text-lg">
            &copy; 2024 Task Tracker. All Rights Reserved.
          </p>
        </div>
        <div className="icons w-1/3 flex flex-row justify-center items-center">
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
      </div>
    </footer>
  );
};

export default Footer;
