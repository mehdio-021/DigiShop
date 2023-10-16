import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import LapTop from "./pages/laptop/LapTop";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import Phone from "./pages/phone/Phone";
import Support from "./pages/support/Support";
import Interests from "./pages/interests/Interests";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import HeadPhone from './pages/headPhone/HeadPhone';
import SignIn from "./components/login/SignIn";
import SignUp from "./components/login/Signup";


const routes = [
  {
    path: "/product/:id",
    element: <SingleProduct />,
    id: 4,
  },
  {
    path: "/cart",
    element: <Cart />,
    id: 5,
  },
  {
    path: "/login",
    element: <Login />,
    id: 6,
  },
  {
    path: "/laptop",
    element: <LapTop />,
    id: 7,
  },
  {
    path: "/watch",
    element: <Watch />,
    id: 8,
  },
  {
    path: "/phone",
    element: <Phone />,
    id: 9,
  },
  {
    path: "/",
    element: <Home />,
    id: 10,
  },
  {
    path: "/interests",
    element: <Interests />,
    id: 11,
  },

  {
    path: "/support",
    element: <Support />,
    id: 12,
  },
  {
    path: "/headphone",
    element: <HeadPhone />,
    id: 13,
  },
  {
    path: "/signup",
    element: <SignUp />,
    id: 14,
  },
  {
    path: "/signin",
    element: <SignIn />,
    id: 15,
  },
];

export default routes;
