import { Provider } from "react-redux";
import Body from "./components/Body";
import appstore from "./constants/appstore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cartpage from "./components/Cartpage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },

    {
      path: "/cartpage",
      element: <Cartpage />,
    },
  ]);
  return (
    <Provider store={appstore}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
