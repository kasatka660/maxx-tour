import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Home from "./pages/home/Home.tsx";
import Tours from "./pages/tours/Tours.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "tours",
          element: <Tours />,
        },
      ],
    },
  ],
  {
    basename: "/maxx-tour",
  },
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
