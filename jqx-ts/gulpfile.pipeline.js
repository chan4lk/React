'use strict';

const gutil = require('gulp-util');
const webpack = require('webpack');
const config = require('./webpack.config');
const releaseConfig = require('./webpack.config.release');

const handleWebpackOutput = (err, stats) => {
  if (err) throw new gutil.PluginError('es6Pipeline', err);
  gutil.log('[es6Pipeline]', stats.toString({
    colors: true,
    chunks: false
  }));
};

const getDevCompiler = options => webpack(config(options));

const getReleaseCompiler = options => webpack(releaseConfig(options));

const registerBuildGulpTasks = (gulp, options) => {
  gulp.task('build:dev', (done) => {
    const compiler = getDevCompiler(options);
    compiler.run((err, stats) => {
      handleWebpackOutput(err, stats);
      done();
    });
  });

  gulp.task('build:release', (done) => {
    const compiler = getReleaseCompiler(options);
    compiler.run((err, stats) => {
      handleWebpackOutput(err, stats);
      done();
    });
  });

  gulp.task('build:watch', ['build:dev'], () => {
    const compiler = getDevCompiler(options);
    compiler.watch({
      aggregateTimeout: 300, // wait so long for more changes
      poll: 2000 // windows needs polling to pick up changes :(
    }, (err, stats) => {
      handleWebpackOutput(err, stats);
    });
  });
};

module.exports = {
  registerBuildGulpTasks,
  getDevCompiler,
  getReleaseCompiler
};