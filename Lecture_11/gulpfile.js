const gulp = require('gulp');
const htmlMin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');

sass.compiler = require('node-sass');

gulp.task('scss', () => {
    return gulp.src('./src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('html', () => {
    return gulp.src('./src/*.html')
        .pipe(htmlMin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', gulp.series('html', 'scss'));

gulp.task('watch', gulp.series('html', 'scss', () => {
    gulp.watch('./src/*.html', ['html']);
    gulp.watch('./src/*.scss', ['scss']);
}));






