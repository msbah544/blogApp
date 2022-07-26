//import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  //const [blogs, setBlogs] = useState(null);
  //const [isPending, setIsPending] = useState(true);
  //const [error, setError] = useState(null);
  /*const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);*/

  /*useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((response) => {
          if (!response.ok) {
            throw Error("Resource not found!");
          }
          return response.json();
        })
        .then((data) => {
          //console.log(data);
          setBlogs(data);
          setIsPending(false);
          setError(false);
        })
        .catch((error) => {
          //console.log(error.message);
          setError(error.message);
          setIsPending(false);
          setBlogs(false);
        });
    }, 1000);
  }, []);*/
  const url = "http://localhost:8000/blogs";
  const { data: blogs, isPending, error, setData: setBlogs } = useFetch(url);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList blogs={blogs} title="All Blogs" setBlogs={setBlogs} />
      )}
    </div>
  );
};

export default Home;
