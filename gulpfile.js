var gulp = require('gulp');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify-es').default;
var es = require('event-stream');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');

gulp.task('clean', function () {
	// readable stream
	// Se usar o return ele trata de forma assincrona
	return gulp.src('dist/')
	.pipe(clean());
});

gulp.task('jshint', function () {
	return gulp.src('js/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('uglify', ['clean'], function () {
	return es.merge([
		gulp.src(['js/vendor/jquery.min.js', 'js/vendor/materialize.min.js']), 
		gulp.src('js/*.js').pipe(concat('scripts.js')).pipe(uglify())
		])
	.pipe(concat('scripts.min.js'))
	.pipe(gulp.dest('dist/js'));
});

gulp.task('htmlmin', function () {
	return gulp.src('partials/*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist/view'));
});

gulp.task('cssmin', function () {
	return gulp.src(['css/style.css'])
	.pipe(cleanCSS())
	.pipe(concat('styles.min.css'))
	.pipe(gulp.dest('dist/css'));
});

gulp.task('default', function (cb) {
	return runSequence('clean', ['jshint', 'uglify', 'htmlmin', 'cssmin'], cb);
});