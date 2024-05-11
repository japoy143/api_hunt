import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sign_In from "./auth/sign_in/Sign_In";
import Homepage from "./root/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/signIn",
    element: <Sign_In />,
  },
]);
function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
