# Inferno Tree Select

[![pipeline status][status]][commit] [![npm version][version]][npm]

[status]: https://gitlab.com/grauwoelfchen/inferno-tree-select/badges/master/pipeline.svg
[commit]: https://gitlab.com/grauwoelfchen/inferno-tree-select/commits/master
[version]: https://img.shields.io/npm/v/inferno-tree-select.svg
[npm]: https://www.npmjs.com/package/inferno-tree-select

A select for tree using [Inferno](https://www.infernojs.org/).


## Repository

[grauwoelfchen/inferno-tree-select](
https://gitlab.com/grauwoelfchen/inferno-tree-select) (GitLab.com)


## Usage

See `example` about detail of usage as Component.

```javascript
import { render } from 'inferno';
import { h } from 'inferno-hyperscript';

import TreeSelect from 'inferno-tree-select';

class MyComponent extedns Component {
  ...

  render() {
     const { options } = this.state;
     return h(TreeSelect, {
       options
     , onSelect: (node) => { console.log(node); }
     });
  }
}
```

## Development

### Build

```zsh
% make build
```

### Lint

```zsh
% make vet:lint
```


## Test

### Unit Test

```zsh
% make test:unit
```

### Browser (EtoE) Test

```zsh
% make test:etoe

: if you have `xvfb-run` (for Docker on CI etc.)
% xvfb-run make test:etoe
```


## License

This program is free software: you can redistribute it and/or modify it
under the terms of the MIT License.

See [LICENSE](LICENSE).

```
Inferno Tree Select
Copyright (c) 2018 Yasuhiro Asaka
```
