import whyChooseUsBackground from "../../assets/img/why-choose-us-bg.jpg";
import whyGlobe from "../../assets/img/home-why-globe.png";
import whyPlane from "../../assets/img/home-why-plane.png";
import whyList from "../../assets/img/home-why-list.png";
import whyHotel from "../../assets/img/home-why-hotel.png";

const HomeWhyChooseUs = () => {
  return (
    // why choose us section?
    <>
      <div className=" text-white flex flex-col justify-between sm:justify-around relative h-screen">
        <img
          className="absolute w-full h-full object-cover -z-10"
          src={whyChooseUsBackground}
        />
        <div className="flex md:mx-20 mx-2 sm:mx-5 py-10 sm:py-0">
          <div className="w-[50%] flex justify-start">
            <div className="md:w-[65%] flex flex-col items-center">
              <img className="w-[6rem]" src={whyGlobe} />
              <h1 className="text-lg sm:text-3xl md:text-2xl xl:text-4xl my-2">
                Experienced Guide
              </h1>
              <p className="text-xs xl:text-sm w-[100%] text-justify hidden md:block">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                beatae fugiat sit iusto voluptate totam excepturi sed eius
                molestias, reprehenderit numquam iure aut non sint officiis quod
                consequatur laboriosam deleniti id enim dolorem illo. Ipsa.
                Lorem, ipsum.
              </p>
            </div>
          </div>
          <div className="w-[50%] flex justify-end">
            <div className="md:w-[65%] flex flex-col items-center">
              <img className="w-[4.8rem]" src={whyPlane} />
              <h1 className="text-lg sm:text-3xl md:text-2xl xl:text-4xl my-2">
                Affordable Price
              </h1>
              <p className="text-xs xl:text-sm w-[100%] text-justify hidden md:block">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                beatae fugiat sit iusto voluptate totam excepturi sed eius
                molestias, reprehenderit numquam iure aut non sint officiis quod
                consequatur laboriosam deleniti id enim dolorem illo. Ipsa.
                Lorem, ipsum.
              </p>
            </div>
          </div>
        </div>
        <div className="flex md:mx-20 mx-2 sm:mx-5 py-10 sm:py-0">
          <div className="w-[50%] flex justify-start">
            <div className="md:w-[65%] flex flex-col items-center">
              <img className="w-[6rem]" src={whyHotel} />
              <h1 className="text-lg sm:text-3xl md:text-2xl xl:text-4xl my-2">
                Luxurious Hotel
              </h1>
              <p className="text-xs xl:text-sm w-[100%] text-justify hidden md:block">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                beatae fugiat sit iusto voluptate totam excepturi sed eius
                molestias, reprehenderit numquam iure aut non sint officiis quod
                consequatur laboriosam deleniti id enim dolorem illo. Ipsa.
                Lorem, ipsum.
              </p>
            </div>
          </div>
          <div className="w-[50%] flex justify-end">
            <div className="md:w-[65%] flex flex-col items-center">
              <img className="w-[6rem]" src={whyGlobe} />
              <h1 className="text-lg sm:text-3xl md:text-2xl xl:text-4xl my-2">
                Experienced Guide
              </h1>
              <p className="text-xs xl:text-sm w-[100%] text-justify hidden md:block">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                beatae fugiat sit iusto voluptate totam excepturi sed eius
                molestias, reprehenderit numquam iure aut non sint officiis quod
                consequatur laboriosam deleniti id enim dolorem illo. Ipsa.
                Lorem, ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeWhyChooseUs;
