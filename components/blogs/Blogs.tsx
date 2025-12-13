import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "../Navigation";

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

// BlogCard Component
const BlogCard = ({ blog, index }: { blog: Blog; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden hover:border-zinc-800 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-zinc-900">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: isHovered ? 0.8 : 0.6 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1.5 bg-emerald-500/90 backdrop-blur-sm text-black rounded-lg text-xs font-bold uppercase tracking-wider">
            {blog.category?.category || "General"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <motion.h3
          className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-emerald-400 transition-colors duration-300"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {blog.title}
        </motion.h3>
        <p className="text-zinc-400 text-sm mb-6 line-clamp-3 leading-relaxed">
          {blog.content.length > 120
            ? `${blog.content.substring(0, 120)}...`
            : blog.content}
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-zinc-900">
          <motion.a
            href={`/blogs/${blog._id}`}
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-semibold text-sm group"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Read Article
            <motion.svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: isHovered ? 5 : 0 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.a>
          <span className="text-xs text-zinc-500 uppercase tracking-wider">
            {new Date(blog.createdAt).toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Blogs: React.FC = () => {
  const [blogData, setBlogData] = useState<Blog[]>([]);
  const [categorySelected, setCategorySelected] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${process.env.DEPLOYMENTLINK}/blogs`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data: Blog[] = await response.json();
        setBlogData(data);
      } catch (error: any) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
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

  const uniqueCategories = Array.from(
    new Set(blogData.map((blog) => blog.category && blog.category.category))
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation/>
      {/* Navigation would go here */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-zinc-900">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>

        {/* Floating Gradient Orbs */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium"
            >
              📚 Explore Our Collection
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Discover{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
                Amazing
              </span>{" "}
              Stories
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Dive into a world of knowledge, creativity, and inspiration from
              our community of writers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-12 border-b border-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold mb-3">Filter by Category</h2>
            <p className="text-zinc-500 text-sm">
              Find exactly what you&apos;re looking for
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleClick(null)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                categorySelected === null
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-black shadow-lg shadow-emerald-500/20"
                  : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"
              }`}
            >
              All Articles
            </motion.button>

            {uniqueCategories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleClick(category)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  categorySelected === category
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-black shadow-lg shadow-emerald-500/20"
                    : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-zinc-950 rounded-2xl overflow-hidden shadow-lg border border-zinc-900"
                >
                  <div className="h-56 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 animate-pulse"></div>
                  <div className="p-6 space-y-4">
                    <div className="h-4 w-24 bg-zinc-800 rounded-full animate-pulse"></div>
                    <div className="h-6 bg-zinc-800 rounded-lg animate-pulse"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-zinc-800 rounded animate-pulse"></div>
                      <div className="h-4 bg-zinc-800 rounded animate-pulse w-2/3"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : filteredBlogs.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="wait">
                {filteredBlogs.map((blog, index) => (
                  <BlogCard key={blog._id} blog={blog} index={index} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-zinc-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">No Articles Found</h3>
              <p className="text-zinc-500 mb-6">
                Try selecting a different category or check back later
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleClick(null)}
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-black rounded-xl font-semibold"
              >
                View All Articles
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Results Counter */}
      {!isLoading && filteredBlogs.length > 0 && (
        <section className="py-8 border-t border-zinc-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-zinc-500">
                Showing{" "}
                <span className="text-emerald-400 font-semibold">
                  {filteredBlogs.length}
                </span>{" "}
                {categorySelected ? (
                  <>
                    article{filteredBlogs.length !== 1 ? "s" : ""} in{" "}
                    <span className="text-white font-semibold">
                      {categorySelected}
                    </span>
                  </>
                ) : (
                  <>article{filteredBlogs.length !== 1 ? "s" : ""}</>
                )}
              </p>
            </div>
          </div>
        </section>
      )}

    </div>
  );
};

export default Blogs;