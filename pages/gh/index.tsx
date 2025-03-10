import React, { useState } from "react";
import "../../app/globals.css";

const Example = () => {
  return (
    <div className="bg-[#0d1117] h-[100vh]">
      <div className="border border-[#3d444db3] p-[24px] text-center relative">
        <div className="mx-[76px]">
          <div className="text-white mb-[4px]">
            Label issues and pull requests for new contributors
          </div>
          <div className="text-white">
            Now, GitHub will help potential first-time contributors discover
            issues labeled with
            <span className="border rounded px-[7px] text-nowrap">
              good first issue
            </span>
          </div>
          <div className="absolute top-[30px] right-[20px] text-[#4493f8] ">
            Dismiss
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;
