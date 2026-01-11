import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home";
import BookingPage from "../pages/BookingPage/BookingPage";
import Signup from "../pages/Authentication/Signup";
import PrivateRoutes from "../routes/PrivateRoutes";

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
        element: (
          <PrivateRoutes>
            <BookingPage></BookingPage>
          </PrivateRoutes>
        ),
      },
      {
        path: "signup",
        Component: Signup,
      },
    ],
  },
]);
