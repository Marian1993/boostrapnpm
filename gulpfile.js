const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


function compiladorSass() {
    return gulp.src('./node_modules/bootstrap/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./node_modules/bootstrap/dist/css'));
}

function compiladorSassPersonal() {
  return gulp.src('./scss/custom.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
}

  exports.compila = compiladorSass;
  exports.compila2 = compiladorSassPersonal;
