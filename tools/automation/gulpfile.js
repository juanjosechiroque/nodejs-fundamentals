const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', function (cb) {
  console.log('Construyendo sitio web');
  cb();
});

gulp.task('serve', function (cb) {  
  gulp.src('www')
    .pipe(server({
      livereload: true,
      open: true
    }))
  cb();
})

gulp.task('default', gulp.series('build','serve'));
