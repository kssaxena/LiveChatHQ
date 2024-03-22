import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LandingPage from "./components/Landing_page";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import FooterAllComponents from "./components/FooterAllComponents";
import ChattingArea from "./components/ChattingArea";
import { Provider } from "react-redux";
import appStore from "./utils/store";
import LoginPage from "./components/LoginPage";

const AppLayout = () => {
  return (
    <div className="container w-[100%] overflow-hidden ">
      <Provider store={appStore}>
        <Outlet />
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: "",
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/FooterAllComponents",
        element: <FooterAllComponents />,
      },
      {
        path: "/ChattingArea",
        element: <ChattingArea />,
      },
      {
        path: "/loginpage",
        element: <LoginPage/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
