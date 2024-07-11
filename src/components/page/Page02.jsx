import React from "react";
import Card from "../section/Card";

const Page02 = () => {
  return (
    <div className="h-screen w-screen ">
      <div className="flex justify-center items-center py-10 px-10">
        <h1 className="text-5xl font-nunuto capitalize font-normal">
          our favourite
        </h1>
      </div>
      <div className="h-10 w-full flex justify-center items-center border-b-2 border-[#758694]">
        {/* button animaitno */}
        <button className=" px-14 btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group text-xl capitalize">
          {/* purple box */}
          <span className="w-0 h-0 rounded bg-[#3b6638ff] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
          <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
          for everyday
          </span>
        </button>

        {/* button normal */}

        {/* <button className="px-24 text-xl capitalize hover:bg-[#]">
          for everyday
        </button> */}
        <button className=" px-14 btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group text-xl capitalize">
          {/* purple box */}
          <span className="w-0 h-0 rounded bg-[#3b6638ff] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
          <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
          for travel
          </span>
        </button>
        <button className=" px-14 btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group text-xl capitalize">
          {/* purple box */}
          <span className="w-0 h-0 rounded bg-[#3b6638ff] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
          <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
          for activity
          </span>
        </button>
      </div>
      <div className="flex justify-center items-center py-20 gap-14">
        <Card image="/shoe01.png" disc="shoe01" mDisc="more about shoe01" />
        <Card image="/shoe02.png" disc="shoe02" mDisc="more about shoe02"/>
        <Card image="/shoe03.png" disc="shoe03" mDisc="more about shoe03"/>
      </div>
    </div>
  );
};

export default Page02;
