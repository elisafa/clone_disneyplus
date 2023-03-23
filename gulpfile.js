const gulp = require('gulp'); //importando o gulp
const sass = require('gulp-sass')(require('sass')); //inportando o sass
const imagemin = require('gulp-imagemin')

function styles(){
    return gulp.src('./src/styles/*.scss') //de onde vem os aquivos 
    .pipe(sass({outputStyle: 'compressed'})) //função de compressão dos arquivos
    .pipe(gulp.dest('./dist/css')) //pasta dedestino dos nossos arquivos
}
function images(){
    return gulp.src('./src/images/**/*') //de onde vem os aquivos 
    .pipe(imagemin()) //função de compressão dos arquivos
    .pipe(gulp.dest('./dist/images')) //pasta dedestino dos nossos arquivos
}

exports.default = gulp.parallel(styles, images);
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}