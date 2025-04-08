import { useEffect, useState } from "react";
import axios from "axios";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import SingalBlog from "./SingalBlog";
import { CiSearch } from "react-icons/ci";
import { HiH1 } from "react-icons/hi2";
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
  const tags = blogs.map((blog)=> blog.tags)
  const allTag = tags.flat().slice(0,8)
  console.log(allTag)
  

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
          <div className="grid sm:grid-cols-5 mt-12 gap-5">
            <div className="col-span-1">

              <div className="relative flex items-center">
                <input type="text" placeholder="Search blog..." className="border p-3  text-sm outline-none border-gray-400 " />
                <button className="bg-primary px-4 py-3 rounded-md ml-2 text-light "><CiSearch  size={20}/></button>
              </div>
              <div className="my-10">
                <h2 className="text-xl font-semibold tracking-wider text-dark mb-2 ">Categories</h2>
                {
                  blogs.map((blog)=><li key={blog._id} className="list-none ml-5 mb-1 font-normal text-md tracking-wide">{blog.category}</li>)
                }
              </div>
              <div className="mb-5">
                <h3 className="text-xl font-semibold tracking-wider text-dark mb-2 ">Recent Post</h3>
                <div>
                  {
                    blogs.slice(0,5).map((blog)=>{
                      return(
                       <div key={blog._id} className="flex items-start gap-3 mb-2">
                       
                            <img src={blog.image} alt={blog.title} className="w-28 h-full object-contain"  />
                        
                          <div>
                            <h2 className="text-md font-dm-snas font-semibold tracking-wide">{blog.slug}</h2>
                            <p className="">
                             
                              <span className="text-sm font-dm-snas font-bold text-gray-500">{blog.publishedAt}</span>
                            </p>
                          </div>
                       </div>
                    )
                    })
                  }
                </div>
                <div>
                  <h3>Product Tags</h3>

                 <div className="grid sm:grid-cols-3 grid-cols-4 gap-2" >
                  {
                    allTag.map((tag)=>{
                      return(
                        <div key={tag} className="">
                          <span className="text-[12px] p-1 bg-gray-200">{tag}</span>
                        </div>
                      )
                    })
                  }
                 </div>
                </div>
              </div>

            </div>
            <div className="col-span-4">
            <div className=" grid sm:grid-cols-2 gap-5">
            {blogs.map((blog) => (
                <SingalBlog key={blog._id} blog={blog}></SingalBlog>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
