import React from "react";
import Button from "../components/Button";
import ImageGallery from "../components/ImageGallery";
import { SwitchVerticalIcon, FilterIcon } from "@heroicons/react/outline";
import Dropdown from "../components/Dropdown";
import TextField from "../components/TextField";
import Rating from "../components/product/Rating";
import RatingCollection from "../components/product/RatingCollection";
import Review from "../components/Review";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../store/actions/productActions";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { RootState } from "../store";
import { getSupplierDetail } from "../store/actions/supplierActions";
import { addToCart } from "../store/actions/cartActions";
import { countRatingAverage } from "../utils/helpers";
import { ADD_TO_CART_RESET } from "../store/constants/cartConstants";
import { ToastContainer } from "react-toastify";

const Product = () => {
  const [quantity, setQuantity] = React.useState<number>(1);
  const { supplierId, productId } =
    useParams<{ supplierId: string; productId: string }>();
  const { pathname } = useLocation();
  const history = useHistory();

  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { product, loading } = useSelector(
    (state: RootState) => state.productDetail
  );
  const { supplier } = useSelector((state: RootState) => state.supplierDetail);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProductDetail(supplierId, productId));
    dispatch(getSupplierDetail(supplierId));
  }, [dispatch, supplierId, productId, history]);

  React.useEffect(() => {
    localStorage.removeItem("destination_path");
    return () => {
      dispatch({ type: ADD_TO_CART_RESET });
    };
  }, []);

  const countReviewStar = () => {
    const starVoters = [0, 0, 0, 0, 0];

    if (product.reviews.length > 0) {
      product.reviews.forEach((voter) => {
        starVoters[voter.star - 1]++;
      });
    }

    return starVoters.map((voterNumber, index) => ({
      rating: index + 1,
      reviewersNumber: voterNumber,
    }));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNaN(parseFloat(e.target.value))) {
      setQuantity(Number(e.target.value));
    }
  };

  return (
    <div>
      <div className="shadow-none sm:shadow max-w-screen-xl mx-auto px-8 py-12 mt-20 sm:mt-32 sm:mb-8">
        <div className="flex flex-col sm:flex-row mb-8">
          {product.thumbnail && (
            <ImageGallery
              className="flex-shrink-0"
              images={[{ id: 1, thumbnail: product.thumbnail }]}
            />
          )}
          <div className="mt-4 sm:ml-6 flex-auto">
            <h2 className="font-semibold text-3xl mb-6 text-blue-marker">
              {product.name}
            </h2>
            <h2 className="font-semibold text-3xl mb-2 text-black">
              Rp {product.price}/ kg
            </h2>
            <div className="flex flex-row justify-between">
              <div className="mb-4">
                {loading || !product.reviews ? (
                  "Loading..."
                ) : (
                  <>
                    <Rating
                      showRate
                      rating={countRatingAverage(product.reviews)}
                    />
                    <p className="text-sm">{product.reviews.length} review</p>
                  </>
                )}
              </div>
            </div>
            <div className="mb-2">
              <div className="flex flex-row mb-3">
                <label className="w-32 flex-shrink-0">Pengiriman</label>
                <div className="flex-auto">
                  <div className="flex flex-row mb-4 items-center">
                    <div className="mr-4">
                      <img src="/assets/icons/delivery-black.svg" alt="" />
                    </div>
                    <span className="flex-auto">Gratis Biaya Kirim</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row mb-3">
                <label className="w-32 flex-shrink-0">Satuan</label>
                <p>Kilogram</p>
              </div>
              <div className="flex flex-row mb-3 items-center">
                <label className="w-32 flex-shrink-0">Kuantitas</label>
                <div className="flex flex-row w-40 mr-4 items-center">
                  <Button
                    className="px-4"
                    variant="plain"
                    onClick={() =>
                      setQuantity((prevQuantity) => prevQuantity - 1)
                    }
                    disabled={quantity <= 0}
                    text="-"
                  />
                  <TextField
                    value={quantity}
                    type="number"
                    rounded
                    textCenter
                    variant="tertiary"
                    onChange={handleQuantityChange}
                  />
                  <Button
                    className="px-4"
                    variant="plain"
                    onClick={() =>
                      setQuantity((prevQuantity) => prevQuantity + 1)
                    }
                    text="+"
                  />
                </div>
                <span className="text-green-500 text-sm">Tersedia</span>
              </div>
            </div>
            <div className="flex flex-row">
              <Button
                className="text-blue-primary border-2 border-blue-primary text-sm mr-4"
                text="Lihat Keranjang"
                variant="secondary"
                pathName="keranjang"
              />
              <Button
                className="text-white border-2 border-blue-primary bg-blue-primary text-sm "
                text="Masukkan Keranjang"
                size="md"
                variant="primary"
                onClick={() => {
                  if (!isAuthenticated) {
                    localStorage.setItem("destination_path", pathname);
                    history.push("/login");
                  } else {
                    dispatch(addToCart(Number(productId), quantity));
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <h3 className="font-medium text-2xl mb-2">Spesifikasi Produk</h3>
            <table>
              <tbody>
                <tr>
                  <td className="pr-4 pb-2 text-gray-500">Nama</td>
                  <td className="pb-2"> {product.name}</td>
                </tr>
                <tr>
                  <td className="pr-4 pb-2 text-gray-500">Kualitas</td>
                  <td className="pb-2"> {product.quality}</td>
                </tr>
                <tr>
                  <td className="pr-4 pb-2 text-gray-500">Dikirim dari</td>
                  <td className="pb-2">{supplier.address}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="font-medium text-2xl mb-2">Deskripsi Produk</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto pt-4 pb-12 sm:py-20 px-8 shadow">
        {loading || !product.reviews ? (
          "Loading..."
        ) : (
          <RatingCollection
            ratings={countReviewStar().reverse()}
            average={countRatingAverage(product.reviews)}
            count={product.reviews.length}
          />
        )}
        <div className="flex flex-col xs:flex-row justify-between mt-8">
          <h3 className="font-medium text-2xl mb-2">Ulasan Produk</h3>
          <div className="flex flex-row gap-2 mb-4">
            <Dropdown
              options={[]}
              className="w-48 text-xs"
              icon={<SwitchVerticalIcon className="w-6 h-6 text-gray-500 " />}
              placeholder="Urutkan : Produk"
            />
            <Dropdown
              options={[]}
              className="w-48 text-xs"
              icon={<FilterIcon className="w-6 h-6 text-gray-500" />}
              placeholder="Saring : Semua bintang"
            />
          </div>
        </div>
        <div>
          {loading || !product.reviews ? (
            "Loading..."
          ) : product.reviews.length === 0 ? (
            <h2>Belum ada review</h2>
          ) : (
            product.reviews.map((review) => (
              <Review
                reviewerName={review.userName!}
                review={review.review}
                rating={review.star}
              />
            ))
          )}
        </div>
      </div>
      <ToastContainer autoClose={2000} position="bottom-right" />
    </div>
  );
};

export default Product;
