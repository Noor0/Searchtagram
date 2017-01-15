var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	entry:"./js/src/App.js",
	output:{
		filename:"./public/bundle.js"
	},
	module:{
		loaders:[
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query:{
					presets:['react','es2015',"stage-3"]
				}
			},
			{
				test:/\.css$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract("style","css?modules")
			}
		]
	},
	plugins:[
		new ExtractTextPlugin("./public/bundle.css")
	]
};