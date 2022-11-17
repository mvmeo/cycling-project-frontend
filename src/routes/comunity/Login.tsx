import React from "react";
import LoginCard from '../../components/LoginCard'

const Login = () => {
  return (
    <div className="">
      <div className="md:h-[900px] grid lg:grid-cols-2">
        <div className="bg-white">
            <div className="flex justify-center lg:my-[150px] my-[50px]">
                <LoginCard />
            </div>
        </div>
        <div className="bg-red">
        </div>
      </div>
    </div>
  );
};

export default Login;
