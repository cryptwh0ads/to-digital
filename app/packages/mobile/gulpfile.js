/**
 * Tasks:
 *
 * gulp sounds
 *   Generate lib/sounds.json (it must be manually called)
 *
 * gulp prod
 *   Generates the app in production mode
 *
 * gulp dev
 *   Generates the app in development mode
 *
 * gulp live
 *   Generates the app in development mode, opens the local website and
 *   watches for changes
 *
 * gulp
 *   Alias for `gulp prod`
 */

const fs = require("fs")
const path = require("path")
const gulp = require("gulp")
const gulpif = require("gulp-if")
const gutil = require("gulp-util")
const plumber = require("gulp-plumber")
const touch = require("gulp-touch-cmd")
const rename = require("gulp-rename")
const header = require("gulp-header")
const browserify = require("browserify")
const watchify = require("watchify")
const envify = require("envify/custom")
const uglify = require("gulp-uglify-es").default
const source = require("vinyl-source-stream")
const buffer = require("vinyl-buffer")
const del = require("del")
const mkdirp = require("mkdirp")
const ncp = require("ncp")
//const eslint = require('gulp-eslint');
const stylus = require("gulp-stylus")
const autoprefixer = require("autoprefixer-stylus")
const cssBase64 = require("gulp-css-base64")
const browserSync = require("browser-sync")

const PKG = require("./package.json")
const BANNER = fs.readFileSync("banner.txt").toString()
const BANNER_OPTIONS = {
  pkg: PKG,
  currentYear: new Date().getFullYear(),
}
const OUTPUT_DIR = "out"

// Default environment
process.env.NODE_ENV = "development"

function logError(error) {
  gutil.log(gutil.colors.red(String(error)))
}

function bundle(options) {
  options = options || {}

  const watch = Boolean(options.watch)
  let bundler = browserify({
    entries: path.join(__dirname, "app/src/index.jsx"),
    extensions: [".js", ".jsx"],
    // required for sourcemaps (must be false otherwise)
    debug: process.env.NODE_ENV === "development",
    // required for watchify
    cache: {},
    // required for watchify
    packageCache: {},
    // required to be true only for watchify
    fullPaths: watch,
    // Don't parse clone dep (not needed)
    noParse: ["clone"],
  })
    .transform("babelify", {
      presets: ["@babel/preset-env"],
      sourceMaps: true,
      global: true,
      ignore: [/\/node_modules\/(?!your module folder\/)/],
    })
    .transform(
      envify({
        NODE_ENV: process.env.NODE_ENV,
        _: "purge",
      })
    )

  if (watch) {
    bundler = watchify(bundler)

    bundler.on("update", () => {
      const start = Date.now()

      gutil.log("bundling...")
      rebundle()
      gutil.log("bundle took %sms", Date.now() - start)
    })
  }

  function rebundle() {
    return bundler
      .bundle()
      .on("error", logError)
      .pipe(source(`${PKG.name}.js`))
      .pipe(buffer())
      .pipe(rename(`${PKG.name}.js`))
      .pipe(gulpif(process.env.NODE_ENV === "production", uglify()))
      .pipe(header(BANNER, BANNER_OPTIONS))
      .pipe(gulp.dest(OUTPUT_DIR))
  }

  return rebundle()
}

gulp.task("clean", () => del(OUTPUT_DIR, { force: true }))

gulp.task("env:dev", (done) => {
  gutil.log('setting "dev" environment')

  process.env.NODE_ENV = "development"
  done()
})

gulp.task("env:prod", (done) => {
  gutil.log('setting "prod" environment')

  process.env.NODE_ENV = "production"
  done()
})

gulp.task("css", () => {
  return gulp
    .src("app/stylus/index.styl")
    .pipe(plumber())
    .pipe(
      stylus({
        use: [autoprefixer()],
        compress: process.env.NODE_ENV === "production",
      })
    )
    .on("error", logError)
    .pipe(
      cssBase64({
        baseDir: ".",
        maxWeightResource: 50000, // So ttf fonts are not included, nice
        extensionsAllowed: [".svg", ".png", ".jpg"],
      })
    )
    .pipe(rename(`${PKG.name}.css`))
    .pipe(gulp.dest(OUTPUT_DIR))
    .pipe(touch())
})

gulp.task("html", (done) => {
  gulp.src("app/index.html").pipe(gulp.dest(OUTPUT_DIR))

  done()
})

gulp.task("resources", (done) => {
  const dst = path.join(OUTPUT_DIR, "resources")

  mkdirp.sync(dst)
  ncp("app/resources", dst, { stopOnErr: true }, (error) => {
    if (error && error[0].code !== "ENOENT")
      throw new Error(`resources copy failed: ${error}`)

    done()
  })
})

gulp.task("bundle", () => {
  return bundle({ watch: false })
})

gulp.task("bundle:watch", () => {
  return bundle({ watch: true })
})

gulp.task("openbrowser", (done) => {
  browserSync({
    server: {
      baseDir: OUTPUT_DIR,
    },
    https: false,
    ghostMode: false,
    files: path.join(OUTPUT_DIR, "**", "*"),
  })

  done()
})

gulp.task("watch", (done) => {
  // Watch changes in HTML
  gulp.watch(["app/index.html"], gulp.series("html"))

  // Watch changes in Stylus files
  gulp.watch(["app/stylus/**/*.styl"], gulp.series("css"))

  // Watch changes in resources
  gulp.watch(["app/resources/**/*"], gulp.series("resources", "css"))

  // Watch changes in JS files
  // gulp.watch([ 'gulpfile.js', 'lib/**/*.js', 'lib/**/*.jsx' ], gulp.series(
  // 	'lint'
  // ));

  done()
})

gulp.task(
  "to-digital:prod",
  gulp.series("env:prod", "clean", "bundle", "html", "css", "resources")
)

gulp.task(
  "to-digital:dev",
  gulp.series("env:dev", "clean", "bundle", "html", "css", "resources")
)

gulp.task(
  "to-digital:live",
  gulp.series(
    "env:dev",
    "clean",
    "bundle:watch",
    "html",
    "css",
    "resources",
    "watch",
    "openbrowser"
  )
)

gulp.task("default", gulp.series("to-digital:prod"))
