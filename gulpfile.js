var gulp = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
});


gulp.task('watch', function() {
  gulp.watch("index.html", browserSync.reload);
});


// Run everything
gulp.task('default', ['browserSync', 'watch']);
