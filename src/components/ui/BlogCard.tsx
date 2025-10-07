import React from 'react';

interface BlogCardProps {
  post: {
    title: string;
    description: string;
    image: string;
  };
  onReadMore?: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onReadMore }) => {
  const { title, description, image } = post;
  return (
    <article
      className="flex flex-col rounded-lg border shadow-sm bg-white overflow-hidden transition-transform hover:scale-[1.02]"
      style={{
        height: '420px',      
        maxHeight: '420px',
      }}
    >
      {/* Image Section */}
      <div
        className="flex-shrink-0 w-full"
        style={{
          height: '180px',      
          overflow: 'hidden',
        }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div
        className="flex flex-col flex-1 p-4"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          overflow: 'hidden',
        }}
      >
        <div
          className="overflow-y-auto"
          style={{
            maxHeight: '180px',   // ensures description area scrolls if long
          }}
        >
          <h2 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h2>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Button Section */}
        <button
          onClick={onReadMore}
          className="mt-3 text-primary font-medium hover:underline self-start"
        >
          Read More →
        </button>
      </div>
    </article>
  );
};

export default BlogCard;
