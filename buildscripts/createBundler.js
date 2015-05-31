"use strict";

var browserify = require('browserify'),
    watchify = require('watchify'),
	path = require("path"),
    gutil = require('gulp-util'),
    argv = require("yargs").argv,
    es6ify = require('es6ify');

	watchify.args.fullPaths=false;
    es6ify.configure(/^(?!.*node_modules)+.+\.js$/);
	
var bundle = require("./bundle"),
	transcribeMain = require("./../package.json").main,
    projectionMain = path.join("projection/", require("./../projection/package.json").main);

module.exports = function createBundler(config){
  	var main = (argv.projection) ? projectionMain:transcribeMain,
		bundler = browserify(path.join(__dirname,"..",main), watchify.args);
		
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
	bundler.main=main;
	return bundler;
}
