import React from 'react';

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground mb-8">
          Welcome to our blog. Stay tuned for stories, market insights, and updates.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3].map(i => (
            <article key={i} className="rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-2">Sample Post {i}</h2>
              <p className="text-sm text-muted-foreground">
                This is a placeholder blog post. Content coming soon.
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
