import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className=" w-[100%] h-[100px] bg-sky-500  p-2 flex justify-between items-center text-white ">
      <h1 className="font-bold text-2xl ">Blogger</h1>
      <ul className=" flex gap-3">
        <Link to="/">
          <li>Home</li>
        </Link>

        <li>Login</li>
      </ul>
    </div>
  );
}

export default Header;
