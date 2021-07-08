import React from "react";
import Underline from "../components/Underline";
import { motion } from "framer-motion";

type NewsProps = {
  title: string;
  content: string;
  colspan: 1 | 2 | 3;
};

const NewsCard = ({ title, content, colspan }: NewsProps) => {
  const [expand, setExpand] = React.useState<boolean>(false);

  const titleVariants = {
    expand: {
      backgroundColor: "#110828",
    },
    collapse: {
      backgroundColor: "#fff",
    },
  };

  // const paragraphVariants = {
  //   expand: {
  //     maxHeight: "1000px",
  //     backgroundColor: "#1854FF",
  //     paddingTop: 16,
  //     paddingBottom: 16,
  //   },
  //   collapse: {
  //     maxHeight: "0px",
  //     backgroundColor: "#fff",
  //     paddingTop: 0,
  //     paddingBottom: 0,
  //   },
  // };

  const transitions = {
    stiffness: 0,
    duration: 0.5,
  };

  return (
    <div
      className={` h-28 w-full pb-5 ${
        expand ? "z-10" : "z-0"
      } flex flex-col cursor-pointer transition transform hover:text-white hover:scale-110 ${
        colspan === 1
          ? "col-span-1"
          : colspan === 2
          ? "col-span-2"
          : "col-span-3"
      } `}
      onMouseEnter={() => setExpand(true)}
      onMouseLeave={() => setExpand(false)}
    >
      <div className="shadow-lg absolute top-0 left-0 ">
        <motion.div
          className="px-8 py-4 rounded-md"
          variants={titleVariants}
          initial="expand"
          animate={expand ? "expand" : "collapse"}
        >
          <Underline backgroundColor="#1854FF" width={50} height={5} />
          <motion.h3 className="mt-2 font-semibold">{title}</motion.h3>
        </motion.div>
        {/* <motion.p
          className="overflow-hidden px-8 rounded-b-md text-sm"
          variants={paragraphVariants}
          initial="collapse"
          animate={expand ? "expand" : "collapse"}
          transition={transitions}
        >
          {content}
        </motion.p> */}
      </div>
    </div>
  );
};

export default NewsCard;
