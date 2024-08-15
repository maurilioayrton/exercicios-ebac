const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeImg() {
    return gulp.src('./images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/imagens'));
}

function comprimeJs() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'));
}
function compilaSass(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'));
}



exports.sass = compilaSass;
exports.comprimeJS = comprimeJs;
exports.comprimeImgens = comprimeImg;