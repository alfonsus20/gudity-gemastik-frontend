import React from "react";
import Button from "../components/Button";
import Underline from "../components/Underline";
import TextField from "../components/TextField";
import { Link } from "react-router-dom";
import {
  AUTH_CLEAR_ERROR,
  AUTH_FAILED,
} from "../store/constants/userConstants";
import { RootState } from "../store/index";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../store/actions/userActions";
const Register = () => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [nik, setNik] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");

  const { error } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      dispatch({
        type: AUTH_FAILED,
        payload: "Password dan konfirmasi password tidak sesuai",
      });
    } else {
      dispatch(register({ email, password, nik, name }));
    }
  };

  React.useEffect(() => {
    return () => {
      dispatch({ type: AUTH_CLEAR_ERROR });
    };
  }, [dispatch]);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(102.72deg, rgba(0, 0, 0, 0.9) 42.77%, rgba(29, 16, 61, 0.9) 99.02%), url(assets/backgrounds/register.jpg)",
      }}
    >
      <div
        className="px-8 py-14 mx-auto w-100 filter rounded-xl relative mt-0"
        style={{
          boxShadow:
            "inset 0px 4px 18px rgba(154, 146, 210, 0.25), inset 0px 1px 0px rgba(227, 222, 255, 0.2)",
        }}
      >
        <div className="mb-4">
          <h2 className="text-3xl font-medium mb-2 text-white text-center">
            Daftar
          </h2>
          <Underline center width={40} height={2} backgroundColor="#fff" />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
          <TextField
            value={name}
            placeholder="Nama"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="number"
            onChange={(e) => setNik(e.target.value)}
            required
            placeholder="NIK"
            value={nik}
          />
          <TextField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Kata Sandi"
            className="text-white"
          />
          <TextField
            type="password"
            value={confirmPassword}
            rounded={false}
            placeholder="Ulangi Kata Sandi"
            className="text-white"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && (
            <span className="text-red-500 text-sm w-full mb-4 text-center">
              {error}
            </span>
          )}
          <Button
            variant="primary"
            className="mb-4"
            text="Daftar"
            size="full"
          />
        </form>
        <div className="text-sm text-center text-white">
          <span className="mr-2">Sudah punya akun?</span>
          <Link to="/login" className="font-semibold">
            Masuk
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
