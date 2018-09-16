// inferno-tree-select's package.json
import { version } from '../../package.json';

import { Component, render } from 'inferno';
import { h } from 'inferno-hyperscript';

import { TreeSelect } from 'inferno-tree-select';

import options from '../dat/tree.json';

class MyComponent extends Component {
  render() {
    return h('.wrapper',[
      h('.version', 'version: ' + version)
    , h(TreeSelect, {
        options
      , selected: '1'
      , onSelect: (node) => {
          // eslint-disable-next-line no-console
          console.log(node);
        }
      })
    ]);
  }
}

render(h(MyComponent, {}), document.querySelector('#content'));
