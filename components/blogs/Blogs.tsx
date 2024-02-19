import { useEffect, useState } from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";
import BlogCards from "./BlogCards";

interface Blog {
  _id: string;
  status: string;
  createdAt: string;
  title: string;
  image: string;
  content: string;
  author: string;
  category: {
    category: string;
  };
}

const Blogs: React.FC = () => {
  const [blogData, setBlogData] = useState<Blog[]>([]);
  const [categorySelected, setCategorySelected] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3002/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data: Blog[] = await response.json();
        setBlogData(data);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  const handleClick = (value: string | null) => {
    setCategorySelected(value);
  };

  const filteredBlogs = categorySelected
    ? blogData.filter(
        (blog) => blog.category && blog.category.category === categorySelected
      )
    : blogData;

  return (
    <div>
      <Navigation />
      <div className="flex space-x-4 justify-center mt-5">
        {blogData.map((blog) => (
          <button
            key={blog._id}
            className={`bg-${
              categorySelected === (blog.category && blog.category.category)
                ? "gray"
                : "blue"
            }-500 hover:bg-transparent text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out`}
            onClick={() => handleClick(blog.category && blog.category.category)}
          >
            {blog.category && blog.category.category}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 min-h-[38.5rem]">
        {filteredBlogs.map((blog) => (
          <BlogCards key={blog._id} blog={blog} />
        ))}
      </div>
      <div className="mt-12"></div>
      <Footer />
    </div>
  );
};

export default Blogs;
