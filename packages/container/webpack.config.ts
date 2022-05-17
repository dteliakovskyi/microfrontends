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
		port: 8080,
		open: true,
	},

	plugins: [
		new container.ModuleFederationPlugin(moduleFederation),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};

module.exports = merge(commonConfig, configuration);
