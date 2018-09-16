import { Component } from 'inferno';
import { h } from 'inferno-hyperscript';

import TreeNode from './tree-node';

class Tree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items
    };
  }

  render() {
    let nodes = this.state.items.map(node => {
      return h(TreeNode, {
        node
      , onAction: this.props.onAction
      });
    });
    return h('ul.tree', null, nodes);
  }
}

export default Tree
