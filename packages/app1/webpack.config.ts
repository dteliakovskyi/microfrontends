import { Configuration, container } from "webpack";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { merge } from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";

import { commonConfig } from "./webpack.common";
import { moduleFederation } from "./module-federation";

const configuration: Configuration & DevServerConfiguration = {
	entry: "./src/index.ts",
	mode: "development",
	devServer: {
		port: 3001,
		open: true,
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
	},

	plugins: [
		new container.ModuleFederationPlugin(moduleFederation),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};

export default merge(commonConfig, configuration);
