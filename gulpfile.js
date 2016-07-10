var gulp = require('gulp');
//var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
//var imagemin = require('gulp-imagemin');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
 
var paths = {
  createDist: 'dev/**/*',
  scripts: ['dev/app/app.module.js', 'dev/app/app.routes.js', 'dev/app/components/**/*.js'],
  vendorScripts: 'dev/assets/vendor/*.js',
  images: 'client/img/**/*',
  stylus: 'dev/assets/stylus/application.styl'
};
 
// Not all tasks need to use streams 
// A gulpfile is just another node program and you can use any package available on npm 
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src` 
  return del(['dist']);
});

// Create distination folder
gulp.task('create', ['clean'], function () {
  return gulp.src(paths.createDist, {base:"."})
        .pipe(gulp.dest('dist'));
});

// External sourcemaps 
gulp.task('stylus', function () {
  return gulp.src(paths.stylus)
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts) 
  // with sourcemaps all the way down 
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat('all.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('vendor-scripts', function() {
  // Copy all vendor JavaScript 
  return gulp.src(paths.vendorScripts)
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('dist/vendor'));
});

// Copy all static images 
gulp.task('images', ['clean'], function() {
  return gulp.src(paths.images)
    // Pass in options to the task 
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('dist/img'));
});
 
// Rerun the task when a file changes 
gulp.task('watch', function() {
  //gulp.watch(paths.createDist, ['create']);
  gulp.watch('dev/assets/stylus/**/*.styl', ['stylus']);
  gulp.watch(paths.scripts, ['scripts']);
  //gulp.watch(paths.images, ['images']);
});
 
// The default task (called when you run `gulp` from cli) 
//gulp.task('default', ['create', 'watch', 'stylus', 'scripts', 'vendor-scripts', 'images']);
gulp.task('default', ['watch', 'stylus', 'scripts', 'vendor-scripts']);