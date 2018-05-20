'use strict';

exports.__esModule = true;
exports.default = {
  popupContent: {
    tooltip: {
      position: 'absolute',
      zIndex: 99,
      width: '200px',
      // background: `rgb(255, 255, 255)`,
      border: '1px solid rgb(187, 187, 187)',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 3px'
      // padding: "5px"
    },
    menu: {
      position: 'fixed',
      zIndex: '99',
      width: '100%',
      padding: 0
    }
  },
  popupArrow: {
    height: '10px',
    width: '10px',
    position: 'absolute',
    background: 'rgb(255, 255, 255)',
    transform: 'rotate(45deg)',
    margin: '-5px',
    zIndex: 98,
    boxShadow: 'rgba(0, 0, 0, 0.2) 1px 1px 1px'
  },
  trigger: {
    cursor: 'pointer'
  },
  overlay: {
    tooltip: {
      zIndex: 98,
      position: 'fixed',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0'
    }
  }
};
module.exports = exports['default'];