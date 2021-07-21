import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import TextField from "../components/TextField";
import Underline from "../components/Underline";
import { login } from "../store/actions/userActions";
import { AUTH_CLEAR_ERROR } from "../store/constants/userConstants";
import { RootState } from "../store/index";

const Login = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const { error } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  React.useEffect(() => {
    return () => {
      dispatch({ type: AUTH_CLEAR_ERROR });
    };
  },[dispatch]);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage:
          "linear-gradient(102.72deg, rgba(0, 0, 0, 0.9) 42.77%, rgba(29, 16, 61, 0.9) 99.02%), url('assets/backgrounds/login.jpg')",
      }}
    >
      <div
        className="px-8 py-14 mx-auto w-100 filter rounded-xl relative mt-0"
        style={{
          boxShadow:
            "inset 0px 4px 18px rgba(154, 146, 210, 0.25), inset 0px 1px 0px rgba(227, 222, 255, 0.2)",
        }}
      >
        <div className="mb-8">
          <h2 className="text-3xl font-medium mb-2 text-white text-center">
            Masuk
          </h2>
          <Underline center width={40} height={2} backgroundColor="#fff" />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col mb-4">
          <TextField
            type="email"
            value={email}
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="text-white mb-4"
          />
          <TextField
            type="password"
            value={password}
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="text-white mb-4"
          />
          {error && (
            <span className="text-red-500 text-sm w-full mb-4 text-center">
              {error}
            </span>
          )}
          <Button text="Masuk" variant="primary" size="full" type="submit" />
        </form>
        <div className="text-sm text-center text-white">
          <span className="mr-2">Belum punya akun?</span>
          <Link to="/daftar" className="font-semibold">
            Daftar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
