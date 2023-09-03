import React from "react";

import { useLoadScript, Marker, GoogleMap } from "@react-google-maps/api";
import { useMemo } from "react";

const ContactForm = () => {
  return (
    <div className="flex m-20">
      <div className="w-[60%] p-2 flex flex-col gap-5">
        <h1 className="text-5xl">Get In Touch</h1>
        <div>
          <form>
            <div className="flex flex-col gap-7 justify-between">
              <div className="flex ">
                <div className="w-[50%] flex flex-col gap-3">
                  <h1 className="text-3xl">First Name*</h1>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="border border-black rounded-3xl p-3 w-[80%]"
                  />
                </div>
                <div className="w-[50%] flex flex-col gap-3">
                  <h1 className="text-3xl">Last Name*</h1>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="border border-black rounded-3xl p-3 w-[80%]"
                  />
                </div>
              </div>
              <div className="flex">
                <div className="w-[50%] flex flex-col gap-3">
                  <h1 className="text-3xl">Your Phone*</h1>
                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    className="border border-black rounded-3xl p-3 w-[80%]"
                  />
                </div>
                <div className="w-[50%] flex flex-col gap-3">
                  <h1 className="text-3xl">Your Email*</h1>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="border border-black rounded-3xl p-3 w-[80%]"
                  />
                </div>
              </div>
              <div className="lex flex-col">
                <h1 className="text-3xl my-4">Your message*</h1>
                <textarea
                  className="border border-black rounded-3xl p-3"
                  placeholder="Your Message"
                  cols="38"
                  rows="5"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        <button className="text-white w-[30%] bg-purple-800 py-2 px-10  rounded-full ">
          Send Message
        </button>
      </div>
      <div className="w-[40%] p-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217759.99380853778!2d74.3343893!3d31.482940349999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1693756893929!5m2!1sen!2s"
          width="100%"
          height="100%"
          className="rounded-3xl"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
