import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./root/Homepage";
import { Toaster } from "sonner";
import SignIn from "./auth/sign_in/Sign_In";
import SignUp from "./auth/sign_up/Sign_Up";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import UserPage from "./root/UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Homepage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/Login",
    element: <SignIn />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/User",
    element: (
      <ProtectedRoute>
        <UserPage />
      </ProtectedRoute>
    ),
  },
]);
function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <main className=" h-screen w-screen overflow-hidden">
          <Toaster position="top-center" duration={1500} />
          <RouterProvider router={router} />
        </main>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
