"use strict";

var gulp = require('gulp'),
    argv = require("yargs").argv,
    path = require("path");

var createBundler = require("./buildscripts/createBundler");

function getSourcePath(dir){
    var srcDir=(argv.projection)?"projection/src/":"src/";
    return path.join(srcDir, dir);
}

var bundle = require("./buildscripts/bundle"),
    appPath=(argv.projection)?"projection/app":"app";

gulp.task('scripts', ['templateCache'], function(){
    bundle(createBundler({
        es6ify:!argv.es6,
        watchify:argv.watch,
        appPath:appPath
    }));
});

var sass = require("gulp-sass"),
    concat = require('gulp-concat');

gulp.task('sass', function() {
   return gulp.src(getSourcePath("sass/**/*.scss"))
        .pipe(sass())
        .pipe(concat("all.css"))
        .pipe(gulp.dest(path.join(appPath, "/src")));
});

var angularTemplateOptions = require("./buildscripts/angularTemplateOptions.json"),
    templateCache = require("gulp-angular-templatecache");

gulp.task('templateCache', function(){
   return gulp.src([getSourcePath("templates/**/*.html"), getSourcePath("templates/**/*.htm")])
       .pipe(templateCache("templateCache.js", angularTemplateOptions))
       .pipe(gulp.dest("src/angular-modules"));
});

gulp.task('watch', function() {
  if (argv.watch){
      gulp.watch(getSourcePath("sass/**/*.scss"), ['sass']);
      gulp.watch([getSourcePath("templates/**/*.html"), getSourcePath("templates/**/*.htm")], ['templateCache']);
  }
});

require("./buildscripts/electronTasks.js");

gulp.task('default', ['scripts', 'sass', 'watch']);

var exec = require('child_process').exec

gulp.task("both", ["default"], function(){
    argv.watch=false;
    var gulpCmd=path.join(__dirname, 'node_modules/.bin',"gulp"),
        buildProjection = (!argv.projection)?" --projection":"";
    exec(gulpCmd+buildProjection, function (error, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
          console.log('exec error: ' + error);
        }
    });
});

