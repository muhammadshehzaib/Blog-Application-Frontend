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
        const response = await fetch(`${process.env.DEPLOYMENTLINK}/blogs`);
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
  }, [blogData]);

  const handleClick = (value: string | null) => {
    setCategorySelected(value);
  };

  const filteredBlogs = categorySelected
    ? blogData.filter(
        (blog) => blog.category && blog.category.category === categorySelected
      )
    : blogData;

  const uniqueCategories = Array.from(
    new Set(blogData.map((blog) => blog.category && blog.category.category))
  );

  return (
    <div className="bg-white">
      <Navigation />

      <div className="flex space-x-4 justify-center mt-5 flex-wrap">
        {uniqueCategories.map((category) => (
          <button
            key={category}
            className={`bg-${
              categorySelected === category ? "gray" : "blue"
            }-500 hover:bg-slate-700 mb-2 text-black font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out`}
            onClick={() => handleClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 min-h-[38.5rem] px-5">
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
