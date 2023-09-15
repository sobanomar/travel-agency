import React from "react";
import footerMap from "../assets/img/footer-map.png";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="w-full bg-purple-600 ">
      <img
        className="hidden md:block absolute w-[60%] "
        src={footerMap}
        alt=""
      />
      <div className="text-white mx-5 md:mx-10 lg:mx-20">
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
                <div className="my-2">
                  <a className="m-1" style={{ color: "blue" }}>
                    <FacebookIcon className="" />
                  </a>
                  <a className="m-1" style={{ color: "lightblue" }}>
                    <TwitterIcon />
                  </a>
                  <a className="m-1" style={{ color: "darkblue" }}>
                    <LinkedInIcon />
                  </a>
                  <a className="m-1" style={{ color: "rgb(225 48 108)" }}>
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className=" md:w-[14%] flex md:justify-center">
              <div>
                <div className="text-xl font-semibold my-4">Page</div>
                <p className="my-1 font-thin">Packages</p>
                <p className="my-1 font-thin">Gallery</p>
                <p className="my-1 font-thin"> Tour Guide</p>
                <p className="my-1 font-thin">FaQ</p>
              </div>
            </div>
            <div className=" md:w-[14%] flex md:justify-center">
              <div>
                <div className="text-xl font-semibold my-4">Links</div>
                <p className="my-1 font-thin">Terms of use</p>
                <p className="my-1 font-thin">Privacy Policy</p>
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
                <button className="text-white bg-purple-800 py-2 px-5 mt-10 rounded-full ">
                  Booking Now
                </button>
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
