import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

const LoginSignUp = lazy(() => import("../views/login-signup/LoginSignUp"));
const Home = lazy(() => import("../views/Home"));

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/home" />,
	},
	{ path: "/userAuth", element: <LoginSignUp /> },
	{
		path: "/home",
		element: <Home />,
	},
]);
