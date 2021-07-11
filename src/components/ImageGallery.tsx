import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

export type Image = {
  name: string;
  id: string;
};

type ImageGalleryProps = {
  images: Image[];
  className ?: string;
};

const ImageGallery = ({ images, className }: ImageGalleryProps) => {
  const [highlightedImage, setHighlightedImage] = React.useState<Image>(
    images[0]
  );
  const [startIndex, setStartIndex] = React.useState<number>(0);
  const [endIndex, setEndIndex] = React.useState<number>(3);

  return (
    <div className={`max-w-full sm:max-w-md ${className}`}>
      <div className="mb-4">
        <img
          src={`/assets/pictures/${highlightedImage.name}`}
          alt={highlightedImage.name}
          className="rounded-md sm:w-112 sm:h-72 object-cover"
        />
      </div>
      <div className="relative">
        <button
          className={`bg-black bg-opacity-70 hover:bg-opacity-90 ${
            (images.length <= 4 || startIndex === 0) && "hidden"
          } absolute top-1/2 left-0 transform -translate-y-1/2`}
          onClick={() => {
            if (startIndex > 0) {
              setStartIndex((prevState) => prevState - 1);
              setEndIndex((prevState) => prevState - 1);
            }
          }}
        >
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </button>
        <div className="grid grid-cols-4 gap-x-2" >
          {images.slice(startIndex, endIndex + 1).map((image) => (
            <img
              src={`/assets/pictures/${image.name}`}
              className="w-60 h-24 object-cover rounded-md cursor-pointer"
              alt={highlightedImage.name}
              key={image.id}
              onClick={() => setHighlightedImage(image)}
            />
          ))}
        </div>
        <button
          className={`bg-black bg-opacity-70 hover:bg-opacity-90  ${
            (images.length <= 4 || endIndex === images.length - 1) && "hidden"
          } absolute top-1/2 right-0 transform -translate-y-1/2`}
          onClick={() => {
            if (endIndex < images.length) {
              setStartIndex((prevState) => prevState + 1);
              setEndIndex((prevState) => prevState + 1);
            }
          }}
        >
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
