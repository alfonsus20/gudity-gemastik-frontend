import React from "react";
import Button from "../components/Button";
import ImageGallery from "../components/ImageGallery";
import {
  LocationMarkerIcon,
  ArchiveIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import Dropdown from "../components/Dropdown";
import ProductCard from "../components/product/ProductCard";
import Features from "../components/Features";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { getSupplierDetail } from "../store/actions/supplierActions";
import { getSupplierProducts } from "../store/actions/productActions";

const SupplierDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, supplier } = useSelector(
    (state: RootState) => state.supplierDetail
  );
  const { products } = useSelector((state: RootState) => state.productList);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getSupplierDetail(id));
    dispatch(getSupplierProducts(id));
  }, [dispatch, id]);

  return (
    <div>
      <div className="shadow-none sm:shadow max-w-screen-xl mx-auto p-8 mt-32 flex flex-col sm:flex-row">
        <ImageGallery
          className="flex-shrink-0"
          images={[{ name: "kopi.jpg", id: "1" }]}
        />
        <div className="mt-4 sm:ml-6 flex-auto">
          <h2 className="font-semibold text-3xl mb-2">
            {supplier.supplier_owner_name}
          </h2>
          <p className="mb-2">{supplier.supplier_description} </p>
          <div>
            <div className="flex flex-row text-md mb-2">
              <LocationMarkerIcon className="h-6 w-6" />
              <span className="ml-2">{supplier.supplier_address}</span>
            </div>
            <div className="flex flex-row text-md mb-2">
              <ArchiveIcon className="h-6 w-6" />
              <span className="ml-2">{supplier.supplier_store_name}</span>
            </div>
            <div className="flex flex-row text-md mb-4">
              <PhoneIcon className="h-6 w-6" />
              <span className="ml-2">{supplier.supplier_phone}</span>
            </div>
          </div>
          <Button
            variant="secondary"
            className="text-sm"
            size="md"
            text="Chat Sekarang"
          />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto py-20 px-8">
        <h2 className="text-4xl font-semibold mb-4">Produk</h2>
        <Dropdown
          options={[]}
          className="w-60 mb-6 border-2 border-violet rounded-md px-2"
          placeholder="Saring Menurut"
        />
        <div className="flex flex-row gap-x-4 gap-y-6 mb-10 overflow-auto w-full ">
          {loading
            ? "Loading..."
            : products.map((product) => (
                <ProductCard
                  key={product.product_id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  rating={product.star}
                  reviewCount={product.review_count}
                  image="biji-kopi.jpg"
                  supplierId={id}
                  productId={product.product_id.toString()}
                />
              ))}
        </div>
        <div className="flex justify-center">
          <Button variant="tertiary" text="Lihat Lebih Banyak" size="lg" />
        </div>
      </div>
      <Features />
    </div>
  );
};

export default SupplierDetail;
