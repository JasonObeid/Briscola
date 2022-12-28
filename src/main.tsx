import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./constants/routes";
import { Home } from "./routes/Home";
import { Match } from "./routes/Match";
import "./styles/main.css";

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Home />,
  },
  {
    path: routes.match,

    element: <Match />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <main className="flex items-center justify-center flex-1 min-h-screen  pt-2 lg:pt-8 bg-lime-900">
      <RouterProvider router={router} />
    </main>
  </React.StrictMode>,
);
