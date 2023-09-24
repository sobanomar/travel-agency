import React from "react";
import footerMap from "../assets/img/footer-map.png";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

import FacebookIcon from "../assets/socials/facebook_icon.png";
import InstagramIcon from "../assets/socials/instagram_icon.png";
import TwitterIcon from "../assets/socials/twitter_icon.png";
import LinkedInIcon from "../assets/socials/linkedin_icon.png";
import { Link } from "react-router-dom";
import CustomButton from "./Common/CustomButton";

const Footer = () => {
  return (
    <div className="w-full bg-purple-600 ">
      <img className="hidden absolute w-[60%]" src={footerMap} alt="" />

      <div className="text-white mx-5 md:mx-10 lg:mx-20 z-10">
        <div className="py-4">
          <div className="flex justify-around flex-col md:flex-row">
            <div className=" md:w-[24%] flex md:justify-center">
              <div>
                <div className="text-xl font-semibold my-4">
                  Visiting My Friend Travels
                </div>
                <p className="py-2 font-thin">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus, autem!
                </p>
              </div>
            </div>
            <div className=" md:w-[14%] flex md:justify-center">
              <div>
                <div className="text-xl font-semibold my-4">Pages</div>
                <div className="flex flex-col gap-2 font-thin">
                  <Link
                    to="/about"
                    className="hover:text-purple-200 transition duration-300"
                  >
                    About
                  </Link>
                  <Link
                    to="/destinations"
                    className="hover:text-purple-200 transition duration-300"
                  >
                    Destinations
                  </Link>
                  <Link
                    to="/gallery"
                    className="hover:text-purple-200 transition duration-300"
                  >
                    Our Gallery
                  </Link>
                  <Link
                    to="/contact"
                    className="hover:text-purple-200 transition duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className=" md:w-[14%] flex md:justify-center">
              <div>
                <div className="text-xl font-semibold my-4">Socials</div>
                <div className="my-2 font-thin text-md">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/visitingmyfriendtravels/?igshid=MzRlODBiNWFlZA%3D%3D"
                    className="flex my-2 cursor-pointer hover:text-pink-400 transition duration-200"
                  >
                    <img className="w-6" src={InstagramIcon} />
                    <p className="mx-2 ">Instagram</p>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/visitingmyfriendtravels?mibextid=LQQJ4d"
                    className="flex my-2 cursor-pointer hover:text-blue-500 transition duration-200"
                  >
                    <img className="w-6" src={FacebookIcon} />
                    <p className="mx-2 ">Facebook</p>
                  </a>
                  <a
                    target="_blank"
                    className="flex my-2 cursor-pointer hover:text-blue-300 transition duration-200"
                  >
                    <img className="w-6" src={TwitterIcon} />
                    <p className="mx-2 ">Twitter</p>
                  </a>
                  <a
                    target="_blank"
                    className="flex my-2 cursor-pointer hover:text-blue-400 transition duration-200"
                  >
                    <img className="w-6" src={LinkedInIcon} />
                    <p className="mx-2 ">LinkedIn</p>
                  </a>
                </div>
              </div>
            </div>
            <div className=" md:w-[24%] flex md:justify-center">
              <div>
                <div className="text-xl font-semibold my-4">Contact Us</div>
                <div className="flex">
                  <PhoneOutlinedIcon className="m-2" />
                  <p className="my-1 font-thin">+12 756 234</p>
                </div>
                <div className="flex">
                  <MailOutlineOutlinedIcon className=" m-2" />
                  <p className="my-1 font-thin">mail@mail.com</p>
                </div>
                <div className="flex">
                  <FmdGoodOutlinedIcon className="m-2" />
                  <p className="my-1 font-thin">located here</p>
                </div>
              </div>
            </div>
            <div className=" md:w-[24%] flex md:justify-center">
              <div className="flex flex-col">
                <div className="text-xl font-semibold my-4">
                  Booking Destination
                </div>
                <div className="flex">
                  <p className="my-1 font-thin">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Commodi, saepe!
                  </p>
                </div>
                <CustomButton
                  label="Book Now"
                  redirectTo="/booking/manual-booking"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <hr />
          <p className="py-2">Copyright @ 2023 | All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
