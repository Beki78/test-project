import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store";
import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Error from "./pages/error/Error";
import Playlist from "./pages/playlist/Playlist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error/>
  },{
    path: "/music",
    element: <Playlist />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <ToastContainer theme="dark" />
  </Provider>
);
