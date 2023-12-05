import React from "react";
import { useDispatch } from "react-redux";
import { addproducts } from "../constants/cartSlice";

const Cartdesign = ({ data }) => {
  // console.log(data);
  const dispatch = useDispatch();

  const onclickhandler = () => {
    dispatch(addproducts(data));
  };

  return (
    <div className="my-1 w-[250px] h-[400px] shadow-lg rounded-md bg-gray-400-50 p-1   ">
      <img
        className="w-[150px] h-[200px] p-2 "
        alt="productlogo"
        src={data?.image}
      ></img>
      <ul>
        <li className="font-bold m-2">{data?.title}</li>
      </ul>
      <span className="px-2">${data?.price}</span>
      <button
        onClick={onclickhandler}
        className="bg-blue-200 rounded px-2 my-2  py-1 hover:bg-blue-400"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Cartdesign;
