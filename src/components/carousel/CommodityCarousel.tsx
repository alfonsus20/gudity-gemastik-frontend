import React from "react";
import Slider from "react-slick";
import Button from "../Button";

const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: 25 }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: 60 }}
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
                <h3 className="font-semibold text-2xl">Supplier Suka Maju</h3>
                <p className="text-sm">
                  Komoditas suka maju merupakan pemasok komoditas segala jenis
                  kopi yang berdomisil di Malang, Jawa Timur. Kami menyediakan
                  berbagai macam kopi dengan kualitas premium dan harga yang
                  terjangkau.
                </p>
                <Button variant="secondary" text="Selengkapnya" size="sm" pathName='suppliers' />
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
                <h3 className="font-semibold text-2xl">Supplier Alam Sutra</h3>
                <p className="text-sm">
                  Komoditas alam sutra merupakan salah satu pemasok gula terbaik
                  yang ada di provinsi Sulawesi Tenggara. Dengan menyediakan
                  gula kualitas super yang dapat dipesan dengan berbagai macam
                  jumlah.
                </p>
                <Button variant="secondary" text="Selengkapnya" size="sm" pathName='suppliers' />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CommodityCarousel;
