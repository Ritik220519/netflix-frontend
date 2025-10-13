import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import SearchMovie from "./SearchMovie";
import ShimmerSearchMovie from "./ShimmerSearchMovie";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Browse />,
    },
    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/searchMovie",
      element: <SearchMovie />,
    },
    

  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
