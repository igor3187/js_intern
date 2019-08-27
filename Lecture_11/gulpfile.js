const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const uglifycss = require('gulp-uglifycss');

gulp.task('css',  async function () {
    gulp.src('./dist/*.css')
        .pipe(uglifycss({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(gulp.dest('./dist/'));
});
// With this task('minify-css') nothing was changed inside of './dist/style/css', so i use a task 'gulp-uglifycss'
gulp.task('minify-css', () => {
    return gulp.src('styles/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'));
});

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', () => {
    return gulp.src('index/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));

});
