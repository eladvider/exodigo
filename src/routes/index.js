import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Cocktail from "screen/cocktail";
import Recipe from "screen/recipe";
import Add from "screen/add";

import Layout from "Components/layout";

const Routes = () => {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/recipe/:id", element: <Recipe /> },
        { path: "/recipe/add", element: <Add /> },
        {
          path: "/",
          element: <Cocktail />,
        },
      ],
    },
  ];

  const router = createBrowserRouter([...routes]);

  return <RouterProvider router={router} />;
};

export default Routes;
