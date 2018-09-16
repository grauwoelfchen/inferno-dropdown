// inferno-tree-select's package.json
import { version } from '../../package.json';

import { Component, render } from 'inferno';
import { h } from 'inferno-hyperscript';

import { TreeSelect } from 'inferno-tree-select';

class MyComponent extends Component {
  render() {
    return h('.wrapper',[
      h('.version', 'version: ' + version)
    , h(TreeSelect, {
        beforeDispatch: (transaction) => {
          window.console.log('[beforeDispatch]: ' + transaction);
        }
      , afterDispatch: (transaction) => {
          window.console.log('[afterDispatch]: ' + transaction);
        }
      })
    ]);
  }
}

render(h(MyComponent, {}), document.querySelector('#content'));
