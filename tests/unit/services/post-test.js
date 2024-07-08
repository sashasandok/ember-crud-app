import { module, test } from 'qunit';
import { setupTest } from 'ember-crud-app/tests/helpers';

module('Unit | Service | post', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:post');
    assert.ok(service);
  });
});
