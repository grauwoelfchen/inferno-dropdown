import { Component } from 'inferno';
import { h } from 'inferno-hyperscript';

import Input from './input';


function handleClick(instance, event) {
  let prev = instance.state;

  instance.sateState({
    dropdown: !prev.dropdown
  , focused: true
  });
}

// input
function handleFocusIn(instance, event) {
  console.log(event);
}

function handleFocusOut(instance, event) {
  console.log(event);
}

class TreeSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdown: false
    , focused: false
    };
  }

  render() {
    return h('.tree-select', null, [
      h('a', {
        onClick: linkEvent(this, handleClick)
      }, h(Input, {
        onFocusIn: linkEvent(this, handleFocusIn)
      , onFocusOut: linkEvent(this, handleFocusOut)
      }))
    ]);
  }
}

export {
  TreeSelect
}
