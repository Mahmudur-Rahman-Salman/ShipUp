import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home";
import BookingPage from "../pages/BookingPage/BookingPage";
import Signup from "../pages/Authentication/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "bookingPage",
        Component: BookingPage,
      },
      {
        path: "signup", 
        Component: Signup, 
      }, 
    ],
  },
]);
