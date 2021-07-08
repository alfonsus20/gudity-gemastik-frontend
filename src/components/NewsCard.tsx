import React from "react";
import Underline from "../components/Underline";

type NewsProps = {
  title: string;
  content: string;
  colspan: 1 | 2 | 3;
};

const NewsCard = ({ title, content, colspan }: NewsProps) => {
  return (
    <div
      className={`px-8 py-6 bg-white rounded-md overflow-hidden shadow-lg ${
        colspan === 1
          ? "col-span-1"
          : colspan === 2
          ? "col-span-2"
          : "col-span-3"
      } `}
    >
      <Underline backgroundColor="#1854FF" width={50} height={5} />
      <h3 className="mt-2 mb-4 font-semibold">{title}</h3>
      <p
        className="overflow-hidden"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
        }}
      >
        {content}
      </p>
    </div>
  );
};

export default NewsCard;
