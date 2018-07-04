const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	optimization: {
		splitChunks: {
			cacheGroups: {
				styles: {
					name: 'styles',
					test: /\.(sa|sc|c)ss$/,
					chunks: 'all',
					enforce: true
				}
			}
		}
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "styles.css",
		})
	],
	entry: './src/containers/App/index.js',
	output: {
		path: path.resolve('./'),
		filename: 'index.js'
	},
	watch: true,
	resolve: {
		extensions: ['*', '.js', '.jsx', '.scss']
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
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: './'
						}
					},
					{
						loader: 'css-loader'
					}, {
						loader: 'postcss-loader'
					}, {
						loader: 'sass-loader'
					}],

			}
		]
	}
};
