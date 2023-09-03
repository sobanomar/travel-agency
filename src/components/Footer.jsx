import React from "react";
import footerMap from "../assets/footer-map.png";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="w-full bg-purple-600">
      <img className="absolute w-[70rem] " src={footerMap} alt="" />
      <div className="text-white mx-20">
        <div className="py-11">
          <div className="flex justify-around">
            <div className="w-60">
              <div className="text-xl font-semibold my-4">Agency</div>
              <p className="py-2 font-thin">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus nisi quos nemo, placeat porro ex molestias magnam
                perferendis laudantium nobis voluptate enim est incidunt animi.
              </p>
              <div className="my-2">
                <a className="m-1">
                  <FacebookIcon />
                </a>
                <a className="m-1">
                  <TwitterIcon />
                </a>
                <a className="m-1">
                  <LinkedInIcon />
                </a>
                <a className="m-1">
                  <InstagramIcon />
                </a>
              </div>
            </div>
            <div className="w-60">
              <div className="text-xl font-semibold my-4">Page</div>
              <p className="my-1 font-thin">Packages</p>
              <p className="my-1 font-thin">Gallery</p>
              <p className="my-1 font-thin"> Tour Guide</p>
              <p className="my-1 font-thin">FaQ</p>
            </div>
            <div className="w-60">
              <div className="text-xl font-semibold my-4">Links</div>
              <p className="my-1 font-thin">Terms of use</p>
              <p className="my-1 font-thin">Privacy Policy</p>
            </div>
            <div className="w-60">
              <div className="text-xl font-semibold my-4">Contact Us</div>
              <div className="flex">
                <PhoneOutlinedIcon className="m-2" />
                <p className="my-1 font-thin">+12 756 234</p>
              </div>
              <div className="flex">
                <MailOutlineOutlinedIcon className="m-2" />

                <p className="my-1 font-thin">mail@mail.com</p>
              </div>
              <div className="flex">
                <FmdGoodOutlinedIcon className="m-2" />
                <p className="my-1 font-thin">located here</p>
              </div>
            </div>
            <div className="w-60">
              <div className="text-xl font-semibold my-4">
                Booking Destination
              </div>
              <div className="flex">
                <p className="my-1 font-thin">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Commodi, saepe!
                </p>
              </div>
              <button className="text-white bg-purple-800 py-2 px-10 mt-10 rounded-full ">
                Booking Now
              </button>
            </div>
          </div>
        </div>
        <div className="text-center">
          <hr />
          <p className="p-1">Copyright @ 2023 | All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
