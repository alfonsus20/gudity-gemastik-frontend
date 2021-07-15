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
import CloseButton from "./CloseButton";

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
        className={`flex flex-col sm:flex-row rounded-lg text-white relative`}
      >
        <div className="w-full md:w-1/2 bg-blue-dark px-8 py-12">
          <Underline backgroundColor="#175F88" height={4} />
          <h2 className="mt-2 font-semibold text-2xl">{title}</h2>
        </div>
        <div className="w-full md:w-1/2 bg-blue-secondary text-lg px-8 py-12">
          {content}
        </div>
        <CloseButton
          onClick={() => dispatch({ type: HIDE_NEWS_MODAL })}
          color="white"
        />
      </div>
    </ModalWrapper>
  );
};

export default NewsModal;
