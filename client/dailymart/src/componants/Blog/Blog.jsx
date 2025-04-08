import { useEffect, useState } from "react";
import axios from "axios";
import { FaHome } from "react-icons/fa";
import {Link} from 'react-router-dom'
const Blog = () => {
  const [blog, setBolg] = useState([]);
  // const url = import.meta.env.VITE_BLOG_DATA_GET_URL

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BLOG_DATA_GET_URL)
      .then((res) => {
        setBolg(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <div className="w-11/12 mx-auto">
        <nav className="flex gap-5">
          <Link className="flex items-center gap-2 text-gray-600">
          <span><FaHome /></span>
          Home
          </Link>
          <Link className="text-gray-600">{"<"}Blog</Link>
        </nav>
        </div>
      </div>
    </>
  );
};

export default Blog;
