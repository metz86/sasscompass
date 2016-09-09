var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat');


var jsSources = [
];

var sassSources = ['components/sass/style.scss']

gulp.task('js', function() {
    gulp.src(jsSources) //specify source files
        .pipe(concat('script.js')) //specify what to do
        .pipe(browserify())
        .pipe(gulp.dest('builds/js')) //specify destination folder
});

gulp.task('compass', function() {
    gulp.src(sassSources) //specify source files
        .pipe(compass( {
            sass: 'components/sass',
            image: 'builds/images',
            style: 'expanded'
    }) //specify what to do
            .on('error', gutil.log))
        .pipe(gulp.dest('builds/css')) //specify destination folder
});

gulp.task('watch', function () {
    gulp.watch(jsSources, ['js']);
    gulp.watch('components/sass/*.scss', ['compass']); //Monitor all .scss files for changes
});

gulp.task('default', ['js', 'compass', 'watch']);