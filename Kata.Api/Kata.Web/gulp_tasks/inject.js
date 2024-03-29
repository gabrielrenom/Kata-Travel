const gulp = require('gulp');
const browserSync = require('browser-sync');
const wiredep = require('wiredep').stream;
const angularFilesort = require('gulp-angular-filesort');
const gulpInject = require('gulp-inject');

const conf = require('../conf/gulp.conf');

gulp.task('inject', inject);

function inject() {
  const injectScripts = gulp.src([    
    conf.path.tmp('app/services/*.js'),
    conf.path.tmp('app/controllers/*.js'),
    conf.path.tmp('index.js'),
    conf.path.tmp('app/constants/*.js'),
    conf.path.tmp('app/containers/*.js'),
    conf.path.tmp('app/components/*.js'),
    conf.path.tmp('**/*.js'),
    `!${conf.path.tmp('**/*.spec.js')}`
  ]);

  const injectOptions = {
    ignorePath: [conf.paths.src, conf.paths.tmp],
    addRootSlash: false
  };

  return gulp.src(conf.path.src('index.html'))
    .pipe(gulpInject(injectScripts, injectOptions))
    .pipe(wiredep(Object.assign({}, conf.wiredep)))
    .pipe(gulp.dest(conf.paths.tmp))
    .pipe(browserSync.stream());
}
