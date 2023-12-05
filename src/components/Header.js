import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = ({ item }) => {
  const storeitems = useSelector((store) => store.products.allproducts);

  return (
    <div className=" rounded shadow-md flex items-center justify-between p-4  ">
      <div className=" flex justify-between">
        <img
          alt="logo"
          className="w-[35px] h-[30px] mx-4 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW9GPrJX62kvafWyRN5gU_FkGK0KyX7YnOew&usqp=CAU"
        ></img>
        <h1 className="font-bold text-2xl pt--2 ">Shoppy</h1>
      </div>
      <div>
        <form>
          <input
            type="text"
            className="p-2 w-96 bg-slate-100 rounded-l-full"
          ></input>
          <button className="bg-slate-100 rounded-r-full p-2  ">Search</button>
        </form>
      </div>
      <ul className="flex m-2">
        <li className="px-4 font-bold cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4 font-bold">About</li>
        <li className="px-4 font-bold">Products</li>
        <li className="px-4 font-bold">
          <Link to="/cartpage">Cart({storeitems.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
