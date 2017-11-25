'use strict';

// load Gulp dependencies
const gulp = require('gulp'),
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      rename = require('gulp-rename'),
      autoprefixer = require('gulp-autoprefixer'),
      combineMq = require('gulp-combine-mq'),
      uglify = require('gulp-uglify'),
      babel = require('gulp-babel'),
      concat = require('gulp-concat'),
      notify = require('gulp-notify'),
      plumber = require('gulp-plumber'),
      browserSync = require('browser-sync').create(),
      reload = browserSync.reload;



// compile SASS
gulp.task('styles', () => {
 return gulp.src('scss/compile.scss')
  .pipe(plumber())
  .pipe(sourcemaps.init())

  .pipe(sass({outputStyle: 'compressed'})

	// error/alert
	.on('error', sass.logError)
  .on('error', (e) => {
		notify.onError({
			title: "Gulp",
			message: "SCSS compile error",
			sound: "Submarine"})(e);
	}))

  // browser autoprefixer
  .pipe(autoprefixer({
    browsers: ['> 5%', 'IE 10','last 2 versions'],
    cascade: false,
    remove: true
  }))

  // combine media queries and move to end of stylesheet
  .pipe(combineMq({
    beautify: false
  }))

  .pipe(rename('style.css'))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('../css/'))

  .pipe(reload({stream:true}));
});



// watch javascript
gulp.task('scripts', () => {
  return gulp.src(['js/!(functions)*.js', 'js/functions.js'])

  	// initialize sourcemaps
    .pipe(sourcemaps.init())

    // babel/es2015
    .pipe(babel({
        presets: ["env", "react"]
    }))

    // error messages/notifications
    .on('error', console.error.bind(console))
    .on('error', (e) => {
  		notify.onError({
  			title: "Gulp",
  			message: "Javascript compile error",
  			sound: "Submarine"})(e);
  	})

  	// concatenate all js files in build/js directory
    .pipe(concat('main.js'))

    // create sourcemap and compiled js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('../js/'))

    .pipe(reload({stream:true}));
});




gulp.task('browser-sync',function(){
  browserSync.init(null,{
    open : true,
    server : {
      baseDir : '../',
      index : 'index.html'
    },
    port: 8080
  });
});



// watch files for changes
gulp.task('watch', () => {
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('scss/*.scss', ['styles']);
  gulp.watch('scss/**/*.scss', ['styles']);
  gulp.watch('../*.html').on('change', function() {
    browserSync.reload();
  });
});


// Ready? Set... Go!
gulp.task('default', ['styles', 'scripts', 'watch', 'browser-sync']);
