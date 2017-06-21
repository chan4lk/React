const gulp = require('gulp');
const es6Pipeline = require('./gulpfile.pipeline');

es6Pipeline.registerBuildGulpTasks(
  gulp,
  {
    entryPoints: {
      build: `${__dirname}/main.js`
    },
    outputDir: `${__dirname}/dist`
  }
);
