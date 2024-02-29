module.exports = {
	transform: {
		"^.+\\.ts?$": "ts-jest", // this will target any file that ends in ts and use ts-jest and transform ts files to js
	},
	testEnvironment: "node",
	testRegex: "./src/.*\\.(test|spec)?\\.(js|ts)$", // look at any file inside src directory at any level and check if it ends with test or spec and if it's js or ts files
	moduleFileExtensions: ["ts", "js", "json"], //treat these files as module files for jest
	roots: ["<rootDir>/src"], // allows jest to look for the root src directory to look for any files (you can allow jest to work with multiple roots)
};
