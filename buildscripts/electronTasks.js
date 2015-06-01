"use strict";

var gulp = require("gulp");

gulp.task("electron-case", function(){
    return gulp.src("node_modules/electron-prebuilt/dist/*")
    .pipe(gulp.dest("distrib/electron/files"));
});

gulp.task("electron-chromium-locales", function(){
    return gulp.src("node_modules/electron-prebuilt/dist/locales/*")
    .pipe(gulp.dest("distrib/electron/files/locales"));
});

gulp.task("electron-custom", function(){
    return gulp.src("electron/*")
    .pipe(gulp.dest("distrib/electron/files/resources/app"));
});

gulp.task("electron-icon", ["electron-case"], function(){
    
});

gulp.task("electron", ["both", "electron-case", "electron-custom", "electron-chromium-locales", "electron-icon"], function(){
    
});