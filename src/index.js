'use strict';

const glob = require('glob');
const chalk = require('chalk');
const rimraf = require('rimraf');
const {Progress, Spinner} = require('clui');

module.exports = {
  // notifier: require('update-notifier'), //does not buld normally :(
  glob,
  rimraf,
  chalk,
  clui:
    {
      Progress,
      Spinner,
    },
};
