import React from "react";
import Button from "../components/Button";
import ImageGallery from "../components/ImageGallery";
import {
  HeartIcon as HeartOutline,
  SwitchVerticalIcon,
  FilterIcon,
} from "@heroicons/react/outline";
import { ShareIcon } from "@heroicons/react/solid";
import Dropdown from "../components/Dropdown";
import ProductCard from "../components/product/ProductCard";
import TextField from "../components/TextField";
import Rating from "../components/product/Rating";
import RatingCollection from "../components/product/RatingCollection";
import Review from "../components/Review";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../store/actions/productActions";
import { useHistory, useParams } from "react-router-dom";
import { RootState } from "../store";
import { getSupplierDetail } from "../store/actions/supplierActions";
import { addToCart } from "../store/actions/cartActions";

const Product = () => {
  const [quantity, setQuantity] = React.useState<number>(1);
  const { supplierId, productId } =
    useParams<{ supplierId: string; productId: string }>();

  const history = useHistory();

  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { product } = useSelector((state: RootState) => state.productDetail);
  const { supplier } = useSelector((state: RootState) => state.supplierDetail);
  const { successAddToCart } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProductDetail(supplierId, productId));
    dispatch(getSupplierDetail(supplierId));
    if (successAddToCart) {
      history.push("/keranjang");
    }
  }, [dispatch, supplierId, productId, successAddToCart, history]);

  return (
    <div>
      <div className="shadow-none sm:shadow max-w-screen-xl mx-auto px-8 py-12 mt-20 sm:mt-32 sm:mb-8">
        <div className="flex flex-col sm:flex-row mb-8">
          <ImageGallery
            className="flex-shrink-0"
            images={[
              { name: "kopi-produk.jpg", id: "1" },
              { name: "kopi.jpg", id: "2" },
              { name: "arabika.jpg", id: "3" }
            ]}
          />
          <div className="mt-4 sm:ml-6 flex-auto">
            <h2 className="font-semibold text-3xl mb-6 text-blue-marker">
              {product.name}
            </h2>
            <h2 className="font-semibold text-3xl mb-2 text-black">
              Rp {product.price}/ kg
            </h2>
            <div className="flex flex-row justify-between">
              <div className="mb-4">
                <Rating showRate rating={product.star || 0} />
                <p className="text-sm">{product.review_count} review</p>
              </div>
              <div className="flex flex-row">
                <ShareIcon className="w-8 h-8 mr-2" />
                <HeartOutline className="w-8 h-8" />
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
                  <div className="flex flex-row">
                    <div className="mr-4">
                      <img src="/assets/icons/delivery-blue.svg" alt="" />
                    </div>
                    <div className="flex flex-col flex-auto">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center">
                        <span className="w-36">Pengiriman ke</span>
                        <Dropdown options={[]} className="w-40 text-sm" />
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center">
                        <span className="w-36">Biaya Kirim</span>
                        <Dropdown options={[]} className="w-40 text-sm" />
                      </div>
                    </div>
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
                    type="text"
                    rounded
                    textCenter
                    variant="tertiary"
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
                    history.push("/login");
                  } else {
                    dispatch(addToCart(productId, quantity));
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
                  <td className="pb-2">{supplier.supplier_address}</td>
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
        <RatingCollection
          ratings={[
            { rating: 5, reviewersNumber: product.product_five_star },
            { rating: 4, reviewersNumber: product.product_four_star },
            { rating: 3, reviewersNumber: product.product_three_star },
            { rating: 2, reviewersNumber: product.product_two_star },
            { rating: 1, reviewersNumber: product.product_total_one_star },
          ]}
          average={product.star || 0}
          count={product.review_count}
        />
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
          <Review
            reviewerName="Bocah Mozaik"
            review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            images={[
              { name: "kopi-produk.jpg", id: "1" },
              { name: "kopi-produk.jpg", id: "2" },
            ]}
            rating={4}
          />
          <Review
            reviewerName="Bocah Mozaik"
            review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            images={[
              { name: "kopi-produk.jpg", id: "1" },
              { name: "kopi-produk.jpg", id: "2" },
            ]}
            rating={4}
          />
          <Review
            reviewerName="Bocah Mozaik"
            review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            images={[
              { name: "kopi-produk.jpg", id: "1" },
              { name: "kopi-produk.jpg", id: "2" },
            ]}
            rating={4}
          />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto py-8 my-12 px-8 w-full overflow-x-auto flex flex-row gap-4">
        {[...Array(10)].map((_, i) => (
          <ProductCard
            key={i}
            name="Biji Kopi Arabika"
            description="Vintage Typewriter to post awesome stories about UI design and webdev."
            price={3.725}
            rating={4.05}
            reviewCount={5}
            image="biji-kopi.jpg"
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
