import React, { useEffect, useState } from "react";
import Cartdesign from "./Cartdesign";
import Header from "./Header";

const Maincontainer = () => {
  const [items, setitems] = useState([]);
  // console.log(items);
  useEffect(() => {
    FetchingData();
  }, []);

  const FetchingData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setitems(json);
  };

  return (
    <div>
      <Header item={items} />
      <div className="flex flex-wrap justify-center my-4 ">
        {items.map((item) => (
          <Cartdesign key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Maincontainer;
