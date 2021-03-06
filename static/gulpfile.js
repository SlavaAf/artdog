var autoprefixer = require('autoprefixer-core');
var center = require('postcss-center');
var clearfix = require('postcss-clearfix');
var colorshort = require('postcss-color-short');
var connect = require('gulp-connect');
var cssmqpacker = require('css-mqpacker');
var cssnano = require('cssnano');
var cssnext = require("cssnext");
var discardcomments = require('postcss-discard-comments');
var focus = require('postcss-focus');
var gulp = require('gulp');
var htmlhint = require('gulp-htmlhint');
var imagemin = require('gulp-imagemin');
var livereload = require('gulp-livereload');
var pngquant = require('imagemin-pngquant');
var postcss = require('gulp-postcss');
var precss = require('precss');
var pxtorem = require('postcss-pxtorem');
var short = require('postcss-short');
var size = require('postcss-size');
var uglify = require('gulp-uglify')

gulp.task('default', function() {
  // gulp.run('server');
  // gulp.watch('src/html/**', function(event) {
  //   gulp.run('html');
  // });
  gulp.watch('src/css/**', function(event) {
    gulp.run('postcss');
  });
  gulp.watch('src/js/**', function(event) {
    gulp.run('js');
  });
  gulp.watch('src/images/**', function(event) {
    gulp.run('images');
  });
});

// HTML
//
// gulp.task('html', function() {
//   gulp.src('src/html/**/*.html')
//       .pipe(htmlhint())
//     .pipe(gulp.dest('dist/'))
//     .pipe(connect.reload());
// });

// PostCSS

gulp.task('postcss', function () {
    var processors = [
        colorshort,
        focus,
        center,
        precss,
        short,
        size,
        clearfix,
        pxtorem,
        discardcomments,
        cssnext,
        cssmqpacker,
        autoprefixer({ browsers: ['last 2 version'] }),
        cssnano
    ];
    return gulp.src('src/css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('css/'))
        .pipe(connect.reload());
});

// JavaScript

gulp.task('js', function () {
    return gulp.src('src/js/*')
          .pipe(uglify())
        .pipe(gulp.dest('js'))
        .pipe(connect.reload());
});

// Image files

gulp.task('images', function () {
    return gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('images'))
        .pipe(connect.reload());
});

// Server

// gulp.task('server', function() {
//   connect.server({
//     root: 'dist',
//     livereload: true
//   });
// });
