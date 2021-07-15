import React from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import {
  HIDE_NEWS_MODAL,
  NewsModalDispatchTypes,
} from "../../store/constants/newsConstants";
import Underline from "../Underline";
import { RootState } from "../../store";
import ModalWrapper from "./ModalWrapper";

export type NewsModalProps = {
  title: string;
  content: string;
};

const NewsModal = () => {
  const dispatch: Dispatch<NewsModalDispatchTypes> = useDispatch();
  const { shown, title, content } = useSelector(
    (state: RootState) => state.newsModal
  );

  return (
    <ModalWrapper
      shown={shown}
      onClose={() => dispatch({ type: HIDE_NEWS_MODAL })}
    >
      <div
        className={`flex flex-col sm:flex-row rounded-lg mx-6 max-w-md sm:max-w-xl md:max-w-full text-white`}
      >
        <div className="w-full md:w-1/2 bg-blue-dark px-8 py-12">
          <Underline backgroundColor="#175F88" height={4} />
          <h2 className="mt-2 font-semibold text-2xl">{title}</h2>
        </div>
        <div className="w-full md:w-1/2 bg-blue-secondary text-lg px-8 py-12">
          {content}
        </div>
      </div>
    </ModalWrapper>
    // <div
    //   className={`${
    //     shown ? "block" : "block"
    //   } min-h-screen w-full flex flex-col  md:flex-row justify-center items-center fixed bg-black bg-opacity-60 z-30 text-white`}
    // >

    // </div>
  );
};

export default NewsModal;
