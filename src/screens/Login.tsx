import React from "react";
import Button from "../components/Button";
import Underline from "../components/Underline";

const Login = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center"
      style={{
        background:
          "linear-gradient(102.72deg, rgba(0, 0, 0, 0.9) 42.77%, rgba(29, 16, 61, 0.9) 99.02%)",
      }}
    >
      <div
        className="px-8 py-14 mx-auto w-96 filter rounded-xl relative"
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
        <form
          action="
        "
          className="flex flex-col"
        >
          <input
            type="email"
            name=""
            placeholder="Email"
            id=""
            className="border-b-2 outline-none bg-transparent w-full px-1 py-2 text-sm  text-white mb-4"
            style={{ borderColor: "rgba(256,256,256,0.7)" }}
          />
          <input
            type="password"
            name=""
            placeholder="Kata Sandi"
            id=""
            className="border-b-2 outline-none bg-transparent w-full p-2 text-sm text-white mb-8"
            style={{ borderColor: "rgba(256,256,256,0.7)" }}
          />
          <Button onClick={() => console.log("object")} color="#fff">
            Masuk
          </Button>{" "}
          <div className="text-xs flex flex-row justify-between mt-6 text-white">
            <span className="flex flex-row items-center">
              <input
                type="checkbox"
                className="mr-2"
                name=""
                id="remember-me"
              />{" "}
              <label htmlFor="remember-me">Ingat selalu email</label>
            </span>
            <span>Lupa Password?</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
