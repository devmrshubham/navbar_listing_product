import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Blog(props) {
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    setBlog(() => {
      blog.filter((d) => {
        return d.id == id;
      });
    });
  }, []);

  const { id } = useParams();

  return (
    <div className="w-[1200px] mx-auto grid grid-cols-2">
      <div className="">
        <img src={blog[0].img} alt="" />
      </div>
    </div>
  );
}

export default Blog;
