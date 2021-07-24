import React from "react";
import Slider from "react-slick";
import Button from "../Button";

const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: 25}}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: 60}}
      onClick={onClick}
    />
  );
};

const CommodityCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className=" max-w-screen-lg mx-auto">
      <Slider {...settings}>
        <div>
          <div className="flex flex-col md:flex-row md:space-x-6 px-4">
            <div className="flex-shrink-0">
              <img
                src="/assets/pictures/kopi.jpg"
                className="w-full md:w-80 h-80 object-cover rounded-md"
                alt="kopi"
              />
            </div>
            <div className="flex items-center">
              <div className="bg-white px-6 md:px-12 py-4 md:py-8 shadow space-y-4">
                <h3 className="font-semibold text-2xl">Komoditas Kopi</h3>
                <p className="text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <Button variant="secondary" text="Selengkapnya" size="sm" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row md:space-x-6 px-4">
            <div className="flex-shrink-0">
              <img
                src="/assets/pictures/gula.jpg"
                className="w-full md:w-80 h-80 object-cover rounded-md"
                alt="gula"
              />
            </div>
            <div className="flex items-center">
              <div className="bg-white px-6 md:px-12 py-4 md:py-8 shadow space-y-4">
                <h3 className="font-semibold text-2xl">Komoditas Gula</h3>
                <p className="text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <Button variant="secondary" text="Selengkapnya" size="sm" />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CommodityCarousel;
