import React from "react";
import { Dispatch } from "redux";
import Underline from "../components/Underline";
import { useDispatch } from "react-redux";
import {
  NewsModalDispatchTypes,
  SHOW_NEWS_MODAL,
} from "../store/constants/newsConstants";

type NewsProps = {
  title: string;
  content: string;
  colspan: 1 | 2 | 3;
};

const NewsCard = ({ title, content, colspan }: NewsProps) => {
  const dispatch: Dispatch<NewsModalDispatchTypes> = useDispatch();

  return (
    <div
      className={`w-full flex flex-col cursor-pointer shadow-lg rounded-md transition transform hover:text-white hover:bg-blue-dark hover:scale-110 ${
        colspan === 1
          ? "col-span-1"
          : colspan === 2
          ? "col-span-2"
          : "col-span-3"
      } `}
      onClick={() =>
        dispatch({ type: SHOW_NEWS_MODAL, payload: { title, content } })
      }
    >
      <div className="">
        <div className="px-8 py-4">
          <Underline backgroundColor="#1854FF" width={50} height={5} />
          <h3 className="my-2 font-semibold">{title}</h3>
          <p
            className="overflow-hidden text-sm text-justify"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
            }}
          >
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
