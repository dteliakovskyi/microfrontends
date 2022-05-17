import { dependencies } from "./package.json";

export const moduleFederation = {
	name: "offers",
	filename: "offersRemoteEntry.js",
	exposes: {
		"./Module": "./src/app",
	},
	shared: {
		...dependencies,
	},
};
