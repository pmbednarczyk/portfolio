const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: './src/containers/App/index.js',
	output: {
		path: path.resolve('./'),
		filename: 'index.js'
	},
	watch: true,
	resolve: {
		extensions: ['*', '.js', '.jsx']
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
			}, {
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							minimize: false,
							importLoaders: 2,
							sourceMap: false
						}
					}, {
						loader: 'postcss-loader',
						options: {
							sourceMap: true
						}
					}, {
						loader: 'sass-loader',
						options: {
							outputStyle: 'expanded',
							sourceMap: false,
							sourceMapContents: false
						}
					}],

			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/templates/index.html",
			filename: "./index.html"
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	]
};
