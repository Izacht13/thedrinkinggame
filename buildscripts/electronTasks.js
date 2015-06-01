"use strict";

var fs = require("fs"),
    gulp = require("gulp");
    
var info = require("./../package.json");

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

var exec = require('child_process').exec;

gulp.task("electron-exe", ["electron-case"], function(cb){
    // exec('buildscripts/rcedit.exe distrib/electron/files/electron.exe --set-icon icon.ico --set-file-version "'+info.version+'"', function(){
    //     cb();
    // });
});

gulp.task("electron-rename", ["electron-exe"],function(cb){
    fs.rename("distrib/electron/files/electron.exe", "distrib/electron/files/"+info.name+".exe", function(){
       cb(); 
    });
})

gulp.task("electron", ["both", "electron-case", "electron-custom", "electron-chromium-locales", "electron-exe", "electron-rename"], function(){
    
});