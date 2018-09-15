import { Component } from 'inferno';
import { h } from 'inferno-hyperscript';


class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return h('ul.tag-list', null, [
      h('li', null, 'text')
    ]);
  }
}

export default Input
