var gulp = require('gulp');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');


gulp.task('clean', function () {
	
});

gulp.task('jshint', function () {
	// readable stream
	// Se usar o return ele trata de forma assincrona
	return gulp.src('js/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('uglify', function () {
	return gulp.src('js/**/*/.js')
	.pipe(gulp.dest('dist/js'));
});
