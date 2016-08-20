//require plugins
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Compile  Sass
gulp.task('sass', function() {
    return gulp.src('sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css'));
});

// Concatenate, Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('index.js'))
        .pipe(gulp.dest('assets'))
        .pipe(rename('index.min.js'))
        .pipe(gulp.dest('assets/js'));
});

// Watch Files
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('sass/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'scripts', 'watch']);