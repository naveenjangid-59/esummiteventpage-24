import React from "react";
import Card from "./Card";

const Cards = (props) => {
  const cardData = props.cardData;
  //console.log(cardData);

  return (
    <div >
      <div className="w-[100%] flex pt-8 flex-row flex-wrap gap-8 sm:m-auto sm:w-[90%] sm:flex sm:flex-row sm:justify-center sm:items-center
      md:flex md:flex-row md:flex-wrap md:w-[80%] md:justify-start md:items-center md:gap-[9vw]">
      {cardData.map((eventData) => {
        // console.log(eventData);
        return <Card eventData={eventData}></Card>;
      })}
      </div>
    </div>
  );
};

export default Cards;
