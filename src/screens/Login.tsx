import React from "react";
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
        className="px-8 py-14 mx-auto w-100 filter rounded-xl relative"
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
            style={{
              backgroundColor: "transparent",
              borderBottom: "2px solid rgba(256,256,256,0.7)",
              color: "white",
            }}
          />
          <InputField
            type="password"
            value=""
            onChange={() => console.log("object")}
            rounded={false}
            placeholder="Password"
            style={{
              backgroundColor: "transparent",
              borderBottom: "2px solid rgba(256,256,256,0.7)",
              color: "white",
            }}
          />
          <Button
            onClick={() => console.log("object")}
            className="text-white bg-blue-primary mt-2"
          >
            Masuk
          </Button>
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
