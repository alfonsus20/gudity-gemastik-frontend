import { Dispatch } from "redux";
import onlyGetReq from "../../api/onlyGetReq";
import {
  FetchProductDetailDispatchTypes,
  FetchSupplierProductsDispatchTypes,
  FETCH_PRODUCT_DETAIL_FAILED,
  FETCH_PRODUCT_DETAIL_LOADING,
  FETCH_PRODUCT_DETAIL_SUCCESS,
  FETCH_SUPPLIER_PRODUCTS_FAILED,
  FETCH_SUPPLIER_PRODUCTS_LOADING,
  FETCH_SUPPLIER_PRODUCTS_SUCCESS,
} from "../constants/productConstants";

export const getSupplierProducts =
  (supplierId: string) =>
  async (dispatch: Dispatch<FetchSupplierProductsDispatchTypes>) => {
    try {
      dispatch({ type: FETCH_SUPPLIER_PRODUCTS_LOADING });

      const { data } = await onlyGetReq.get(
        `/products?supplier_id=eq.${supplierId}&select=id,name,price,thumbnail,product_types(name),invoice_products(invoice_product_reviews(star))`
      );

      let products = data.data;

      let structured = products.map((product: any) => {
        let temp = {
          ...product,
          type: product.product_types.name,
          reviews:
            product.invoice_products.length > 0
              ? product.invoice_products[0].invoice_product_reviews
              : [],
        };
        delete temp.product_types;
        delete temp.invoice_products;
        return temp;
      });

      dispatch({ type: FETCH_SUPPLIER_PRODUCTS_SUCCESS, payload: structured });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: FETCH_SUPPLIER_PRODUCTS_FAILED,
          payload: error.message,
        });
      }
    }
  };

export const getProductDetail =
  (productId: string) =>
  async (dispatch: Dispatch<FetchProductDetailDispatchTypes>) => {
    try {
      dispatch({ type: FETCH_PRODUCT_DETAIL_LOADING });

      const { data } = await onlyGetReq.get(
        `/products?id=eq.${productId}&select=id,name,price,quality,description,thumbnail,invoice_products(invoice_product_reviews(id,star,review),invoices(id,users(name))),suppliers(address)`
      );

      if (data.data.length > 0) {
        let product = data.data[0];

        let reviews = product.invoice_products;

        let reviewsStructured: any = [];

        reviews.forEach((review: any) => {
          if (review.invoice_product_reviews.length > 0) {
            let reviewStructured = {
              userName: review.invoices.users.name,
              review: review.invoice_product_reviews[0].review,
              star: review.invoice_product_reviews[0].star,
            };
            reviewsStructured.push(reviewStructured);
          }
        });
        let productStructured = {
          ...product,
          address: product.suppliers.address,
          reviews: reviewsStructured,
        };

        delete productStructured.product_types;
        delete productStructured.invoice_products;

        dispatch({
          type: FETCH_PRODUCT_DETAIL_SUCCESS,
          payload: productStructured,
        });
      } else {
        throw new Error("tidak ditemukan");
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: FETCH_PRODUCT_DETAIL_FAILED,
          payload: error.message,
        });
      }
    }
  };
