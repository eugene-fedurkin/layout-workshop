var gulp = require('gulp');
  sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('css/style.sass')
  .pipe(sass())
  .pipe(gulp.dest('css/css'))
})