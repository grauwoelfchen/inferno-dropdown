import 'jsdom-global/register';
import test from 'tape';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-inferno';

import { h } from 'inferno-hyperscript';

import Tree from '../../src/tree';

configure({adapter: new Adapter()});

test('Tree props', (t) => {
  let output;

  output = h(Tree);
  t.equal(output.props.items, undefined);

  const items = [{}];
  output = h(Tree, {items});
  t.equal(output.props.items, items);

  let wrapper;

  wrapper = mount(h(Tree));
  t.equal(wrapper.props.items, undefined);

  wrapper = mount(h(Tree, {items}));
  t.equal(wrapper.props().items, items);

  t.end();
});
