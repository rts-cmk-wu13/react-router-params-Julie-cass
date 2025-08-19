import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Dogs from "./pages/Dogs.jsx";
import Detail from "./pages/Detail.jsx";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dogs",
        element: <Dogs />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
      },
    ],
  },
]);

export default Router;