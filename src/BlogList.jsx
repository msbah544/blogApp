import { Link } from "react-router-dom";
const BlogList = ({ blogs, title, setBlogs }) => {
  /*const handleClick = (id) => {
    const updateBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updateBlogs);
  };*/
  return (
    <div className="home">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
          {/*<button onClick={() => handleClick(blog.id)}>delete blog</button>*/}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
