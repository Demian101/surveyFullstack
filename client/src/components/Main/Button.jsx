import React from "react";
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  const navigate = useNavigate();
  return (
    <button
      className="bg-[url('https://lanhu.oss-cn-beijing.aliyuncs.com/psnj347v9izvniopt0f46wyjhlpb4g01uq1764f997-52b5-49c4-8b83-d7d8e0c8bd74')] bg-no-repeat text-white font-[Poppins] py-2 px-6 rounded-lg md:ml-44  duration-200"
      onClick={() => navigate("/form")}
    >
      {props.children}
    </button>
  );
};

export default Button;
