
import reduxData from 'ember-cli-redux-data';
import { module, test } from 'qunit';

module('Unit | Addon ');

test('it exists', function (assert) {
  assert.ok(reduxData);
  assert.ok(reduxData.generateActions);
  assert.ok(reduxData.reduxApiAction);
  assert.ok(reduxData.generateReducers);
});
