// generated on 2019-07-12 using generator-webapp 4.0.0-6
const { src, dest, watch, series, parallel, lastRun } = require('gulp')
const gulpLoadPlugins = require('gulp-load-plugins')
const fs = require('fs')
const mkdirp = require('mkdirp')
const Modernizr = require('modernizr')
const browserSync = require('browser-sync')
const del = require('del')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const { argv } = require('yargs')
const webpack = require('webpack')
const gulpWebpack = require('webpack-stream')
const colors = require('colors')
const named = require('vinyl-named')

const sass = require('gulp-dart-sass')
sass.compiler = require('sass')

const imagemin = require('gulp-imagemin')

const ESLintPlugin = require('eslint-webpack-plugin')

const plumber = require('gulp-plumber')
const args = require('./args')
const ENV = args.production ? 'production' : 'development'

const $ = gulpLoadPlugins()
const server = browserSync.create()

const port = argv.port || 9000

const isProd = process.env.NODE_ENV === 'production'
const isTest = process.env.NODE_ENV === 'test'
const isDev = !isProd && !isTest

function styles () {
  return src('app/styles/*.scss')
    .pipe($.plumber())
    .pipe($.if(!isProd, $.sourcemaps.init()))
    .pipe(sass().on('error', function (error) {
      log(colors.red('Error (' + error.plugin + '): ' + error.message))
      this.emit('end')
    }))
    .pipe($.postcss([
      autoprefixer()
    ]))
    .pipe($.if(!isProd, $.sourcemaps.write()))
    .pipe(dest('.tmp/styles'))
    .pipe(server.reload({ stream: true }))
};

function scripts () {
  return src('app/scripts/*.js')
    .pipe(plumber({
      // Webpack will log the errors
      errorHandler () {}
    }))
    .pipe(named())
    .pipe(gulpWebpack({
      devtool: args.sourcemaps ? 'inline-source-map' : false,
      watch: args.watch,
      mode: 'development',
        plugins: [
          new ESLintPlugin(),
          new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(ENV),
            'process.env.VENDOR': JSON.stringify(args.vendor)
          })
        ],
      module: {
        rules: [{
          test: /\.js$/,
          loader: 'babel-loader'
        }]
      }
    },
    webpack,
    (err, stats) => {
      if (err) return
      console.log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
        chunks: false,
        colors: true,
        cached: false,
        children: false
      }))
    }))
    .pipe(dest('.tmp/scripts'))
    .pipe(server.reload({ stream: true }))
};

async function modernizr () {
  const readConfig = () => new Promise((resolve, reject) => {
    fs.readFile(`${__dirname}/modernizr.json`, 'utf8', (err, data) => {
      if (err) reject(err)
      resolve(JSON.parse(data))
    })
  })
  const createDir = () => new Promise((resolve, reject) => {
    mkdirp(`${__dirname}/.tmp/scripts`).then(() => {
      resolve()
    }).catch(err => {
      reject(err)
    })
  })
  const generateScript = config => new Promise((resolve, reject) => {
    Modernizr.build(config, content => {
      fs.writeFile(`${__dirname}/.tmp/scripts/modernizr.js`, content, err => {
        if (err) reject(err)
        resolve(content)
      })
    })
  })

  const [config] = await Promise.all([
    readConfig(),
    createDir()
  ])
  await generateScript(config)
}

const lintBase = files => {
  return src(files)
    .pipe($.eslint({ fix: true }))
    .pipe(server.reload({ stream: true, once: true }))
    .pipe($.eslint.format())
    .pipe($.if(!server.active, $.eslint.failAfterError()))
}
function lint () {
  return lintBase('app/scripts/**/*.js')
    .pipe(dest('app/scripts'))
};
function lintTest () {
  return lintBase('test/spec/**/*.js')
    .pipe(dest('test/spec'))
};

function html () {
  return src('app/**/*.html')
    .pipe($.useref({ searchPath: ['.tmp', 'app', '.'] }))
    //.pipe($.if(/\.js$/, $.uglify({ compress: { drop_console: true } })))
    .pipe($.if(/\.css$/, $.postcss([cssnano({ safe: true, autoprefixer: false })])))
    /*.pipe($.if(/\.html$/, $.htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: { compress: { drop_console: true } },
      processConditionalComments: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    })))*/
    .pipe(dest('dist'))
}

function images () {
  return src('app/images/**/*', { since: lastRun(images) })
    .pipe(imagemin())
    .pipe(dest('dist/images'))
};

function assets () {
  return src('app/assets/**/*', { since: lastRun(assets) })
    .pipe(dest('dist/assets'))
};

function fonts () {
  return src('app/fonts/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe($.if(!isProd, dest('.tmp/fonts'), dest('dist/fonts')))
};

function extras () {
  return src([
    'app/*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(dest('dist'))
};

function clean () {
  return del(['.tmp', 'dist'])
}

function measureSize () {
  return src('dist/**/*')
    .pipe($.size({ title: 'build', gzip: true }))
}

const build = series(
  clean,
  parallel(
    //lint,
    series(parallel(styles, scripts, modernizr), html),
    images,
    assets,
    fonts,
    extras
  ),
  measureSize
)

function startAppServer () {
  server.init({
    notify: false,
    port,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/node_modules': 'node_modules'
      }
    }
  })

  watch([
    'app/**/*.html',
    'app/images/**/*',
    'app/assets/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', server.reload)

  watch('app/styles/**/*.scss', styles)
  watch('app/scripts/**/*.js', scripts)
  watch('modernizr.json', modernizr)
  watch('app/fonts/**/*', fonts)
}

function startTestServer () {
  server.init({
    notify: false,
    port,
    ui: false,
    server: {
      baseDir: 'test',
      routes: {
        '/scripts': '.tmp/scripts',
        '/node_modules': 'node_modules'
      }
    }
  })

  watch('app/scripts/**/*.js', scripts)
  watch(['test/spec/**/*.js', 'test/index.html']).on('change', server.reload)
  watch('test/spec/**/*.js', lintTest)
}

function startDistServer () {
  server.init({
    notify: false,
    port,
    server: {
      baseDir: 'dist',
      routes: {
        '/node_modules': 'node_modules'
      }
    }
  })
}

let serve
if (isDev) {
  serve = series(clean, parallel(styles, scripts, modernizr, fonts), startAppServer)
} else if (isTest) {
  serve = series(clean, scripts, startTestServer)
} else if (isProd) {
  serve = series(build, startDistServer)
}

exports.serve = serve
exports.build = build
exports.default = build
