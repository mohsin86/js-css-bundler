var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');

gulp.task('pack-js', function () {
    // return gulp.src(['assets/js/vendor/*.js', 'assets/js/main.js', 'assets/js/module*.js'])
    //     .pipe(concat('bundle.js'))
    //     .pipe(gulp.dest('public/build/js'));
    return gulp.src(
        ['assets/js/jquery.min.js', 'assets/js/jquery.validate.min.js', 'assets/js/bootstrap-3.3.7.min.js',
            'assets/js/owl.carousel.min.js', 'assets/js/animation.gsap.js'
        ])
        .pipe(concat('bundle.js'))
        .pipe(minify())
        .pipe(gulp.dest('public/build/js'));
});

gulp.task('pack-css', function () {
    // return gulp.src(['assets/css/main.css', 'assets/css/custom.css'])
    //     .pipe(concat('stylesheet.css'))
    //     .pipe(gulp.dest('public/build/css'));
    return gulp.src(['assets/css/bootstrap-3.3.7.min.css', 'assets/css/owl.carousel.css',
        'assets/css/style-3.0.0.css', 'assets/css/owl.theme.css', 'assets/css/ff18.css','assets/css/responsive.css' ])
        .pipe(concat('stylesheet.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('public/build/css'));
});

gulp.task('default', ['pack-js', 'pack-css']);

