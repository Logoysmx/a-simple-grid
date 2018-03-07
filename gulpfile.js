/*
Isaac Fraire Heredia
emai: me@isaacfraire.name
*/
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');
var path = require('path');
var browserSync = require('browser-sync').create();

var config = {
	destination: './dist/css',				//Destination folder
	source_path : './sass/**/*.scss'
};

gulp.task('compiler', function () {
	gulp.src(config.source_path)
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest(config.destination))
		.pipe(browserSync.reload({stream: true}));	
});

gulp.task('browser-sync', function(){
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
});

gulp.task('watch', ['browser-sync'] , function(){
	gulp.watch(config.source_path, ['compiler']);
	gulp.watch("*.html").on("change", browserSync.reload);
});

