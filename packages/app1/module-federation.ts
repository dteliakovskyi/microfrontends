import { dependencies } from "./package.json";

export const moduleFederation = {
	name: "header",
	filename: "headerRemoteEntry.js",
	exposes: {
		"./Module": "./src/app",
	},
	shared: {
		...dependencies,
	},
};
