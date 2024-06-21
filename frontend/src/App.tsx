import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import SignIn from "./auth/sign_in/Sign_In";
import SignUp from "./auth/sign_up/Sign_Up";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import UserPage from "./root/UserPage";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import LandingPage from "./root/LandingPage";

const persistor = persistStore(store);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <LandingPage />
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
        <PersistGate persistor={persistor}>
          <main className="h-screen w-screen overflow-hidden">
            <Toaster position="top-center" duration={1500} />
            <RouterProvider router={router} />
          </main>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
