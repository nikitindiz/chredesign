var gulp = require('gulp'),
    watch = require('gulp-watch');
var sass = require('gulp-ruby-sass');

gulp.task('default', function () {
    watch('_source/sass/*.sass', function () {
	gulp.start('build-sass');
    });
});


gulp.task('build-sass', function () {
    return gulp.src('_source/sass/*.sass')	
        .pipe(sass({sourcemap: false}))
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest('css'));
    console.log('I\'m watching you!');
});
