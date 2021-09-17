import { Dispatch } from "redux";
import onlyGetReq from "../../api/onlyGetReq";
import {
  FetchPaymentDetailDispatchTypes,
  FETCH_PAYMENT_DETAIL_FAILED,
  FETCH_PAYMENT_DETAIL_LOADING,
  FETCH_PAYMENT_DETAIL_SUCCESS,
} from "../constants/paymentConstants";
import { PaymentState } from "../reducers/paymentReducers";

export const getPaymentDetail =
  (code: string) =>
  async (dispatch: Dispatch<FetchPaymentDetailDispatchTypes>) => {
    try {
      dispatch({ type: FETCH_PAYMENT_DETAIL_LOADING });

      const { data } = await onlyGetReq.get(
        `/invoices?select=id,code,created_at,banks(name),expeditions(name),invoice_statuses(name),invoice_products(quantity,products(id,name,price,quality,thumbnail,suppliers(name,address)))&code=eq.${code}`
      );

      let paymentData: any = data.data[0];

      let supplierName = "",
        supplierAddress = "",
        totalPrice = 0;

      let productStructured = paymentData.invoice_products.map(
        (product: any) => {
          supplierName = product.products.suppliers.name;
          supplierAddress = product.products.suppliers.address;
          totalPrice += product.products.price * product.quantity;
          return { ...product.products, quantity: product.quantity };
        }
      );

      let structured: PaymentState = {
        id: paymentData.id,
        bankName: paymentData.banks.name,
        code: paymentData.code,
        date: paymentData.created_at,
        expedition: paymentData.expeditions.name,
        products: productStructured,
        paymentStatus: paymentData.invoice_statuses.name,
        supplierName,
        supplierAddress,
        totalPrice,
      };

      dispatch({ type: FETCH_PAYMENT_DETAIL_SUCCESS, payload: structured });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({ type: FETCH_PAYMENT_DETAIL_FAILED, payload: error.message });
      }
    }
  };
