const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	optimization: {
		splitChunks: {
			cacheGroups: {
				default: false,
				styles: {
					name: 'styles',
					test: /\.(sa|sc|c)ss$/,
					chunks: 'all',
					enforce: true
				}
			}
		}
	},
	entry: './src/containers/App/index.js',
	output: {
		path: path.resolve('./'),
		filename: 'index.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					query: {
						presets: ['es2015', 'stage-2', 'react'],
						plugins: ['transform-decorators-legacy'],
					},
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						options: { minimize: true }
					}
				]
			},
			{
				test: /\.scss$/,
				use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/templates/index.html",
			filename: "./index.html"
		}),
		new MiniCssExtractPlugin({
			filename: "dist/[name].css",
		})
	],
};
