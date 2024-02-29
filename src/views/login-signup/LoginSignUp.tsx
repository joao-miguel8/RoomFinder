import LogIn from "./components/LogIn";

const LoginSignUp = () => {
	return (
		<section className="py-4 h-screen">
			{/* Left side sign in form */}
			<div className="mx-auto h-full flex flex-col lg:flex-row  rounded-b2 lg:max-w-[1200px]">
				{/* Form Sign in + Password Input Sign in btn continue With Google btn + Forgot password btn & Create Account btn */}
				<LogIn />
				{/* Right side Image */}
				<div className="flex-1 bg-green-300 invisible lg:visible rounded-b2"></div>
			</div>
		</section>
	);
};

export default LoginSignUp;
