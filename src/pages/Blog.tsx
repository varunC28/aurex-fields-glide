import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header, { useHeaderMenu } from "@/components/Header";
import Footer from "@/components/Footer";
import { MenuToggle } from "@/components/header/MenuToggle";
import { createPortal } from "react-dom";
import BlogCard from "../components/ui/BlogCard";
import { blogPosts } from "@/data/blogData";

const Blog = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useHeaderMenu();
  const navigate = useNavigate();

  useEffect(() => {
    const menuToggleDiv = document.createElement("div");
    menuToggleDiv.id = "menu-toggle-portal";
    document.body.appendChild(menuToggleDiv);
    return () => {
      if (document.body.contains(menuToggleDiv)) {
        document.body.removeChild(menuToggleDiv);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isMenuOpen={isMenuOpen} closeMenu={closeMenu} />

      <main className="pt-20">
        <section className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center">
            Our Blog
          </h1>
          <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Insights, trends, and stories from the evolving world of real estate.
          </p>

          {/* Blog Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                onReadMore={() => navigate(`/blog/${post.id}`)}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {typeof document !== "undefined" &&
        createPortal(
          <div className="fixed top-4 right-4 z-[10000]">
            <MenuToggle isOpen={isMenuOpen} onToggle={toggleMenu} />
          </div>,
          document.getElementById("menu-toggle-portal") || document.body
        )}
    </div>
  );
};

export default Blog;
