module.exports = {
	entry: "./src/js/app.js",
    output: {
    	path: __dirname + "/public",
        filename: "build.js"
    },
    // resolve: {
	// 	extensions: ['', '.js', '.jsx'],
	// },
    module: {
	    loaders: [
	    	{
	    		test: /\.scss$/,
	    		loaders: ["style", "css", "sass"]
	    	},
	    	{test: /\.json$/, loader: 'json-loader'},
			{test: /\.hbs$/, loader: 'handlebars-loader'},
	    ]
	  }
};