var gulp = require('gulp');
var minify = require('gulp-minify');
var gulpCopy = require('gulp-copy');
var watch = require('gulp-watch');
var cleancss = require('gulp-clean-css');

gulp.task('default', [
    'compile',
    'static'
]);

gulp.task('compile',function(){
    gulp.src('src/*.js')
    .pipe(minify({
        ext:{
            min:'.min.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['-min.js']
    }))
    .pipe(gulp.dest('dist'));

    gulp.src('src/*.css')
    .pipe(cleancss({
        compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('static',function(){
    return gulp
    .src('src/static/**/*')
    .pipe(gulpCopy('dist',{prefix:2}))
});

gulp.task('watch',function(){
    gulp.start('default');
    return watch('src/**/*', function () {
        gulp.start('default');
    });
});