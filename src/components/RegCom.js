import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RegCom = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  });

  return (
    <div>
      <div className="flex  w-[1200px] h-[1024px] top-[-1100px] left-[-720px]  opacity-20 overflow-hidden ">
        {/* left side */}

        <div className="relative ">
          <img src="./images/img4.png" className="w-[600px] h-[1024px] " />

          <div className="w-[270px] h-[385px] top-[236px] left-[136px] absolute bottom-96 ">
            <img
              src="./images/img6.png"
              className="w-[270px] h-[322px] top-[236px] left-[136px]"
            />
            <img
              src="./images/img5.png"
              className="w-[270px] h-[63px] top-[558px] left-[136px]"
            />
          </div>

          <div className=" w-[342px] h-[48px] top-[675px] left-[130px] absolute ">
            <h1 className="text-3xl font-semibold leading-10 tracking-normal  text-left text-white">
              Feel <span className="text-green">Safe</span> Everywhere
            </h1>
          </div>

          <div className=" w-[167px] h-[36px] top-[753px] left-[200px] absolute ">
            <h1 className="text-xl font-medium leading-9 tracking-normal text-left text-white">
              #Safe-<span className="text-green">T</span>-Fast
            </h1>
          </div>
        </div>

        {/* right side */}

        <div className="flex relative">
          <div className="absolute   top-[73px] left-32">
            <img src="./images/img2.png" className=" w-24 h-24 top-2" />
          </div>
          <div className="flex  w-60 h-11 top-[100px]  left-24 relative ">
            <div className="w-32 h-11  top-3  left-64 absolute">
              <h1 className="font-semibold text-3xl leading-10 text-purple">
                Sign Up
              </h1>
            </div>
            <div className="w-24 h-11 top-3 left-96 absolute">
              <h1 className="font-medium text-3xl leading-10 text-silver">
                /Login
              </h1>
            </div>
          </div>

          {/* input type */}
          <div className="  relative flex  right-24">
            <form>
              <div className="absolute top-[245px] flex gap-14 ">
                <input
                  type="text"
                  placeholder="Hospital"
                  className=" border-b-2 text-xl placeholder-black font-medium text-black left-[631px]  w-[320px]"
                />

                <input
                  type="email"
                  placeholder="Email ID"
                  className=" border-b-2 text-xl text-gray  left-[1020px] w-[320px]"
                />
              </div>

              <div className="absolute top-[327px] flex gap-14 ">
                <input
                  type="text"
                  placeholder="Address"
                  className=" border-b-2 text-xl text-gray w-[320px]"
                />

                <input
                  type="number"
                  placeholder="Phone Number"
                  className=" border-b-2 text-xl text-gray left-[1020px]  w-[320px]"
                />
              </div>

              <div className="absolute top-[409px] flex gap-14 ">
                <input
                  type="text"
                  placeholder="City"
                  className=" border-b-2 text-xl text-gray w-[320px] "
                />

                <input
                  type="number"
                  placeholder="Hospital Registration Number"
                  className=" border-b-2 text-xl text-gray  w-[320px]"
                />
              </div>

              <div className="absolute top-[491px] flex gap-14 ">
                <input
                  type="text"
                  placeholder="State"
                  className=" border-b-2 text-xl text-gray w-[320px]"
                />

                <input
                  type="number"
                  placeholder="Emercengy-ward Number"
                  className=" border-b-2 text-xl text-gray w-[320px]"
                />
              </div>

              <div className="absolute top-[573px] flex gap-14 ">
                <input
                  type="number"
                  placeholder="Pincode"
                  className=" border-b-2 text-xl text-gray w-[320px]"
                />

                <input
                  type="text"
                  placeholder="Resgistration Certificate Upload"
                  className=" border-b-2 text-xl text-gray w-[320px]"
                />
              </div>
              <div className="absolute left-[375px] top-[625px]">
                <button
                  type="button"
                  className="w-[80px] h-[25px] font-light rounded-lg bg-gray1 text-white"
                >
                  Choose
                </button>
              </div>

              <div className="absolute top-[655px] flex gap-14 ">
                <input
                  type="text"
                  placeholder="Hospital Registration Date"
                  className=" border-b-2 text-xl text-gray w-[320px] "
                />

                <input
                  type="password"
                  placeholder="Create Password"
                  className=" border-b-2 text-xl text-gray w-[320px] "
                />
              </div>

              <div className="absolute top-[737px] flex gap-14 ">
                <input
                  type="number"
                  placeholder="Number Of Ambulance available"
                  className=" border-b-2 text-xl text-gray w-[320px]"
                />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  className=" border-b-2 text-xl  text-gray w-[320px]"
                />
              </div>

              <button
                //onClick={() => navigate("/about")}
                type="submit"
                // onClick={handleSubmit}
                className=" font-semibold  text-lg text-white  w-[160px] h-[50px] bg-purple rounded-2xl absolute left-[270px] top-[855px]"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="absolute top-[970px] left-[978px] w-[4px] h-[4px]">
          <span className="text-gray">.</span>
        </div>

        <div className="absolute top-[975px] left-[985px] w-[248px] h-[21px]">
          <h1 className="font-normal text-sm text-gray">
            Terms and Condition privacy policy
          </h1>
        </div>
      </div>
    </div>
  );
};

export default RegCom;
