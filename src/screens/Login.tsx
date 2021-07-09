import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";
import Underline from "../components/Underline";

const Login = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

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
        <form onSubmit={handleSubmit} className="flex flex-col">
          <InputField
            type="text"
            value=""
            onChange={() => console.log("object")}
            rounded={false}
            placeholder="Email"
            className="text-white mb-4"
            style={{
              borderBottom: "2px solid rgba(256,256,256,0.7)",
            }}
          />
          <InputField
            type="password"
            value=""
            onChange={() => console.log("object")}
            rounded={false}
            placeholder="Password"
            className="text-white mb-4"
            style={{
              borderBottom: "2px solid rgba(256,256,256,0.7)",
            }}
          />
          <Button
            onClick={() => console.log("object")}
            className="text-white bg-blue-primary mt-2 mb-4"
          >
            Masuk
          </Button>
        </form>
        <div className="text-sm text-center text-white">
          <span className='mr-2'>Belum punya akun?</span>
          <Link to="/daftar" className="font-semibold">
            Daftar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
