'use strict';

exports.__esModule = true;

var _colors = require('../utils/colors');

// Colors from https://tailwindcss.com/docs/colors
// @TODO: Generate this palette based on the primary color with something like palx
// Aliases for convenience:
// 'blue' => 'info'
// 'green' => 'success'
// 'red' => 'danger'
exports.default = {
  primary: ['#eff8ff', '#bcdefa', '#6cb2eb', '#3490dc', '#2779bd', '#1c3d5a', '#12283a'],
  gray: ['#ffffff', '#f8fafc', '#f1f5f8', '#dae1e7', '#b8c2cc', '#8795a1', '#606f7b', '#3d4852', '#22292f'],
  red: ['#fcebea', '#f9acaa', '#ef5753', '#e3342f', '#cc1f1a', '#621b18', '#3b0d0c'],
  orange: ['#fff5eb', '#fcd9b6', '#faad63', '#f6993f', '#de751f', '#613b1f', '#462a16'],
  yellow: ['#fcfbeb', '#fff9c2', '#fff382', '#ffed4a', '#f2d024', '#684f1d', '#453411'],
  green: ['#e3fcec', '#a2f5bf', '#51d88a', '#38c172', '#1f9d55', '#1a4731', '#0f2f21'],
  teal: ['#e8fffe', '#a0f0ed', '#64d5ca', '#4dc0b5', '#38a89d', '#20504f', '#0d3331'],
  blue: ['#eff8ff', '#bcdefa', '#6cb2eb', '#3490dc', '#2779bd', '#1c3d5a', '#12283a'],
  indigo: ['#e6e8ff', '#b2b7ff', '#7886d7', '#6574cd', '#5661b3', '#2f365f', '#191e38'],
  purple: ['#f3ebff', '#d6bbfc', '#a779e9', '#9561e2', '#794acf', '#382b5f', '#21183c'],
  pink: ['#ffebef', '#ffbbca', '#fa7ea8', '#f66d9b', '#eb5286', '#6f213f', '#451225'],
  warning: ['#FDF2DA', '#FCE5B6', '#FAD894', '#F6C050', '#C09641', '#5D4924', '#312716'],
  info: ['#eff8ff', '#bcdefa', '#6cb2eb', '#3490dc', '#2779bd', '#1c3d5a', '#12283a'],
  success: ['#e3fcec', '#a2f5bf', '#51d88a', '#38c172', '#1f9d55', '#1a4731', '#0f2f21'],
  danger: ['#fcebea', '#f9acaa', '#ef5753', '#e3342f', '#cc1f1a', '#621b18', '#3b0d0c']
};
module.exports = exports['default'];