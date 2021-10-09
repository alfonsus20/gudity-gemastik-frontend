import { Dispatch } from "redux";
import baseApi from "../../api/baseApi";
import {
  AddUserProductDispatchTypes,
  ADD_USER_PRODUCT_FAILED,
  ADD_USER_PRODUCT_SUCCESS,
  AuthDispatchTypes,
  AUTH_FAILED,
  AUTH_LOADING,
  AUTH_RESET,
  AUTH_SUCCESS,
  DeleteUserProductDispatchTypes,
  DELETE_USER_PRODUCT_FAILED,
  DELETE_USER_PRODUCT_LOADING,
  DELETE_USER_PRODUCT_SUCCESS,
  EditUserProductDispatchTypes,
  EDIT_USER_PRODUCT_FAILED,
  EDIT_USER_PRODUCT_LOADING,
  EDIT_USER_PRODUCT_SUCCESS,
  FetchUserSupplierProductsDispatchTypes,
  FETCH_USER_SUPPLIER_PRODUCTS_FAILED,
  FETCH_USER_SUPPLIER_PRODUCTS_LOADING,
  FETCH_USER_SUPPLIER_PRODUCTS_SUCCESS,
  UpdateStoreDispatchTypes,
  UpdateSupplierDispatchTypes,
  UpdateUserProfileDispatchTypes,
  UPDATE_STORE_INFO_FAILED,
  UPDATE_STORE_INFO_LOADING,
  UPDATE_STORE_INFO_SUCCESS,
  UPDATE_SUPPLIER_INFO_FAILED,
  UPDATE_SUPPLIER_INFO_LOADING,
  UPDATE_SUPPLIER_INFO_SUCCESS,
  UPDATE_USER_PROFILE_FAILED,
  UPDATE_USER_PROFILE_LOADING,
  UPDATE_USER_PROFILE_SUCCESS,
  USER_INFO_FAILED,
  USER_INFO_LOADING,
  USER_INFO_SUCCESS,
} from "../constants/userConstants";
import axios from "axios";
import onlyGetReq from "../../api/onlyGetReq";
import { RootState } from "..";
import { toast } from "react-toastify";
import { push } from "connected-react-router";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { supabase } from "../../api/supabase";
import { IMAGE_BASE_URL } from "../../utils/constants";

interface LoginState {
  email: string;
  password: string;
}

interface RegisterState extends LoginState {
  nik: string;
  name: string;
}

export const login =
  ({ email, password }: LoginState) =>
  async (dispatch: Dispatch<AuthDispatchTypes>) => {
    try {
      dispatch({ type: AUTH_LOADING });

      const { data } = await baseApi.post("/sign_in", { email, password });

      if (data.data) {
        localStorage.setItem("token", data.data.access_token);
      }
      dispatch({ type: AUTH_SUCCESS });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: AUTH_FAILED,
          payload: error.message,
        });
      }
    }
  };

export const register =
  ({ email, password, nik, name }: RegisterState) =>
  async (dispatch: Dispatch<AuthDispatchTypes>) => {
    try {
      dispatch({ type: AUTH_LOADING });

      await baseApi.post("/sign_up", {
        email,
        password,
        identity_number: nik,
        name,
      });

      const { data } = await baseApi.post("/sign_in", { email, password });

      if (data.data) {
        localStorage.setItem("token", data.data.access_token);
      }
      dispatch({ type: AUTH_SUCCESS });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch({ type: AUTH_FAILED, payload: error.response?.data.message });
      }
    }
  };

export const logout = () => (dispatch: Dispatch<AuthDispatchTypes>) => {
  dispatch({ type: AUTH_RESET });
  localStorage.removeItem("token");
};

export const fetchUserInfo =
  () => async (dispatch: Dispatch<AuthDispatchTypes>) => {
    try {
      dispatch({ type: USER_INFO_LOADING });

      const { data } = await baseApi.get(
        "/u/profile?select=id,name,address,birthday,email,phone,identity_number,thumbnail",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      let userInfo = data.data;

      const { data: dataSupplier } = await onlyGetReq.get(
        `/suppliers?select=id,address,description,name,phone,users(id)&user_id=eq.${userInfo.id}`
      );

      const { data: dataStore } = await onlyGetReq.get(
        `/stores?user_id=eq.${userInfo.id}`
      );

      userInfo = {
        ...userInfo,
        is_supplier: dataSupplier.data.length > 0,
        is_store: dataStore.data.length > 0,
      };

      if (dataSupplier.data.length > 0) {
        userInfo = {
          ...userInfo,
          supplier_info: dataSupplier.data[0],
        };
      }

      if (dataStore.data.length > 0) {
        userInfo = {
          ...userInfo,
          store_info: dataStore.data[0],
        };
      }

      dispatch({ type: USER_INFO_SUCCESS, payload: userInfo });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch({
          type: USER_INFO_FAILED,
          payload: error.response?.data.message,
        });
      }
    }
  };

interface SupplierState {
  name: string;
  address: string;
  phone: string;
  description: string;
}

export const updateSupplierInfo =
  (supplierData: SupplierState, thumbnail?: File) =>
  async (
    dispatch: Dispatch<AuthDispatchTypes | UpdateSupplierDispatchTypes>
  ) => {
    try {
      dispatch({ type: UPDATE_SUPPLIER_INFO_LOADING });

      let body: any = supplierData;

      if (thumbnail) {
        const fileName = uuidv4() + path.extname(thumbnail.name);
        await supabase.storage.from("images").upload(fileName, thumbnail, {
          cacheControl: "3600",
          upsert: false,
        });
        body = {
          ...body,
          thumbnail:
            "https://tmqbylesuwxzdqaxmdlm.supabase.in/storage/v1/object/public/images/" +
            fileName,
        };
      }

      await baseApi.post("/u/claim_supplier", body, {
        headers: { Authorization: localStorage.getItem("token") },
      });

      // @ts-ignore
      dispatch(fetchUserInfo());

      dispatch({ type: UPDATE_SUPPLIER_INFO_SUCCESS });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch({
          type: UPDATE_SUPPLIER_INFO_FAILED,
          payload: error.response?.data.message,
        });
      }
    }
  };

export const updateStoreInfo =
  (storeData: any, thumbnail?: File) =>
  async (dispatch: Dispatch<AuthDispatchTypes | UpdateStoreDispatchTypes>) => {
    try {
      dispatch({ type: UPDATE_STORE_INFO_LOADING });

      let body = storeData;

      if (thumbnail) {
        const fileName = uuidv4() + path.extname(thumbnail.name);
        await supabase.storage.from("images").upload(fileName, thumbnail, {
          cacheControl: "3600",
          upsert: false,
        });
        body = {
          ...body,
          thumbnail:
            "https://tmqbylesuwxzdqaxmdlm.supabase.in/storage/v1/object/public/images/" +
            fileName,
        };
      }

      await baseApi.post("/u/claim_store", body, {
        headers: { Authorization: localStorage.getItem("token") },
      });

      dispatch({ type: UPDATE_STORE_INFO_SUCCESS });

      // @ts-ignore
      dispatch(fetchUserInfo());
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch({
          type: UPDATE_STORE_INFO_FAILED,
          payload: error.response?.data.message,
        });
      }
    }
  };

export const getUserSupplierProducts =
  (supplierId: number) =>
  async (dispatch: Dispatch<FetchUserSupplierProductsDispatchTypes>) => {
    try {
      dispatch({ type: FETCH_USER_SUPPLIER_PRODUCTS_LOADING });

      const { data } = await onlyGetReq.get(
        `/products?supplier_id=eq.${supplierId}&select=id,name,price,quality,description,thumbnail,product_types(id)`
      );

      let structuredData = data.data;

      structuredData = structuredData.map((singleData: any) => {
        let singleStructuredData = singleData;
        singleStructuredData = {
          ...singleStructuredData,
          productType: singleStructuredData.product_types.id,
        };
        delete singleStructuredData.product_types;
        return singleStructuredData;
      });

      dispatch({
        type: FETCH_USER_SUPPLIER_PRODUCTS_SUCCESS,
        payload: structuredData,
      });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: FETCH_USER_SUPPLIER_PRODUCTS_FAILED,
          payload: error.message,
        });
      }
    }
  };

export const deleteUserSupplierProduct =
  (productId: number, thumbnail?: string) =>
  async (
    dispatch: Dispatch<DeleteUserProductDispatchTypes>,
    getState: () => RootState
  ) => {
    try {
      dispatch({ type: DELETE_USER_PRODUCT_LOADING });
      console.log(thumbnail);

      if (thumbnail) {
        console.log(thumbnail);
        console.log([thumbnail.replace(IMAGE_BASE_URL, "")]);
        const { data } = await supabase.storage
          .from("images")
          .remove([thumbnail.replace(IMAGE_BASE_URL, "")]);
        console.log(data);
      }

      await baseApi.delete(`/u/product/${productId}`, {
        headers: { Authorization: localStorage.getItem("token") },
      });

      dispatch({
        type: DELETE_USER_PRODUCT_SUCCESS,
      });

      const { supplier_info } = getState().auth.userInfo;
      // @ts-ignore
      dispatch(getUserSupplierProducts(supplier_info?.id));
      toast.success("Produk Berhasil Dihapus");
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: DELETE_USER_PRODUCT_FAILED,
          payload: error.message,
        });
      }
    }
  };

export const addUserSupplierProduct =
  (newProductData: any, thumbnail?: File) =>
  async (
    dispatch: Dispatch<AddUserProductDispatchTypes>,
    getState: () => RootState
  ) => {
    try {
      let body = newProductData;

      if (thumbnail) {
        const fileName = uuidv4() + path.extname(thumbnail.name);
        await supabase.storage.from("images").upload(fileName, thumbnail, {
          cacheControl: "3600",
          upsert: false,
        });
        body = {
          ...body,
          thumbnail:
            "https://tmqbylesuwxzdqaxmdlm.supabase.in/storage/v1/object/public/images/" +
            fileName,
        };
      }

      await baseApi.post(`/u/product/create`, body, {
        headers: { Authorization: localStorage.getItem("token") },
      });

      dispatch({
        type: ADD_USER_PRODUCT_SUCCESS,
      });

      const { supplier_info } = getState().auth.userInfo;

      // @ts-ignore
      dispatch(getUserSupplierProducts(supplier_info?.id));

      // @ts-ignore
      dispatch(push("/dashboard/produk"));

      toast.success("Produk Berhasil Ditambahkan");
    } catch (error) {
      // @ts-ignore
      console.log(error.response.data.message);
      if (error instanceof Error) {
        dispatch({
          type: ADD_USER_PRODUCT_FAILED,
          payload: error.message,
        });
      }
    }
  };

export const editUserSupplierProduct =
  (newProductData: any, productId: number) =>
  async (
    dispatch: Dispatch<EditUserProductDispatchTypes>,
    getState: () => RootState
  ) => {
    try {
      dispatch({ type: EDIT_USER_PRODUCT_LOADING });

      await baseApi.patch(`/u/product/${productId}`, newProductData, {
        headers: { Authorization: localStorage.getItem("token") },
      });

      dispatch({
        type: EDIT_USER_PRODUCT_SUCCESS,
      });

      const { supplier_info } = getState().auth.userInfo;

      toast.success("Produk Berhasil Diubah");
      
      // @ts-ignore
      dispatch(getUserSupplierProducts(supplier_info?.id));

      // @ts-ignore
      dispatch(push("/dashboard/produk"));
    } catch (error) {
      // @ts-ignore
      console.log(error.response.data.message);
      if (error instanceof Error) {
        dispatch({
          type: EDIT_USER_PRODUCT_FAILED,
          payload: error.message,
        });
      }
    }
  };

export const updateUserProfile =
  (body: any) =>
  async (
    dispatch: Dispatch<UpdateUserProfileDispatchTypes>,
    getState: () => RootState
  ) => {
    try {
      dispatch({ type: UPDATE_USER_PROFILE_LOADING });

      const { userInfo } = getState().auth;

      const fileName = uuidv4() + path.extname(body.thumbnail);

      await supabase.storage.from("images").upload(fileName, body.thumbnail, {
        cacheControl: "3600",
        upsert: false,
      });

      let data: any = {
        name: body.name,
        address: body.address,
        phone: body.phone,
        birthday: body.birthday,
      };

      if (body.thumbnail) {
        data.thumbnail = IMAGE_BASE_URL + fileName;
      }

      await supabase.from("users").update(data).match({ id: userInfo.id });

      dispatch({
        type: UPDATE_USER_PROFILE_SUCCESS,
      });

      // @ts-ignore
      toast.success("Profil Berhasil Diperbarui");

      // @ts-ignore
      dispatch(fetchUserInfo());

      let destination = localStorage.getItem("destination_path");

      if (destination) {
        // @ts-ignore
        dispatch(push(destination));
      }
    } catch (error) {
      // @ts-ignore
      console.log(error.response.data.message);
      if (error instanceof Error) {
        dispatch({
          type: UPDATE_USER_PROFILE_FAILED,
          payload: error.message,
        });
      }
    }
  };
