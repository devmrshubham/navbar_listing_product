import React from "react";
import menuData from "../Data/Menu";
import Blogs from "../Data/Blog";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home(props) {
  const [blogs, setblogs] = useState(Blogs);
  const [Active, setActive] = useState(null);

  const CategoriesHn = (index) => {
    setActive(index);
  };

  useEffect(() => {
    if (Active !== null) {
      setblogs(
        Blogs.filter((d) => {
          return d.CategoriId == Active;
        })
      );
    } else {
      setblogs(Blogs);
    }
  }, [Active]);
  return (
    <>
      <Categories Active={Active} handler={CategoriesHn} />
      <MenuBlog data={blogs} />
    </>
  );
}

function Categories({ Active, handler }) {
  const Categorilist = menuData.map((d) => {
    return (
      <li
        onClick={() => handler(d.id)}
        className={`shadow p-2 select-none  cursor-pointer ${
          Active == d.id ? "bg-cyan-900 text-white " : ""
        } `}
        key={d.id}
      >
        {d.name}
      </li>
    );
  });
  return (
    <ul className="max-w-[1000px]  justify-between mx-auto flex p-3 jusb ">
      <li
        onClick={() => handler(null)}
        className={`shadow px-4 cursor-pointer p-2 ${
          Active == null ? "bg-cyan-900 text-white" : ""
        } `}
      >
        All
      </li>
      {Categorilist}
    </ul>
  );
}

function MenuBlog({ data }) {
  let CardList;
  if (data.length > 0) {
    CardList = data.map((blog) => {
      return (
        <Link to={`/blog/${blog.id}`}>
          <div key={blog.id} className="h-[300px] border shadow">
            <img src={blog.img} className=" w-[100%]  h-[80%] " alt="" />
            <h1 className="text-center  capitalize mt-3">{blog.title} </h1>
          </div>
        </Link>
      );
    });
  } else {
    CardList = <h1 className=" "> NO Blogs Found</h1>;
  }

  return (
    <div className="max-w-[1200px] border p-4 gap-3 grid md:grid-cols-4 border-red-500 mx-auto">
      {CardList}
    </div>
  );
}
export default Home;
