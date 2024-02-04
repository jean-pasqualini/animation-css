const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const less = require('gulp-less')

gulp.task('less', () => {
    return gulp.src('**/index.less')
        .pipe(less())
        .pipe(gulp.dest((file) => {
            return file.base
        }))
        .pipe(browserSync.stream())
})

gulp.task('serve', gulp.series(['less'], () => {
    browserSync.init({
        open: false,
        server: {
            baseDir: ['./'],
        }
    })
    
    gulp.watch('**/*.less', gulp.series(['less']))
    gulp.watch('**/*.html').on('change', browserSync.reload)
}))

gulp.task('default', gulp.series(['serve']));