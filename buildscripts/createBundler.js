"use strict";

var browserify = require('browserify'),
    watchify = require('watchify'),
    gutil = require('gulp-util'),
    es6ify = require('es6ify');

	watchify.args.fullPaths=false;
    es6ify.configure(/^(?!.*node_modules)+.+\.js$/);
	
var bundle = require("./bundle"),
	main = require("./../package.json").main;

module.exports = function createBundler(config){
	var bundler = browserify("./"+main, watchify.args);
	if (config.es6ify){
		bundler.add(es6ify.runtime);
		bundler.transform(es6ify);
	}
	if (config.watchify){
		bundler.plugin(watchify);
		bundler.on('update', bundle.bind(null, bundler));
	}
	bundler.on('log', gutil.log);
	bundler.appPath = config.appPath;
	return bundler;
}
