import { Dispatch } from "redux";
import baseApi from "../../api/baseApi";
import {
  AuthDispatchTypes,
  AUTH_FAILED,
  AUTH_LOADING,
  AUTH_RESET,
  AUTH_SUCCESS,
  UpdateSupplierDispatchTypes,
  UPDATE_SUPPLIER_INFO_FAILED,
  UPDATE_SUPPLIER_INFO_LOADING,
  UPDATE_SUPPLIER_INFO_SUCCESS,
  USER_INFO_FAILED,
  USER_INFO_LOADING,
  USER_INFO_SUCCESS,
} from "../constants/userConstants";

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
        localStorage.setItem("token", data.data);
      }
      dispatch({ type: AUTH_SUCCESS });
    } catch (error) {
      dispatch({
        type: AUTH_FAILED,
        payload: error.message,
      });
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
        nik,
        name,
      });

      const { data } = await baseApi.post("/sign_in", { email, password });

      if (data.data) {
        localStorage.setItem("token", data.data);
      }
      dispatch({ type: AUTH_SUCCESS });
    } catch (error) {
      console.log(error);
      dispatch({ type: AUTH_FAILED, payload: error.message });
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

      const { data } = await baseApi.get("/user/profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      dispatch({ type: USER_INFO_SUCCESS, payload: data.data });
    } catch (error) {
      dispatch({ type: USER_INFO_FAILED, payload: error.message });
    }
  };

interface SupplierState {
  supplier_profile_image: File;
  supplier_owner_name: string;
  supplier_address: string;
  supplier_name: string;
  supplier_phone: string;
  supplier_description: string;
}

export const updateSupplierInfo =
  (supplierData: SupplierState) =>
  async (
    dispatch: Dispatch<AuthDispatchTypes | UpdateSupplierDispatchTypes>
  ) => {
    try {
      dispatch({ type: UPDATE_SUPPLIER_INFO_LOADING });

      const formData = new FormData();

      Object.keys(supplierData).forEach((key) => {
        formData.append(key, supplierData[key as keyof SupplierState]);
      });

      await baseApi.put("/user/suppliers/claim", formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      dispatch({ type: UPDATE_SUPPLIER_INFO_SUCCESS });

      // @ts-ignore
      dispatch(fetchUserInfo());
    } catch (error) {
      // console.log(error.response.data.message);
      dispatch({ type: UPDATE_SUPPLIER_INFO_FAILED, payload: error.message });
    }
  };
