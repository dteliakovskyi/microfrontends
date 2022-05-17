import { dependencies } from "./package.json";

export const moduleFederation = {
	name: "container",
	remotes: {
		header: "header@http://localhost:3001/headerRemoteEntry.js",
		offers: "offers@http://localhost:3002/offersRemoteEntry.js",
	},
	shared: {
		...dependencies,
	},
};
