//instanciando variaveis gulp
var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');


//path dos arquivos
var pathJs = './source/js/*.js';
var pathCss = './dist/css';
var pathScss = './source/scss/*.scss';


//compila o .sass e envia o .css para ./dist/css
gulp.task('compilar-sass',function(){
	gulp.src(pathScss)
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(gulp.dest(pathCss));

});

//compila o .html e envia para ./dist
gulp.task('minifica-html',function(){
	gulp.src('./source/*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('./dist'));

});

//escuta mudanças no arquivo .sass
gulp.task('background',function(){
	gulp.watch(pathScss,['compilar-sass']);
	gulp.watch('./source/*.html',['mimifica-html']);
});


// task padrao - finciona com o comando 'gulp'
gulp.task('default', ['compilar-sass', 'minifica-html', 'background'] function() {
  console.log('Gulp funcionando...');
});




