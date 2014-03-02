var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemap = require('gulp-sourcemaps');

gulp.task('javascript', function() {
	gulp.src('src/**/*.js')
	.pipe(concat('all.js'))
	.pipe(uglify({outSourceMap: true}))
	.pipe(sourcemap())
	.pipe(gulp.dest('dist'));
});

gulp.task('default', ['javascript']);