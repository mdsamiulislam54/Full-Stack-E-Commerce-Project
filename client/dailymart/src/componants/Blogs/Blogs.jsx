import { useEffect, useState } from "react";
import axios from "axios";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import SingalBlog from "./SingalBlog";
import { CiSearch } from "react-icons/ci";
const Blog = () => {
  const [blogs, setBolg] = useState([]);
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
          <nav className="flex items-center py-4 border-b-2 border-gray-200 mb-4">
            <Link className="flex items-center gap-2 text-gray-900 font-semibold">
              <span>
                <FaHome />
              </span>
              Home
              <span>
                <MdKeyboardArrowRight size={20} />
              </span>
            </Link>
            <Link className="text-gray-400 text-sm font-semibold">Blog</Link>
          </nav>
          <div className="grid grid-cols-5">
            <div className="col-span-1">

              <div className="relative flex items-center">
                <input type="text" placeholder="Search blog..." className="border p-1 rounded-md text-sm outline-none border-gray-400 " />
                <button className="bg-primary px-2 py-1 rounded-md ml-2 text-light "><CiSearch  size={20}/></button>
              </div>

            </div>
            <div className="col-span-4">
              {blogs.map((blog) => (
                <SingalBlog blog={blog}></SingalBlog>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
