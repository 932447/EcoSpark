import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import HomePage_img5 from "../../images/HomePage_img5.jpg";
import HomePage_img6 from "../../images/HomePage_img6.jpg";
import HomePage_img7 from "../../images/HomePage_img7.png";
import HomePage_img8 from "../../images/HomePage_img8.png";
import HomePage_img9 from "../../images/HomePage_img9.png";
import HomePage_img10 from "../../images/HomePage_img10.jpg";
import HomePage_img11 from "../../images/HomePage_img11.jpg";
import HomePage_img12 from "../../images/HomePage_img12.jpg";
import HomePage_img13 from "../../images/HomePage_img13.jpg";
import HomePage_bgvedio from "../../images/HomePage_bgvedio.mp4";
import HomePage_vedio1 from "../../images/HomePage_vedio1.mp4";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import NavBar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const count1 = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(0);
  const rounded1 = useTransform(count1, Math.round);
  const rounded2 = useTransform(count2, Math.round);
  const rounded3 = useTransform(count3, Math.round);

  useEffect(() => {
    const animation1 = animate(count1, 500, { duration: 5 });
    const animation2 = animate(count2, 10000, { duration: 5 });
    const animation3 = animate(count3, 7, { duration: 5 });

    return () => {
      animation2.stop();
      animation3.stop();
    };
  }, []);
  const [animationActive, setAnimationActive] = useState(false);

  const handleButtonClick = () => {
    setAnimationActive(true);
    // Add your logic here to find charging centers
  };

  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="relative">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            -
            <source src={HomePage_bgvedio} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-8xl font-bold mb-4 text-center animate-fadeInUp">
              Welcome to Eco Spark
            </h1>
            <p className="text-lg mb-8 text-center animate-fadeInUp">
              Find the right electric vehicle for you and enjoy the ride with
              ease, exploring different routes and features that suit your
              preferences
            </p>
          </div>
        </div>
        <div className="px-10">
          {/* <Slider {...settings}>Add your slider items here</Slider> */}
        </div>
        <div className="bg-white py-20 text-black">
          <div className="container mx-auto flex items-center justify-between px-10">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-gray-800 font-serif">
                Why Choose Electric Vehicles?
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-serif">
                Ready to embrace the future while also benefiting the planet and
                your finances? Electric Vehicles (EVs) are more than just a fad;
                they represent a wise investment. With reduced operational and
                maintenance expenses, EVs offer substantial savings. Seize the
                opportunity to capitalize on government incentives, making
                eco-friendly transportation more accessible than ever.
                Experience the excitement of swift, noiseless acceleration as
                you traverse the streets with elegance. Yet, it's not solely
                about personal gain; it's about global impact. By opting for an
                EV, you're advocating for cleaner air and a greener environment.
                Make the transition today and contribute to the ongoing EV
                revolution!
              </p>
            </div>

            <div className="">
              <video className="w-full h-80 rounded-sm" autoPlay muted loop>
                <source src={HomePage_vedio1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <div className="relative bg-zinc-950 flex items-center justify-evenly mt-12 h-10 lg:mt-24 lg:h-20 lg:text-2xl md:h-16 md:text-3xl xl:h-22 xl:text-4xl font-light">
          <motion.div className="text-customGreen">
            +<motion.span style={{ color: "white" }}>{rounded1}</motion.span>{" "}
            <span>CHARGERS</span>
          </motion.div>
          <motion.div className="text-customGreen">
            +<motion.span style={{ color: "white" }}>{rounded2}</motion.span>{" "}
            <span>CUSTOMERS</span>
          </motion.div>
          <motion.div className="text-customGreen">
            +<motion.span style={{ color: "white" }}>{rounded3}</motion.span>{" "}
            <span>STATES</span>
          </motion.div>
        </div>
        <div className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">
              EV Charging, Simplified
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="p-2">
                  <img
                    src={HomePage_img6}
                    alt="Scan"
                    className="h-36 w-36 rounded-full"
                  />
                </div>
                <h3 className="text-xl text-black font-semibold mb-2">
                  LOCATE
                </h3>
                <p className="text-gray-700 text-center">
                  Find the nearest charging station
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="p-2">
                  <img
                    src={HomePage_img7}
                    alt="Charge"
                    className="h-36 w-36 rounded-full"
                  />
                </div>
                <h3 className="text-xl text-black font-semibold mb-2">
                  POWER UP
                </h3>
                <p className="text-gray-700 text-center">
                  Plug in your vehicle and start charging instantly
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="p-2">
                  <img
                    src={HomePage_img8}
                    alt="Pay"
                    className="h-36 w-36 rounded-full"
                  />
                </div>
                <h3 className="text-xl text-black font-semibold mb-2">
                  SETTLE
                </h3>
                <p className="text-gray-700 text-center">
                  Pay conveniently for your charging session
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white py-10 px-32">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Find Charging Centers Near You
            </h2>
          </div>
          <div className="flex justify-between">
            <div className="relative">
              <img
                src={HomePage_img10}
                alt=""
                className="h-80 w-64 rounded-sm"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center hover:bg-black hover:bg-opacity-30">
                <Link
                  to="https://www.google.com/maps/d/viewer?mid=1oELdsXkoT9ykhekvVecikw-rgBtWWkU&femb=1&ll=19.075983700000002%2C72.87765590000001&z=11"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-md shadow-md hover:bg-black transition duration-300 ease-in-out">
                    Mumbai
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={HomePage_img13}
                alt=""
                className="h-80 w-64 rounded-sm"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center hover:bg-black hover:bg-opacity-30">
                <Link to="https://www.google.com/maps/d/viewer?mid=1oELdsXkoT9ykhekvVecikw-rgBtWWkU&femb=1&ll=18.50847921666619%2C73.89766800454458&z=12">
                  <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-md shadow-md hover:bg-black transition duration-300 ease-in-out">
                    Pune
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={HomePage_img11}
                alt=""
                className="h-80 w-64 rounded-sm"
              />
              <div
                className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center hover:bg-black hover:bg-opacity-30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Link to="https://www.google.com/maps/d/viewer?mid=1oELdsXkoT9ykhekvVecikw-rgBtWWkU&femb=1&ll=12.971598700000014%2C77.59456269999997&z=12">
                  <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-md shadow-md hover:bg-black transition duration-300 ease-in-out">
                    Bengaluru
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={HomePage_img12}
                alt=""
                className="h-80 w-64 rounded-sm"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center hover:bg-black hover:bg-opacity-30">
                <Link
                  to="https://www.google.com/maps/d/viewer?mid=1oELdsXkoT9ykhekvVecikw-rgBtWWkU&femb=1&ll=28.58016381842533%2C77.17613799780678&z=12"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-md shadow-md hover:bg-black transition duration-300 ease-in-out">
                    Delhi
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center py-10">
            <Link to="/findroute">
              <button className="bg-white text-black font-bold py-2 px-8 rounded-md shadow-md hover:bg-green-500 hover:text-white transition duration-300 ease-in-out">
                Find More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
