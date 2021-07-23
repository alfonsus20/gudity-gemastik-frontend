import React from "react";
import Slider from "react-slick";

const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
};

const ReviewCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="max-w-screen-xl mx-auto">
      <Slider {...settings}>
        <div className="px-6  flex">
          <div className="flex flex-row items-center space-x-4 px-6 py-8 rounded-md shadow bg-white mx-auto">
            <div className="flex-shrink-0">
              <img
                src="/assets/pictures/user-random.jpg"
                className="w-28 h-28 rounded-full"
                alt=""
              />
            </div>
            <div>
              <p className="mb-6">
                “Keren banget aplikasinya, bisa bantu saya untuk menganalisis
                bisnis saya dalam beberapa tahun kedepan, terlebih disediakan
                komoditas yang bagus dan terpercaya!”
              </p>
              <h4 className="font-medium ">Mike taylor</h4>
              <p>Malang, Jawa Timur</p>
            </div>
          </div>
        </div>
        <div className="px-6  flex">
          <div className="flex flex-row items-center space-x-4 px-6 py-8 rounded-md shadow bg-white mx-auto">
            <div className="flex-shrink-0">
              <img
                src="/assets/pictures/user-random.jpg"
                className="w-28 h-28 rounded-full"
                alt=""
              />
            </div>
            <div>
              <p className="mb-6">
                “Keren banget aplikasinya, bisa bantu saya untuk menganalisis
                bisnis saya dalam beberapa tahun kedepan, terlebih disediakan
                komoditas yang bagus dan terpercaya!”
              </p>
              <h4 className="font-medium">Mike taylor</h4>
              <p>Malang, Jawa Timur</p>
            </div>
          </div>
        </div>
        <div className="px-6  flex">
          <div className="flex flex-row items-center space-x-4 px-6 py-8 rounded-md shadow bg-white mx-auto">
            <div className="flex-shrink-0">
              <img
                src="/assets/pictures/user-random.jpg"
                className="w-28 h-28 rounded-full"
                alt=""
              />
            </div>
            <div>
              <p className="mb-6">
                “Keren banget aplikasinya, bisa bantu saya untuk menganalisis
                bisnis saya dalam beberapa tahun kedepan, terlebih disediakan
                komoditas yang bagus dan terpercaya!”
              </p>
              <h4 className="font-medium">Mike taylor</h4>
              <p>Malang, Jawa Timur</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ReviewCarousel;
