import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
	return (
		<div className="flex flex-col justify-between flex-1">
			{/* Form Sign in + Password Input Sign in btn continue With Google btn + Forgot password btn  */}
			<div className="mx-6">
				<div>
					<div className="text-center">
						<h4 className="mt-6">Logo</h4>
						<h1 className="mt-10 text-24 lg:text-28 font-bold text-dark01">Create your account</h1>
						<p className="text-14 text-dark01">Enter your details to continue.</p>
					</div>
					<form className="mt-10" action="">
						{/* Email Container */}
						<div className="flex flex-col">
							<label htmlFor="email" className="text-14 font-semibold text-dark01">
								Email Address
							</label>
							<input required id="email" name="email" type="email" placeholder="Enter your email address" className="mt-2 bg-transparent border-b text-18 outline-none" />
						</div>
						{/* Password Container */}
						<div className="mt-8 flex flex-col">
							<label htmlFor="password" className="text-14 font-semibold">
								Password
							</label>
							<input required id="password" name="password" type="password" placeholder="Create your password" className="mt-2 bg-transparent border-b text-18 outline-none" />
						</div>
						{/* sign in button */}
						<div>
							<button className="mt-10 py-4 block bg-primary01 w-full rounded-b2 hover:bg-primary03 duration-300">
								<span className="text-16 font-semibold text-light01">Create Account</span>
							</button>
						</div>
					</form>
					<div>
						<button className="mt-4 py-4 w-full flex items-center justify-center gap-4 bg-gray200 rounded-b2 shadow-bs1 hover:bg-gray300 duration-300">
							<FcGoogle size={"1.6rem"} />
							<span className="text-16 font-semibold">Continue with Google</span>
						</button>
					</div>
				</div>
			</div>
			<div className="text-center">
				<span className="text-12 lg:text-14">Already a member?</span>
				<button className="text-center hover:text-primary04 duration-150">
					<span className="ml-1 mb-4 inline-block text-12 lg:text-14 text-primary01">Log in</span>
				</button>
			</div>
		</div>
	);
};

export default SignUp;
