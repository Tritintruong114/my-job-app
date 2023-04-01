import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HeaderNav from "./components/HeaderNav";
import InfoJobs from "./pages/InfoJobs";
import InfoBlog from "./pages/InfoBlog";
import InfoCompany from "./pages/InfoCompany";
// import { element } from 'prop-types';
import InfoStory from "./pages/InfoStory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "infoJobs",
        element: <InfoJobs />,
        children: [
          {
            path: "1",
            element: <InfoJobs />,
          },
          {
            path: "2",
            element: <InfoBlog />,
          },
          {
            path: "3",
            element: <InfoBlog />,
          },
          {
            path: "4",
            element: <InfoBlog />,
          },
        ],
      },
      {
        path: "infoBlog",
        element: <InfoBlog />,
      },
      {
        path: "infoCompany",
        element: <InfoCompany />,
      },
      {
        path: "infoStory",
        element: <InfoStory />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
