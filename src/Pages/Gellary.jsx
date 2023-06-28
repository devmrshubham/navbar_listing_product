import React, { useState } from "react";
import Imeges from "../Data/Images";

function Gellary(props) {
  const [imagePath, setImagePath] = useState(null);
  const [images, setImages] = useState(Imeges);
  const box = images.map((img, i) => {
    return (
      <div key={i} className=" border  shadow-2xl p-3 ">
        <img src={img} className=" w-[100%] h-[100%]  " alt="" />
      </div>
    );
  });
  return (
    <>
      <div className=" w-[1200px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  sm:grid-cols-2 mt-3 mx-auto gap-3 ">
        {box}
      </div>
      <Prev imagePath={imagePath} />
    </>
  );
}

const Prev = ({ imagePath }) => {
  const imgData = Imeges.filter((d, i) => {
    return imagePath == i;
  });
  console.log(imgData);

  return (
    <div
      className={`fixed top-0 left-0 w-[100%] h-[100vh] bg-[rgba(0,0,0,0.73)] flex justify-center items-center duration-1000 ${
        imagePath == null ? " scale-0" : " scale-100"
      } `}
    >
      <img src={Imeges[0]} alt="" className=" h-[80%] " />
    </div>
  );
};
export default Gellary;
