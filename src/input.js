import { Component } from 'inferno';
import { h } from 'inferno-hyperscript';

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return h('input');
  }
}

export default Input
