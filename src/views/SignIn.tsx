function SignIn() {
	return (
		<section className="border-4 p-2 h-screen">
			{/* Left side sign in form */}
			<div className="flex flex-col justify-between border-2 h-full">
				{/* Form Sign in + Password Input Sign in btn continue With Google btn + Forgot password btn  */}
				<div>
					<div>
						<div className="text-center">
							<h4 className="mt-6">Logo</h4>
							<h1 className="mt-10 text-18 text-dark01">Sign In</h1>
							<p className="text-14 text-dark01">Enter your details to sign in.</p>
						</div>
						<form className="mt-10" action="">
							{/* Email Container */}
							<div className="flex flex-col">
								<label htmlFor="email" className="text-14 text-dark01">
									Email Address
								</label>
								<input id="email" name="email" type="text" placeholder="Enter your email address" className="bg-transparent border-b text-18" />
							</div>
							{/* Password Container */}
							<div className="mt-4 flex flex-col">
								<label htmlFor="password" className="text-14">
									Password Address
								</label>
								<input id="password" name="password" type="text" placeholder="Enter your password" className="bg-transparent border-b text-18" />
							</div>
							{/* sign in button */}
							<div className="border-2">
								<button className="mt-10 py-4 block bg-primary01 w-full rounded-b2">
									<span className="text-16 text-light01">Sign In</span>
								</button>
								{/* password button */}
								<button className="mt-4">
									<span className="text-14">Forgot your password?</span>
								</button>
							</div>
						</form>
						<div>
							<button className="mt-10 py-4 w-full flex items-center justify-center gap-4 bg-gray200 rounded-b2 shadow-bs1">
								<div>G</div>
								<span className="text-16">Continue with Google</span>
							</button>
						</div>
					</div>
				</div>
				<button className="w-full text-center border-2">
					<span className="inline-block text-12 text-primary01">Create an Account?</span>
				</button>
				{/* Right side Image */}
				{/* <div className="flex-1 bg-green-300"></div> */}
			</div>
		</section>
	);
}

export default SignIn;
