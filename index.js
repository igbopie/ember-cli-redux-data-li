'use strict';

module.exports = {
  name: 'ember-cli-redux-data-li',
  included (app) {
    this._super.included.apply(this, arguments)

    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    app.import('node_modules/redux-data-li/dist/index.js', {
      using: [
        { transformation: 'cjs', as: 'redux-data-li'}
      ]
    });
  },
};
