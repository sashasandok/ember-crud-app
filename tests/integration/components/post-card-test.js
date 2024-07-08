import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-crud-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | post-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<PostCard />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <PostCard>
        template block text
      </PostCard>
    `);

    assert.dom().hasText('template block text');
  });
});
