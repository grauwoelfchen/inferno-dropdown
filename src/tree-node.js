import { Component, linkEvent } from 'inferno';
import { h } from 'inferno-hyperscript';

function handleClickOnMark(instance, event) {
  let prev = instance.state;

  instance.setState({
    expand: instance.state.node.children.length > 0 && !instance.state.expand
  });

  // stop bubbles
  event.stopImmediatePropagation();
  event.preventDefault();
}

function handleClickOnLabel(instance, event) {
  let prev = instance.state;

  const node = instance.state.node;
  let action = instance.props.onAction;
  action.event(action.data, event, node);

  instance.setState({
    expand: false
  });

  // proparage the event on dropdown
}

class TreeNode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expand: false
    , node: this.props.node
    };
  }

  render() {
    const node = this.state.node;
    let children = null;
    if (!this.state.expand) {
      if (node.children.length > 0) {
        children = h('span', null, [
          h('span.mark', {
            onClick: linkEvent(this, handleClickOnMark)
          }, '+')
        , h('span.label', {
            onClick: linkEvent(this, handleClickOnLabel)
          }, node.label)
        ]);
      } else {
        children = h('span', null, [
          h('span.mark', null, '')
        , h('span.label', {
            onClick: linkEvent(this, handleClickOnLabel)
          }, node.label)
        ]);
      }
    } else {
      children = [
        h('span', null, [
          h('span.mark', {
            onClick: linkEvent(this, handleClickOnMark)
          }, '-')
        , h('span.label', {
            onClick: linkEvent(this, handleClickOnLabel)
          }, node.label)
        ])
      , h('ul.tree', null, node.children.map(c => {
          return h(TreeNode, {
            node: c
          , onAction: this.props.onAction
          });
        }))
      ];
    }
    return h('li.node', null, children);
  }
}

export default TreeNode
