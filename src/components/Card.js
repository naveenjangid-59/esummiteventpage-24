import React from "react";

const Card = ({ eventData }) => {
  // const {eventData} = props;
  // console.log(eventData)

  return (
  
     <div >
      <div  className="relative flex bg-[url('https://www.esummit.in/Images/ideastorm.webp')]  object-cover  w-[100%] flex-col bg-center bg-no-repeat bg-auto h-auto  rounded-2xl p-2 pl-6
                   gap-14 sm:p-8 md:w-[35vw]  md:p-4 md:h-[45vh]
                   lg:h-[48vh] lg:p-4 xl:p-6 xl:h-[48vh] hover:scale-[1.12] transition-all ease hover:brightness-[1.7] ">
        <div className="flex flex-col gap-2 md:gap-[3vh]  lg:gap-10 xl-gap-14 ">
         
         <div >
            <img
              className=" rounded-full h-[50px] w-[50px] "
              src={eventData.card_image}
            ></img>
          </div>

          <div  className="flex  flex-col gap-3 md:gap-2 lg:gap-3 xl:gap-5">
            <div className="text-white">
              <p className="text-2xl font-normal md:text-2xl lg:text-3xl ">{eventData.event_name}</p>
            </div>
            <div className="text-white text-[0.8rem] w-[60%] para md:text-[1.8vh] md:w-[70%] lg:text-[2.7vh] lg:w-[70%] xl:w=[70%] xl:text-[1rem]">
              <p>{
              eventData.card_description.length >100 ? (eventData.card_description.substr(0,100)+"...") :
              (eventData.card_description)
              }</p>
            </div>
          </div>
         </div>
        <a href="https://unstop.com/competitions/ideastorm-e-summit24-iit-roorkee-850671">
            <button className=" text-white text-xl lg:text-[1.3rem] absolute bottom-4 xl:text-[1.7] xl:bottom-3">Apply Now</button>
        </a>
      </div>
     </div>
   
  );
};

export default Card;
