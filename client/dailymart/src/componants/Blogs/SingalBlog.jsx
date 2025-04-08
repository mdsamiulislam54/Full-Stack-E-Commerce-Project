

const Blog = ({blog}) => {
  console.log(blog)
  const {title,slug,author,category,content,image,tags,publishedAt,likesCount,likedBy,comments} = blog;
  return (
    <div>
        <div className="">
         
          <div className="col-span-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nulla sequi in rem laborum eaque illo nam obcaecati amet fugiat, ullam dolor enim ipsam earum itaque beatae tempore. Pariatur, accusamus!</div>
        </div>
    </div>
  )
}

export default Blog