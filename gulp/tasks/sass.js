var gulp         = require('gulp');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var autoprefixer = require('gulp-autoprefixer');
var config = require('../config').sass;

gulp.task('sass', function() {
  console.log(config);
    return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(sass(config.settings))
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({browsers: ["last 2 version"]}))
    .pipe(gulp.dest(config.dest));
        // .pipe(sass().on('error', sass.logError))
        // .pipe(gulp.dest('./public/style/'));
});
