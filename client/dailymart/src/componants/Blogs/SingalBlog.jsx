

const Blog = ({blog}) => {

  const {title,slug,author,category,content,image,tags,publishedAt,likesCount,likedBy,comments} = blog;
  return (
    <div>
        <div className="">
         
          <div className="" >
              <div>
                <img src={image} alt="" />
              </div>
              <div className="my-2">
                <h2>{title}...</h2>
                <p className="flex justify-between ">
                  
                  <span>{category}</span>
                  <span>{publishedAt}</span>

                </p>
                <button>Read More...</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Blog