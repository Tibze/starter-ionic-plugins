var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var gulpSequence = require('gulp-sequence');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var watch = require('gulp-watch');

var config = {
  BOWER: './lib'
}

// Paths
var paths = {
  styles: ['./sass/**/*.scss'],
  scripts: ['./src/**/*.js'],
  fonts: ['./lib/ionic/fonts/*'],
  images: ['./www/img/*']
};
// Dest
var dest = {
  styles: './www/css/',
  vendors: './www/js/',
  scripts: './www/js/',
  fonts: './www/fonts/',
  images: './www/img/'
}
// Final Filename
var filename =  {
  styles: 'styles.css',
  vendors: 'vendors.js',
  scripts: 'scripts.js'
}

// lib

var libs = [
  './lib/ionic/js/ionic.bundle.js', // Ionic Bundle
  './lib/ngCordova/dist/ng-cordova.js', // NgCordova
  './lib/ng-cordova-oauth/dist/ng-cordova-oauth.js', // NgCordova Oauth
]

function errorAlertSASS(error){
    notify.onError({title: "SASS Error", message: error.Message, sound: "Pop"})(error); //Error Notification
    console.log(error.toString());//Prints Error to Console
    this.emit("end"); //End function
}; 

function errorAlertJS(error){
    notify.onError({title: "JS Error", message: error.Message, sound: "Pop"})(error); //Error Notification
    console.log(error.toString());//Prints Error to Console
    this.emit("end"); //End function
};

gulp.task('fonts', function() {
  return gulp.src(paths.fonts)
  .pipe(gulp.dest(dest.fonts));
});

gulp.task('styles', function(done) {
  gulp.src(paths.styles)
    .pipe(plumber({errorHandler: errorAlertSASS}))
    .pipe(sass())
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(concat(filename.styles))
    .pipe(gulp.dest(dest.styles))
    .on('end', done);
});

gulp.task('vendors', function() {
    return gulp.src(libs)
        .pipe(sourcemaps.init())   
        .pipe(concat(filename.vendors))
        .pipe(uglify())  
        .pipe(sourcemaps.write())     
        .pipe(gulp.dest(dest.vendors));
});

gulp.task('scripts', function () {
  return gulp.src(paths.scripts)
    .pipe(plumber({errorHandler: errorAlertJS}))  
    .pipe(sourcemaps.init())
    .pipe(ngAnnotate({
      remove: true,
      add: true,
      single_quotes: true
    }))     
    .pipe(concat(filename.scripts))  
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dest.scripts))    
});

gulp.task('imagemin', function () {
    return gulp.src(paths.images)
      .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
      }))
      .pipe(gulp.dest(dest.images));
});

gulp.task('watch', function() {
  gulp.watch(paths.styles, ['styles']);
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', gulpSequence('fonts','styles','vendors','scripts','watch'));
gulp.task('prod', gulpSequence('imagemin'));

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

gulp.task('sh', function() {
  sh.echo('hello world');
});
