// Gulp.js configuration
var
  // modules
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync').create(),

  // development mode?
  devBuild = (process.env.NODE_ENV !== 'production'),

  // folders
  folder = {
    src: 'src/',
    build: 'build/'
  }
;

gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss') // Gets all files ending with .scss in src/scss
    .pipe(sass())
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Gulp watch syntax
gulp.watch('src/scss/**/*.scss', ['sass']);

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('*.html', browserSync.reload);
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '.'
    },
  })
})