import React from "react";
import Button from "../components/Button";
import Underline from "../components/Underline";
import TextField from "../components/TextField";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center"
      style={{
        background:
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
          <TextField value="" placeholder="Nama" />
          <TextField
            type="email"
            value=""
            placeholder="Email"
          />
          <TextField
            type="number"
            onChange={() => console.log("object")}
            placeholder="NIK"
          />
          <TextField
            type="password"
            value=""
            onChange={() => console.log("object")}
            placeholder="Kata Sandi"
            className='text-white'
          />
          <TextField
            type="password"
            value=""
            rounded={false}
            placeholder="Ulangi Kata Sandi"
            className='text-white'
          />
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
