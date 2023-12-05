import React from "react";
import Cartproducts from "./Cartproducts";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { clearcartproducts } from "../constants/cartSlice";

const Cartpage = () => {
  const store = useSelector((store) => store?.products?.allproducts);
  console.log(store);

  const dispatch = useDispatch();
  const clearcart = () => {
    dispatch(clearcartproducts());
  };

  return (
    <div>
      <Header />
      <div className=" w-[30%] ml-auto mr-auto my-4 p-2  ">
        <button
          onClick={clearcart}
          className="bg-yellow-300  px-3 my-4 rounded-full  "
        >
          Clearcart
        </button>
      </div>
      <div className="my-1">
        {store.map((item) => (
          <Cartproducts id={item?.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Cartpage;
