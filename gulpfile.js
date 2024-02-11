const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const less = require('gulp-less')
const pug = require('gulp-pug')
const sass = require('gulp-sass')(require('sass'))

gulp.task('less', () => {
    return gulp.src('**/index.less')
        .pipe(less())
        .pipe(gulp.dest((file) => {
            return file.base
        }))
        .pipe(browserSync.stream())
})

gulp.task('pug', () => { 
    return gulp.src('**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest((file) => {
            return file.base
        }));
})

gulp.task('sass', () => {
    return gulp.src('**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest((file) => {
            return file.base
        }))
        .pipe(browserSync.stream())
})

gulp.task('serve', gulp.series(['pug', 'less', 'sass'], () => {
    browserSync.init({
        open: false,
        server: {
            baseDir: ['./'],
        }
    })
    
    gulp.watch('**/*.less', gulp.series(['less']))
    gulp.watch('**/*.scss', gulp.series(['sass']))
    gulp.watch('**/*.pug', gulp.series(['pug']))
    gulp.watch('**/*.html').on('change', browserSync.reload)
}))

gulp.task('default', gulp.series(['serve']));