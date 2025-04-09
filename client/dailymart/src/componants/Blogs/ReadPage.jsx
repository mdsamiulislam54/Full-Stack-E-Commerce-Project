
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


const ReadPage = () => {
  const { filterBlogs } = useSelector((state) => state.blogs);






  return (
    <div>
       <nav className="bg-gray-200 py-2">
        <ul className="w-11/12 mx-auto">
          <Link to={'/blogs'}>Blog</Link>
          
        </ul>
      </nav>
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col justify-center items-center gap-10">
          {
            filterBlogs.map((blog)=>{
              return(
                <div key={blog._id}>
                  <img src={blog.image} alt="" />
                  <div>
                    <div>
                      <p>{blog.author}</p>
                      <p>{blog.publishedAt}</p>
                    </div>
                    <p>{blog.slug}</p>
                    <p>{blog.content}</p>
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