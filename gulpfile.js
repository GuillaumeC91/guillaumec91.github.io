"use strict";

// Load plugins
const autoprefixer = require("gulp-autoprefixer");
const browsersync = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");
const del = require("del");
const gulp = require("gulp");
const header = require("gulp-header");
const merge = require("merge-stream");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const jsonminify = require('gulp-jsonminify');
const concat = require('gulp-concat');
const Parser = require('rss-parser');
const handlebars = require('gulp-compile-handlebars');
const unescapeHtml = require('gulp-unescape-html')

// Load package.json for banner
const pkg = require('./package.json');

// Set the banner content
const banner = ['/*!\n',
  ' * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
  ' * Copyright 2018-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' * Licensed under <%= pkg.license %> (https://github.com/GuillaumeCleme/<%= pkg.name %>/blob/master/LICENSE)\n',
  ' */\n',
  '\n'
].join('');

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./"
    },
    port: 80
  });
  done();
}

// BrowserSync reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Clean vendor
function clean() {
  return del(["./vendor/"]);
}

// Bring third party dependencies from node_modules into vendor directory
function modules() {
  // Bootstrap
  var bootstrap = gulp.src('./node_modules/bootstrap/dist/**/*')
    .pipe(gulp.dest('./vendor/bootstrap'));
  //Datatables
  var datatables = gulp.src(['./node_modules/datatables.net*/**/*.js', './node_modules/datatables.net*/**/*.css'])
    .pipe(gulp.dest('./vendor/datatables'));
  // Font Awesome
  var fontAwesome = gulp.src('./node_modules/@fortawesome/**/*')
    .pipe(gulp.dest('./vendor'));
  // jQuery Easing
  var jqueryEasing = gulp.src('./node_modules/jquery.easing/*.js')
    .pipe(gulp.dest('./vendor/jquery-easing'));
  // jQuery
  var jquery = gulp.src([
      './node_modules/jquery/dist/*',
      '!./node_modules/jquery/dist/core.js'
    ])
    .pipe(gulp.dest('./vendor/jquery'));
  return merge(bootstrap, datatables, fontAwesome, jquery, jqueryEasing);
}

// CSS task
function css() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass({
      outputStyle: "expanded",
      includePaths: "./node_modules",
    }))
    .on("error", sass.logError)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest("./css"))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./css"))
    .pipe(browsersync.stream());
}

// JS task
function js() {
  return gulp
    .src([
      './js/*.js',
      '!./js/*.min.js'
    ])
    .pipe(concat('resume.all.min.js'))
    .pipe(uglify())
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest('./js'))
    .pipe(browsersync.stream());
}

// JSON task
function json() {
  return gulp
    .src([
      './js/*.json',
      '!./js/*.min.json'
    ])
    .pipe(jsonminify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./js'))
    .pipe(browsersync.stream());
}

// Watch files
function watchFiles() {
  gulp.watch("./scss/**/*", css);
  gulp.watch(['./js/*.js', '!./js/*.min.js'], js);
  gulp.watch(['./js/*.json', '!./js/*.min.json'], json);
  gulp.watch("./**/*.html", browserSyncReload);
}

/**
* Parse RSS feed and template content using handlebars
*
* @see https://www.npmjs.com/package/gulp-compile-handlebars
* @see https://www.npmjs.com/package/rss-parser
*/
async function templates(){
  (async () => {
    let parser = new Parser();
    let feed = await parser.parseURL(pkg.blogs.medium.feed);
    console.log(feed.title);

    feed.items.forEach(item => {
      console.log(item.title + ':' + item.link)

      var postName = item.link
        .substring(0, item.link.indexOf("?"))
        .replace(pkg.blogs.medium.url + "/" + pkg.blogs.medium.user + "/", "");

      gulp.src('templates/post.hbs')
          .pipe(handlebars(item, {}))
          .pipe(unescapeHtml())
          .pipe(rename(postName + '.html'))
          .pipe(gulp.dest('posts'));
    });
  })();
}

// Clean vendor
function cleanPosts() {
  return del(["./posts/"]);
}

// Define complex tasks
const vendor = gulp.series(clean, modules);
const build = gulp.series(vendor, gulp.parallel(css, js, json));
const watch = gulp.series(build, gulp.parallel(watchFiles, browserSync));
const blog = gulp.series(cleanPosts, templates);

// Export tasks
exports.css = css;
exports.js = js;
exports.json = json;
exports.clean = clean;
exports.vendor = vendor;
exports.build = build;
exports.watch = watch;
exports.blog = blog;
exports.default = build;
