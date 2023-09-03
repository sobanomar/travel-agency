import whyChooseUsBackground from "../../assets/why-choose-us-bg.jpg";
import whyGlobe from "../../assets/home-why-globe.png";
import whyPlane from "../../assets/home-why-plane.png";
import whyList from "../../assets/home-why-list.png";
import whyHotel from "../../assets/home-why-hotel.png";

const HomeWhyChooseUs = () => {
  return (
    // why choose us section?
    <>
      <div className=" text-white flex flex-col my-40 relative">
        <img className="absolute -z-10" src={whyChooseUsBackground} />
        <div className="flex justify-between mx-20 my-20">
          <div className="flex flex-col items-center">
            <img src={whyGlobe} />
            <h1 className="text-4xl mt-8 mb-5">Experienced Guide</h1>
            <p className="text-sm w-[50%] text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
              beatae fugiat sit iusto voluptate totam excepturi sed eius
              molestias, reprehenderit numquam iure aut non sint officiis quod
              consequatur laboriosam deleniti id enim dolorem illo. Ipsa. Lorem,
              ipsum.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src={whyPlane} />
            <h1 className="text-4xl mt-8 mb-5">Affordable Price</h1>
            <p className="text-sm w-[50%] text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
              beatae fugiat sit iusto voluptate totam excepturi sed eius
              molestias, reprehenderit numquam iure aut non sint officiis quod
              consequatur laboriosam deleniti id enim dolorem illo. Ipsa. Lorem,
              ipsum.
            </p>
          </div>
        </div>

        <div className="flex justify-center opacity-0">
          <div
            className=" text-black rounded-full bg-white flex flex-col items-center "
            style={{ height: "400px", width: "400px" }}
          >
            <h1 className="text-lg  mt-16">Why?</h1>
            <h1 className="text-5xl w-[70%] text-center mt-10">
              Why <br /> choose us?
            </h1>
          </div>
        </div>

        <div className="flex justify-between mx-20 my-20">
          <div className="flex flex-col items-center">
            <img src={whyList} />
            <h1 className="text-4xl mt-8 mb-5">Great Support</h1>
            <p className="text-sm w-[50%] text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
              beatae fugiat sit iusto voluptate totam excepturi sed eius
              molestias, reprehenderit numquam iure aut non sint officiis quod
              consequatur laboriosam deleniti id enim dolorem illo. Ipsa. Lorem,
              ipsum.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src={whyHotel} />
            <h1 className="text-4xl mt-8 mb-5">Luxurious Hotel</h1>
            <p className="text-sm w-[50%] text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
              beatae fugiat sit iusto voluptate totam excepturi sed eius
              molestias, reprehenderit numquam iure aut non sint officiis quod
              consequatur laboriosam deleniti id enim dolorem illo. Ipsa. Lorem,
              ipsum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeWhyChooseUs;
