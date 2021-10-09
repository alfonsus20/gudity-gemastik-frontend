import React from "react";
import Button from "../components/Button";
import ImageGallery from "../components/ImageGallery";
import {
  LocationMarkerIcon,
  ArchiveIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import ProductCard from "../components/product/ProductCard";
import Features from "../components/Features";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { getSupplierDetail } from "../store/actions/supplierActions";
import { getSupplierProducts } from "../store/actions/productActions";
import { FETCH_SUPPLIER_DETAIL_RESET } from "../store/constants/supplierConstants";

const SupplierDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { error, loading, supplier } = useSelector(
    (state: RootState) => state.supplierDetail
  );
  const { products } = useSelector((state: RootState) => state.productList);
  const dispatch = useDispatch();

  const history = useHistory();

  React.useEffect(() => {
    dispatch(getSupplierDetail(id));
    dispatch(getSupplierProducts(id));
  }, [dispatch, id]);

  React.useEffect(() => {
    if (error) {
      history.replace("/not-found");
      return () => {
        dispatch({ type: FETCH_SUPPLIER_DETAIL_RESET });
      };
    }
  }, [error, dispatch, history]);

  return (
    <div>
      <div className="shadow-none sm:shadow max-w-screen-xl mx-auto p-8 mt-32 flex flex-col sm:flex-row">
        {!loading && (
          <ImageGallery
            className="flex-shrink-0"
            images={[{ thumbnail: supplier.thumbnail, id: Number(id) }]}
          />
        )}
        <div className="mt-4 sm:ml-6 flex-auto">
          <h2 className="font-semibold text-3xl mb-2">
            {supplier.username ? supplier.username.name : "-"}
          </h2>
          <p className="mb-2">{supplier.description} </p>
          <div>
            <div className="flex flex-row text-md mb-2">
              <LocationMarkerIcon className="h-6 w-6" />
              <span className="ml-2">{supplier.address}</span>
            </div>
            <div className="flex flex-row text-md mb-2">
              <ArchiveIcon className="h-6 w-6" />
              <span className="ml-2">{supplier.name}</span>
            </div>
            <div className="flex flex-row text-md mb-4">
              <PhoneIcon className="h-6 w-6" />
              <span className="ml-2">{supplier.phone}</span>
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
        <div className="flex flex-row gap-x-4 gap-y-6 mb-10 overflow-auto w-full ">
          {loading ? (
            "Loading..."
          ) : products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                reviews={product.reviews}
                image={product.thumbnail}
                productId={product.id}
              />
            ))
          ) : (
            <h2 className="text-center w-full py-20">Belum ada produk</h2>
          )}
        </div>
      </div>
      <Features />
    </div>
  );
};

export default SupplierDetail;
