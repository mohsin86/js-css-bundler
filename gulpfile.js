const gulp = require('gulp'),
 concat = require('gulp-concat'),
 minify = require('gulp-minify'),
 cleanCss = require('gulp-clean-css');

/* Add Js and css file url here */
let path = {
    jsFiles : [
        'assets/js/jquery.min.js',
        'assets/js/jquery.validate.min.js',
        'assets/js/bootstrap-3.3.7.min.js',
        'assets/js/owl.carousel.min.js',
        'assets/js/animation.gsap.js'
    ],
    cssFiles: [
        'assets/css/bootstrap-3.3.7.min.css',
        'assets/css/owl.carousel.css',
        'assets/css/style-3.0.0.css'
    ]
};


// ----- Scripts ----- //
// Concat, minify js
gulp.task('pack-js', function () {

    // return gulp.src(['assets/js/vendor/*.js', 'assets/js/main.js', 'assets/js/module*.js'])
    //     .pipe(concat('bundle.js'))
    //     .pipe(gulp.dest('public/build/js'));

    return gulp.src(path.jsFiles)
        .pipe(concat('bundle.js'))
        .pipe(minify())
        .pipe(gulp.dest('public/build/js'));
});


gulp.task('pack-css', function () {
    // return gulp.src(['assets/css/main.css', 'assets/css/custom.css'])
    //     .pipe(concat('stylesheet.css'))
    //     .pipe(gulp.dest('public/build/css'));

    return gulp.src(path.cssFiles)
        .pipe(concat('stylesheet.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('public/build/css'));
});

gulp.task('default',  gulp.series('pack-js', 'pack-css'));

