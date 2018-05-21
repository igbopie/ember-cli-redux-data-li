
import reduxData from 'redux-data-li';
import { module, test } from 'qunit';

module('Unit | Addon ');

test('it exists', function (assert) {
  assert.ok(reduxData);
  assert.ok(reduxData.generateActions);
  assert.ok(reduxData.reduxApiAction);
  assert.ok(reduxData.generateReducers);
});
