import React from "react";
import { useDispatch } from "react-redux";
import { removeproducts } from "../constants/cartSlice";

const Cartproducts = ({ data }) => {
  const dispatch = useDispatch();
  console.log(data.id);
  const removeitem = (id) => {
    console.log(id);
    dispatch(removeproducts(id));
  };
  return (
    <div className=" w-[50%] ml-auto mr-auto  p-2 h-auto shadow-lg rounded-md ">
      <img
        className="w-[100px] h-[200]p-2 "
        alt="productlogo"
        src={data?.image}
      ></img>
      <div>
        <ul>
          <li className="font-bold m-2">{data?.title}</li>
        </ul>
      </div>
      <div className="flex justify-between">
        <span className="m-2">${data?.price}</span>
        <button
          onClick={() => removeitem(data?.id)}
          className="bg-red-400 rounded-full px-3"
        >
          Remove item
        </button>
      </div>
    </div>
  );
};
export default Cartproducts;
