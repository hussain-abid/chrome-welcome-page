var gulp = require('gulp');
const javascriptObfuscator = require('gulp-javascript-obfuscator');
var sass = require('gulp-sass');
const image = require('gulp-image');
var replace = require('gulp-batch-replace');
var rename = require("gulp-rename");
var concat = require('gulp-concat');
const minify = require('gulp-minify');


// const CONFIG = require('./config.json');

sass.compiler = require('node-sass');


gulp.task('sass', function () {
    gulp.src('./assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));

    //minify
    gulp.src('./assets/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('./assets/css'));
});


gulp.task('sass2', function () {
    gulp.src('./public/website_assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/website_assets/css'));

    //minify
    gulp.src('./public/website_assets/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('./public/website_assets/css'));
});



gulp.task('sass-dashboard', function () {
    gulp.src('./app/public/dashboard/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/public/dashboard/css'));

    //minify
    gulp.src('./app/public/dashboard/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('./app/public/dashboard/css'));
});

gulp.task('jss', function () {

    gulp.src('./public/assets/custom/js/**/*.js')
        .pipe(javascriptObfuscator({
            compact: true
        }))
        .pipe(gulp.dest('./public/assets/custom/jsser'));

});


gulp.task('scsscom', function () {
    gulp.watch(['./assets/scss/**/*.scss'],  ['sass']);
    // gulp.watch(['./public/assets/custom/js/**/*.js'],  ['jss']);
});



//
// gulp.task('scsscom2', function () {
//     gulp.watch(['./public/website_assets/scss/**/*.scss'],  ['sass2']);
// });
