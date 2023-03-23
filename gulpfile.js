const gulp = require('gulp'); //importando o gulp
const sass = require('gulp-sass')(require('sass')); //inportando o sass

function styles(){
    return gulp.src('./src/styles/*.scss') //de onde vem os aquivos 
    .pipe(sass({outputStyle: 'compressed'})) //função de compressão dos arquivos
    .pipe(gulp.dest('./dist/css')) //pasta dedestino dos nossos arquivos
}

exports.default = styles;
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}