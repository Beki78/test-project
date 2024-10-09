import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store";
import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Error from "./pages/error/Error";
import Playlist from "./pages/playlist/Playlist";

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
  </Provider>
);
