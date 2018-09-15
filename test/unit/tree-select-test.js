import 'jsdom-global/register';
import test from 'tape';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-inferno';

import { h } from 'inferno-hyperscript';

import TreeSelect from '../../src/tree-select';


configure({adapter: new Adapter()});

test('TreeSelect props', (t) => {
  t.plan(1);

  t.equal(1, 1);
});
