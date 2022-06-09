import { dependencies } from "./package.json";

export const moduleFederation = {
	name: "container",
	remotes: {
		header: "header@http://localhost:8081/headerRemoteEntry.js",
		offers: "offers@http://localhost:8082/offersRemoteEntry.js",
	},
	shared: dependencies,
};
