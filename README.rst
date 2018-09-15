Inferno Tree Select
===================

|pipeline| |version|

.. |pipeline| image:: https://gitlab.com/grauwoelfchen/inferno-tree-select/badges/master/pipeline.svg
   :target: https://gitlab.com/grauwoelfchen/inferno-tree-select/commits/master

.. |version| image:: https://img.shields.io/npm/v/inferno-tree-select.svg
   :target: https://www.npmjs.com/package/inferno-tree-select

A select for tree using Inferno_.

.. _`Inferno`: https://www.infernojs.org/


Repository
----------

`grauwoelfchen/inferno-tree-select`_ (GitLab.com)

.. _`grauwoelfchen/inferno-tree-select`: https://gitlab.com/grauwoelfchen/inferno-tree-select


Usage
-----

See `example` about detail of usage as Component.

.. code:: javascript

   import {render} from 'inferno';
   import {h} from 'inferno-hyperscript';

   import TreeSelect from 'inferno-tree-select';

   class MyComponent extedns Component {
      ...

      render() {
         const { data } = this.state;
         return h(TreeSelect, {data});
      }
   }


Development
-----------

Build
~~~~~

.. code:: zsh

   % make build

Lint
~~~~

.. code:: zsh

   % make vet:lint


Test
----

Unit Test
~~~~~~~~~

.. code:: zsh

   % make test:unit

Browser (EtoE) Test
~~~~~~~~~~~~~~~~~~~

.. code:: zsh

   % make test:etoe

   : if you have `xvfb-run` (for Docker on CI etc.)
   % xvfb-run make test:etoe


License
-------

This program is free software: you can redistribute it and/or modify it
under the terms of the MIT License.

See `LICENSE`_

.. _`LICENSE`: LICENSE

.. code:: text

   Inferno Tree Select
   Copyright (c) 2018 Yasuhiro Asaka
