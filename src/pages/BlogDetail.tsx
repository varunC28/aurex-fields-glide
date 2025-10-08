// src/pages/BlogDetail.tsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header, { useHeaderMenu } from "@/components/Header";
import Footer from "@/components/Footer";
import { MenuToggle } from "@/components/header/MenuToggle";
import { createPortal } from "react-dom";
import { blogPosts, BlogPost } from "@/data/blogData";

const BlogDetail = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useHeaderMenu();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find the blog post by id
  const post: BlogPost | undefined = blogPosts.find((p) => p.id === Number(id));

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

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        <h1 className="text-2xl">Blog post not found.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isMenuOpen={isMenuOpen} closeMenu={closeMenu} />

      <main className="pt-20">
        <section className="container mx-auto px-4 py-16 max-w-4xl">
          <button
            onClick={() => navigate(-1)}
            className="mb-8 text-primary font-semibold hover:underline"
          >
            ← Back to Blog
          </button>

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
          />

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {post.title}
          </h1>
          <p className="text-gray-500 mb-8">{post.date}</p>

          <div className="prose prose-lg max-w-none text-gray-700">
            {post.description.split("\n").map((line, idx) => (
              <p key={idx}>{line}</p>
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

export default BlogDetail;
