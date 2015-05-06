var gulp = require("gulp");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

gulp.task("scripts", function() {

	return gulp.src("javascript/*.es6")
		.pipe(babel())
		.pipe(concat("app.js"))
		.pipe(gulp.dest("app/assets"))
		.pipe(rename("app.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest("app/assets"));

});

gulp.task("default", ["scripts"]);
