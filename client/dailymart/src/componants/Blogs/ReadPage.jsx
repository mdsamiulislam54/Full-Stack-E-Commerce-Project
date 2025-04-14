
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { CgProfile } from "react-icons/cg";


const ReadPage = () => {
  const { filterBlogs } = useSelector((state) => state.blogs);






  return (
    <div>
   
      <div className="sm:w-6/12 w-11/12 mx-auto my-5">
        <div className="">
          {
            filterBlogs.map((blog)=>{
              return(
                <div key={blog._id} className="flex flex-col justify-center items-center">
                  <img src={blog.image} alt={blog.title} className="w-full" />
                  <div>
                    <div className="flex items-center justify-between  py-5">
                      <p className="flex items-center font-semibold text-xl gap-3"><span><CgProfile size={20} /></span>{blog.author}</p>
                      <p className="text-xl font-bold text-gray-600">{blog.publishedAt}</p>
                    </div>
                    <p className="text-2xl font-semibold mb-4">{blog.slug}</p>
                    <p className="tracking-wide text-sm font-light leading-8">{blog.content}</p>
                    
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ReadPage