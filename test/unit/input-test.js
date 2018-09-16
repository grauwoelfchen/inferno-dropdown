import 'jsdom-global/register';
import test from 'tape';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-inferno';

import { h } from 'inferno-hyperscript';

import Input from '../../src/input';

configure({adapter: new Adapter()});

test('Input props', (t) => {
  let output;

  output = h(Input);
  t.equal(output.props.data, undefined);

  const data = [{}];
  output = h(Input, {data});
  t.equal(output.props.data, data);

  let wrapper;

  wrapper = mount(h(Input));
  t.equal(wrapper.props.data, undefined);

  wrapper = mount(h(Input, {data}));
  t.equal(wrapper.props().data, data);

  t.end();
});

test('Input renders ul', (t) => {
  const data = [{}];
  const wrapper = mount(h(Input, {data}));

  const tag = wrapper.find('input');
  t.assert(tag.is('input'));

  t.end();
});
