Inferno Dropdown
=================

|pipeline| |version|

.. |pipeline| image:: https://gitlab.com/grauwoelfchen/inferno-dropdown/badges/master/pipeline.svg
   :target: https://gitlab.com/grauwoelfchen/inferno-dropdown/commits/master

.. |version| image:: https://img.shields.io/npm/v/inferno-dropdown.svg
   :target: https://www.npmjs.com/package/inferno-dropdown

A dropdown for tree using [Inferno](https://www.infernojs.org/).


Repository
----------

`grauwoelfchen/inferno-dropdown`_ (GitLab.com)

.. _`grauwoelfchen/inferno-dropdown`: https://gitlab.com/grauwoelfchen/inferno-dropdown


Usage
-----

See `example` about detail of usage as Component.

.. code:: javascript

   import {render} from 'inferno';
   import {h} from 'inferno-hyperscript';

   import DropDown from 'inferno-dropdown';

   class MyComponent extedns Component {
      ...

      render() {
         const { data } = this.state;
         return h(DropDown, {data});
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

See `LICENSE_`

.. _`LICENSE`: LICENSE

.. code:: text

   Inferno Dropdown
   Copyright (c) 2018 Yasuhiro Asaka
