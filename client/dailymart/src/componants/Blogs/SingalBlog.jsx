

const Blog = ({blog}) => {

  const {title,slug,author,category,content,image,tags,publishedAt,likesCount,likedBy,comments} = blog;
  return (
    <div>
        <div className="">
         
          <div className="" >
              <div className="overflow-hidden">
                <img src={image} alt="" className="hover:cursor-zoom-in hover:scale-125 transition-all duration-300"/>
              </div>
              <div className="my-2">
                <h2 className="text-xl font-dm-snas tracking-wide font-medium mb-2">{title}...</h2>
                <p className="flex justify-between items-center  mb-2">
                  
                  <span className="bg-gray-100 p-2 text-sm tracking-wide">{category}</span>
                  <span className="text-sm text-gray-600">{publishedAt}</span>

                </p>
                <button className="text-md hover:text-primary cursor-pointer transition-all duration-300">Read More...</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Blog