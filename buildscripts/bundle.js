"use strict";

var gulp = require("gulp"),
    gutil = require("gulp-util"),
    source = require("vinyl-source-stream"),
    buffer = require("vinyl-buffer"),
    rename = require("gulp-rename");
    
module.exports = function bundle(bundler) {
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error\n'))
    .pipe(source(bundler.main))
    .pipe(buffer())
    .pipe(rename(function(name) {
      name.dirname = "src/";
      name.basename = "main";
      name.extname = ".js";
    }))  
    .pipe(gulp.dest('./'+bundler.appPath));
}

