import React from 'react'
import RegisterCard from '../components/RegisterCard';

const Register = () => {
    return (
        <div className="">
          <div className="h-full grid lg:grid-cols-1">
            <div className="bg-white">
                <div className="flex justify-center lg:my-[100px] my-[50px]">
                    <RegisterCard />
                </div>
            </div>
          </div>
        </div>
      );
}

export default Register
