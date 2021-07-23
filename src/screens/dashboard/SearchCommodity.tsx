import React from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import { RootState } from "../../store";
import { classifyCommodityWithImage } from "../../store/actions/searchCommodityActions";
import Skeleton from "react-loading-skeleton";

const SearchCommodity = () => {
  const [image, setImage] = React.useState<File>();

  const { getRootProps, getInputProps, open, isDragActive, acceptedFiles } =
    useDropzone({
      accept: "image/jpeg, image/png",
      noClick: true,
      noKeyboard: true,
      maxFiles: 1,
      onDrop: (files) => setImage(files[0]),
    });

  const dispatch = useDispatch();
  const { loading, commodity_name, deskripsi } = useSelector(
    (state: RootState) => state.imageClassification
  );

  return (
    <div>
      <div
        className="px-12 py-8 rounded-md mb-6"
        style={{ backgroundColor: "#F0F4FF" }}
      >
        <h3 className="font-semibold text-2xl mb-2">
          Selamat Datang Bocah Mozaik!
        </h3>
        <p className="text-md text-purple">
          Analisis harga komoditas di masa lampau agar dapat membantu anda dalam
          usaha di masa mendatang
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-x-4 gap-y-8">
        <div className="col-span-1">
          <div
            {...getRootProps({ className: "dropzone" })}
            className="rounded-md shadow flex flex-col items-center p-8 mb-6 justify-center"
            style={{ minHeight: 250 }}
          >
            <input {...getInputProps()} />

            {image ? (
              <img
                src={URL.createObjectURL(image)}
                className="w-72 h-72"
                alt={image.name}
              />
            ) : (
              <>
                <div>
                  <img src="/assets/icons/upload.png" alt="" />
                </div>
                <p className="text-blue-marker font-medium mb-5">
                  {acceptedFiles.length !== 0
                    ? acceptedFiles[0].name
                    : isDragActive
                    ? "Letakkan di sini"
                    : "Unggah gambar kamu disini"}
                </p>
                <button
                  type="button"
                  onClick={open}
                  className="text-white px-8 py-2 rounded-full text-sm"
                  style={{ backgroundColor: "rgba(24, 84, 255, 0.5)" }}
                >
                  Pilih File
                </button>
              </>
            )}
          </div>
          <div className="flex flew-row gap-4 justify-center">
            <Button
              text="Ulang"
              variant="secondary"
              className="w-28"
              onClick={open}
            />
            <Button
              text="Cari"
              variant="primary"
              className="w-28"
              onClick={() => dispatch(classifyCommodityWithImage(image!))}
            />
          </div>
        </div>
        <div className="col-span-1  p-8 shadow">
          <h3 className="font-semibold text-lg mb-2">Hasil:</h3>
          <h4 className="font-semibold text-md mb-2">
            {loading ? <Skeleton style={{ width: "20%" }} /> : commodity_name}
          </h4>
          <div className="mb-5 " style={{ minHeight: 240 }}>
            {loading ? <Skeleton count={4} /> : deskripsi}
          </div>
          <Button
            text="Temukan Peta Komoditas"
            variant="primary"
            className="ml-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchCommodity;
