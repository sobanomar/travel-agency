// import React from "react";
// import pic1 from "../../assets/img/home-gallery-1.jpg";
// import pic2 from "../../assets/img/home-gallery-2.jpg";
// import pic3 from "../../assets/img/home-gallery-3.jpg";
// import pic4 from "../../assets/img/home-gallery-4.jpg";

// const HomeGallery = () => {
//   return (
//     <div className="mx-20">
//       <div className="flex gap-32 mt-10 ">
//         {/* image section */}
//         <div className="flex flex-col w-[100%] h-[100%] ">
//           <div className="flex flex-col w-[100%]">
//             <div className="flex gap-10 mt-20 w-full h-full">
//               {/* first two image */}
//               <div className="w-[100%]   ">
//                 <img
//                   src={pic1}
//                   className="rounded-3xl w-[100%] h-[80%] object-cover img-glow"
//                 />
//               </div>
//               <div className="w-[100%] ">
//                 <img
//                   src={pic2}
//                   className="rounded-3xl w-[100%] h-[80%] object-cover img-glow"
//                 />
//               </div>
//             </div>
//             <div className="flex gap-10 -mt-20 w-full h-full">
//               {/* first two image */}
//               <div className="w-[100%]   ">
//                 <img
//                   src={pic2}
//                   className="rounded-3xl w-[100%] h-[80%] object-cover img-glow"
//                 />
//               </div>
//               <div className="w-[100%] ">
//                 <img
//                   src={pic1}
//                   className="rounded-3xl w-[100%] h-[80%] object-cover img-glow"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
{
  /* <div className="flex flex-col justify-center w-[50%] ">
  <h1 className="text-lg text-purple-600 font-semibold">Gallery</h1>
  <h1 className="text-5xl leading-[56px] mt-7">
    Moments Captured By Connoisseurs Of Beauty
  </h1>
  <p className="text-sm mt-16">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet voluptatum,
    sed in facere quam fugit, saepe nesciunt dolorum alias qui, animi magni
    veniam? Animi sequi reprehenderit Lorem ipsum dolor sit amet.
  </p>
  <p className="text-sm mt-7">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet voluptatum,
    sed in facere quam fugit, saepe nesciunt dolorum alias qui, animi magni
    veniam? Animi sequi reprehenderit Lorem ipsum dolor sit amet.
  </p>
  <button className="text-white bg-purple-600 text-lg px-8 rounded-full py-2 mt-14 w-[50%]">
    See more
  </button>
</div>; */
}
//       </div>
//     </div>
//   );
// };

// export default HomeGallery;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GallerySection = () => {
  const [Images, setImages] = useState(null);

  useEffect(() => {
    async function getImages() {
      const response = await fetch("http://35.173.181.194:8000/gallery/");
      const images = await response.json();
      const results = images?.results;

      setImages(results);
    }
    getImages();
  }, []);

  return (
    <div className="flex flex-col-reverse md:flex-row mx-5 md:mx-20 lg:mx-20 my-10 sm:my-20 md:h-screen">
      {Images && (
        <>
          <button className="text-white bg-purple-600 text-lg px-8 rounded-full py-2 my-8 md:hidden">
            See More
          </button>
          <div className="flex flex-col md:flex-row gap-8 md:w-[60%]">
            <div className="flex flex-col gap-8 w-full md:w-1/2">
              <div className="relative w-full md:h-[35%] h-full">
                <img
                  className="object-cover h-full w-full rounded-lg img-glow"
                  src={Images[0].image}
                  alt={Images[0].title}
                />
                <div className="bg-neutral-800/75 w-full h-full absolute top-0 left-0 text-white opacity-0 hover:opacity-100 transition-all flex justify-center items-center rounded-lg">
                  <h1 className="text-lg">{Images[0].title}</h1>
                </div>
              </div>
              <div className="relative w-full md:h-[65%] h-full">
                <img
                  className="object-cover h-full w-full rounded-lg img-glow"
                  src={Images[1].image}
                  alt={Images[1].title}
                />
                <div className="bg-neutral-800/75 w-full h-full absolute top-0 left-0 text-white opacity-0 hover:opacity-100 transition-all flex justify-center items-center rounded-lg">
                  <h1 className="text-lg">{Images[1].title}</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse gap-8 w-full md:w-1/2">
              <div className="relative w-full md:h-[35%] h-full">
                <img
                  className="object-cover h-full w-full rounded-lg img-glow"
                  src={Images[2].image}
                  alt={Images[2].title}
                />
                <div className="bg-neutral-800/75 w-full h-full absolute top-0 left-0 text-white opacity-0 hover:opacity-100 transition-all flex justify-center items-center rounded-lg">
                  <h1 className="text-lg">{Images[2].title}</h1>
                </div>
              </div>
              <div className="relative w-full md:h-[65%] h-full">
                <img
                  className="object-cover h-full w-full rounded-lg img-glow"
                  src={Images[3].image}
                  alt={Images[3].title}
                />
                <div className="bg-neutral-800/75 w-full h-full absolute top-0 left-0 text-white opacity-0 hover:opacity-100 transition-all flex justify-center items-center rounded-lg">
                  <h1 className="text-lg">{Images[3].title}</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center md:w-[40%] md:px-5 lg:px-7 xl:px-10 items-center md:items-start">
            <h1 className="text-lg text-purple-600 font-semibold">Gallery</h1>
            <h1 className="text-2xl text-center md:text-left xl:text-5xl my-2 lg:my-4">
              Moments Captured By Connoisseurs Of Beauty
            </h1>
            <div className="my-4">
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                voluptatum, sed in facere quam fugit, saepe nesciunt dolorum
                alias qui, animi magni veniam? Animi sequi reprehenderit Lorem
                ipsum dolor sit amet.
              </p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                voluptatum, sed in facere quam fugit, saepe nesciunt dolorum
                alias qui, animi magni veniam? Animi sequi reprehenderit Lorem
                ipsum dolor sit amet.
              </p>
            </div>
            <button className="text-white bg-purple-600 text-lg px-8 rounded-full py-2 my-4 hidden md:block">
              <Link to="/gallery">See More</Link>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default GallerySection;
