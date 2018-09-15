import { test } from 'tape';

import { h } from 'inferno-hyperscript';

import '../../dst/index';

test('TODO', (t) => {
  t.plan(2);

  t.equal(2, 2);
  t.assert(window.browser !== null);
});
