import React from "react";

type NewsProps = {
  title: string;
  content: string;
  colspan: 1 | 2 | 3;
};

const NewsCard = ({ title, content, colspan }: NewsProps) => {
  return (
    <div
      className={`px-8 py-6 bg-white rounded-md overflow-hidden ${
        colspan === 1
          ? "col-span-1"
          : colspan === 2
          ? "col-span-2"
          : "col-span-3"
      } `}
      style={{
        display: "-webkit-box",
        WebkitLineClamp: 4,
        WebkitBoxOrient: "vertical",
      }}
    >
      <h3 className="mb-4 font-semibold">{title}</h3>
      <p className='overflow-hidden'>{content}</p>
    </div>
  );
};

export default NewsCard;
