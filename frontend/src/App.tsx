import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./root/Homepage";

import SignIn from "./auth/sign_in/Sign_In";
import SignUp from "./auth/sign_up/Sign_Up";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/SignIn",
    element: <SignIn />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
]);
function App() {
  return (
    <React.StrictMode>
      <main className=" h-screen w-screen overflow-hidden">
        <RouterProvider router={router} />
      </main>
    </React.StrictMode>
  );
}

export default App;
