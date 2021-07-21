import { Dispatch } from "redux";
import baseApi from "../../api/baseApi";
import {
  AuthDispatchTypes,
  AUTH_FAILED,
  AUTH_LOADING,
  AUTH_RESET,
  AUTH_SUCCESS,
} from "../constants/userConstants";

interface LoginState {
  email: string;
  password: string;
}

interface RegisterState extends LoginState {
  nik: string;
  name: string;
  address: string;
}

export const login =
  ({ email, password }: LoginState) =>
  async (dispatch: Dispatch<AuthDispatchTypes>) => {
    try {
      dispatch({ type: AUTH_LOADING });

      const { data } = await baseApi.post("/sign_in", { email, password });

      dispatch({ type: AUTH_SUCCESS });
      if (data.data) {
        localStorage.setItem("token", data.data);
      }
    } catch (error) {
      dispatch({
        type: AUTH_FAILED,
        payload: error.message,
      });
    }
  };

export const register =
  ({ email, password, nik, name, address }: RegisterState) =>
  async (dispatch: Dispatch<AuthDispatchTypes>) => {
    try {
      dispatch({ type: AUTH_LOADING });

      await baseApi.post("/sign_up", {
        email,
        password,
        nik,
        name,
        address,
      });

      dispatch({ type: AUTH_SUCCESS });
      dispatch({ type: AUTH_RESET });
      await login({ email, password });
    } catch (error) {
      console.log(error);
      dispatch({ type: AUTH_FAILED, payload: error.message });
    }
  };

export const logout = () => (dispatch: Dispatch<AuthDispatchTypes>) => {
  dispatch({ type: AUTH_RESET });
  localStorage.removeItem("token");
};
