import React from "react";
import Cards from "./Cards";
import {useState} from 'react'
import { ToastContainer,toast} from "react-toastify";

const Hero = (props) => {
  const cardData = props.cardData;
  // console.log(cardData);
  const [btn,setBtn] = useState('All');

          function clickHandeler1(){
            setBtn('All');
          }
          function clickHandeler2(){
            setBtn('Live');
          }
          function clickHandeler3(){
                toast.success("All Events are live.")
          }



  return (
   <div>
     <div className="min-h-screen  bg-container bgMob bg-contain top-0 bg-gradient-to-r from-[#0B0D0F] z-999 from-0%  via-[#0C2820] via-80% to-[#0C2820] to-100%  w-[100%]   pb-10         xl:bg-container xl:bgMob xl:bg-contain xl:top-0 xl:bg-gradient-to-r xl:from-[#0B0D0F] xl:z-999 xl:from-0%  xl:via-[#0C2820] xl:via-80% xl:to-[#0B6F4E] xl:to-100%  xl:w-[100%]  ">
      <div className="w-[80%] m-auto sm:m-auto md:w-[100%] lg:w-[100%] ">
        <div className="flex flex-col gap-6  md:flex-row md:items-center md:justify-around  lg:px-24 md:py-7 pb-6 sm:m-auto lg:mb-6
                        md:flex md:gap-10 md:w-[80%] lg:w-[100%] xl:w-[100]">
          <div className="text-white flex flex-col gap-4">
            <p className="text-5xl font-semibold md:text-6xl">Events</p>
            <p className="text-[1.3rem] font-normal ">
              Challenge your limits with events full of uncertainities
            </p>
          </div>
          <div className="flex flex-row gap-6 text-white   ">
            <button onClick={clickHandeler1} className={`bg-rgb(68, 255, 176) 
             w-[26%] h-[3.1rem] rounded-full flex items-center justify-center text-[0.9rem] font-medium sm:w-[20%] md:h-[3.1rem] md:w-[7rem] md:justify-center md:items-center
            ${btn === 'All'? "bg-[#44FFB0] border-none text-teal-950 font-bold text-[1.1rem]":"bg-transparent border-2 border-white"}
            `}>
              All
            </button>
            <button onClick={clickHandeler2} className={` border-white border-2 w-[26%] h-[3.1rem] rounded-full flex items-center justify-center text-[0.9rem] font-medium sm:w-[20%] md:h-[3.1rem] md:w-[7rem] md:justify-center md:items-center
            ${btn === 'Live'? "bg-[#44FFB0] border-none text-teal-950 font-bold text-[1.1rem]":"bg-transparent "}
            `}>
              Live
            </button>
            <button onClick={clickHandeler3} className={`
            border-white border-2 w-[26%] h-[3.1rem] rounded-full flex items-center justify-center text-[0.8rem] font-medium sm:w-[20%] md:h-[3.1rem] md:w-[7rem] md:justify-center md:items-center
            `}>
              Upcoming
            </button>
          </div>
        </div>

        <div >
          <Cards cardData={cardData} />
        </div>
      </div>
    </div>
      
   </div>
  );
};

export default Hero;
