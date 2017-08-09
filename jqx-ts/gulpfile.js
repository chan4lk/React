const gulp = require('gulp');
const es6Pipeline = require('./gulpfile.pipeline');

es6Pipeline.registerBuildGulpTasks(
  gulp, {
    entryPoints: {
      'app.bundle': `${__dirname}/src/main.tsx`
    },
    outputDir: `${__dirname}/dist`
  }
);
