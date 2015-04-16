"use strict";

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require("gulp-sass"),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    watchify = require('watchify'),
    browserify = require('browserify'),
    es6ify = require('es6ify'),
    templateCache = require("gulp-angular-templatecache");

    es6ify.configure(/^(?!.*node_modules)+.+\.js$/);

var main = require("./package.json").main;
watchify.args.fullPaths=false;

var bundler = browserify("./"+main, watchify.args);
bundler.add(es6ify.runtime);
bundler.transform(es6ify)
bundler.plugin(watchify);



bundler.on('update', bundle);
bundler.on('log', gutil.log);

function bundle() {

  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source(main))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./app'));
}


gulp.task('scripts', bundle);

gulp.task('sass', function() {
   return gulp.src("src/sass/**/*.scss")
        .pipe(sass())
        .pipe(concat("all.css"))
        .pipe(gulp.dest('app/src'));
});

var templateOptions = {
  module:"templateCache",
  templateHeader:'var angular=require("angular"); angular.module("<%= module %>"<%= standalone %>, []).run(["$templateCache", function($templateCache) {',
  templateFooter:'}]);'
};

gulp.task('templateCache', function(){
   return gulp.src(["src/templates/**/*.html", "src/templates/**/*.htm"])
       .pipe(templateCache("templateCache.js", templateOptions))
       .pipe(gulp.dest("src/angular-modules"));
});

gulp.task('watch', function() {
  gulp.watch("src/sass/**/*.scss", ['sass']);
  gulp.watch("src/templates/**/*.html", ['templateCache']);
  gulp.watch("src/templates/**/*.htm",  ['templateCache']);
});

gulp.task('default', ['scripts', 'sass', 'templateCache', 'watch']);
