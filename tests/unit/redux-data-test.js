
import { generateActions, generateReducers, reduxApiAction} from 'redux-data-li';
import { module, test } from 'qunit';

module('Unit | Addon ');

test('it exists', function (assert) {
  assert.ok(generateActions);
  assert.ok(reduxApiAction);
  assert.ok(generateReducers);
});
