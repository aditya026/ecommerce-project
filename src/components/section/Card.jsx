import React from "react";

const Card = (props) => {
  return (
    <div className="h-96 w-80 flex flex-col items-center justify-center bg-white shadow-2xl hover:shadow-xl transition duration-500 transform hover:scale-105">
      <div className="">
        <img className="rounded-md" src={props.image} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center capitalize py-2">
        {/* <h1 className="text-xl font-roboto">{props.disc}</h1> */}
        <a href="#" className="text-xl font-roboto">{props.disc}</a>
        <p className="text-sm">{props.mDisc}</p>
      </div>
    </div>
  );
};

export default Card;
