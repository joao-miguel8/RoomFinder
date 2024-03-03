import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component }: { component: ReactNode }) => {
	return !hasAuth ? <Navigate to={"/userAuth"} replace /> : component;
};

export default PrivateRoute;
