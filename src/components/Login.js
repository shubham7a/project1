import React from "react";

const Login = () => {
  return (
    <div className="flex  w-[1200px] h-[1024px] top-[-1100px] left-[-720px]">
      {/* left side */}
      <div className="relative flex">
        <img src="./images/img4.png" className="w-[700px] h-[1024px] " />

        <div className="w-[270px] h-[385px] top-[236px] left-[200px] absolute bottom-96 ">
          <img
            src="./images/img6.png"
            className="w-[270px] h-[322px] top-[236px] left-[200px]"
          />
          <img
            src="./images/img5.png"
            className="w-[270px] h-[63px] top-[558px] left-[200px]"
          />
        </div>

        <div className=" w-[342px] h-[48px] top-[675px] left-[200px] absolute flex">
          <h1 className="text-3xl font-semibold leading-10 tracking-normal  text-left text-white">
            Feel <span className="text-green">Safe</span> Everywhere
          </h1>
        </div>

        <div className=" w-[167px] h-[36px] top-[750px] left-[260px] absolute flex">
          <h1 className="text-xl font-medium leading-9 tracking-normal text-left text-white">
            #Safe-<span className="text-green">T</span>-Fast
          </h1>
        </div>
      </div>

      {/* Right Side */}

      <div className="flex relative">
        <div className="absolute   top-[73px] left-32">
          <img src="./images/img2.png" className=" w-24 h-24 top-2" />
        </div>
        <div className="flex  w-60 h-11 top-[90px]  left-[100px] relative ">
          <div className="w-32 h-11  top-3  left-64 absolute">
            <h1 className="font-semibold text-3xl leading-10 text-silver">
              Sign Up/
            </h1>
          </div>
          <div className="w-24 h-11 top-3 left-96 absolute">
            <h1 className="font-medium text-3xl leading-10  text-purple">
              Login
            </h1>
          </div>
        </div>

        {/* input field */}
      </div>

      <div className="w-[514px] h-[600px] top-[245px] left-[900px] rounded-3xl shadow-2xl absolute">
        <h1 className="w-[274px] h-[36px] top-[34px] left-[135px] font-medium text-2xl absolute">
          Welcome to Sciu-aura
        </h1>
        <p className="w-[411px] h-[21px] top-[80px] left-[55px] font-normal text-sm text-center absolute">
          Your one stop safety solutions using innovative technology
        </p>
        <input
          type="text"
          placeholder="Hospital Name"
          className="w-[334px] h-[32px] top-[160px] left-[105px] border-b-2 text-xl placeholder-black font-medium text-black absolute"
        />
        <input
          type="email"
          placeholder="Email ID"
          className="w-[334px] h-[32px] top-[260px] left-[105px] border-b-2 text-xl  font-medium text-gray absolute"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-[334px] h-[32px] top-[360px] left-[105px] border-b-2 text-xl  font-medium text-gray absolute"
        />
        <input
          type="text"
          placeholder="Special Access Code"
          className="w-[334px] h-[32px] top-[460px] left-[105px] border-b-2 text-xl  font-medium text-gray absolute"
        />
      </div>

      <button
        type="submit"
        className=" font-semibold  text-lg text-white  w-[160px] h-[50px] bg-purple rounded-2xl absolute left-[1100px] top-[955px]"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
