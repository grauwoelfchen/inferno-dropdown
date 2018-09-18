# -- vet

vet\:lint:  ## Lint code in {src,test} using eslint
	npm run lint -- src
	npm run lint -- test --ignore-pattern 'test/build/**/*.js'
.PHONY: vet\:lint


# -- test

test: | test\:unit test\:etoe  ## Run all tests (unit, etoe)
.PHONY: test

test\:unit:  ## Run only unit tests
	npm test
.PHONY: test\:unit

test\:etoe:  ## Run only browser tests
	npm run karma
.PHONY: test\:etoe


# -- build

build:  ## Bundle all into dst using rollup
	npm run build
.PHONY: build


# -- utils

guard:  ## Start watch process for build using rollup
	npm run watch
.PHONY: guard

guard\:test\:unit:  ## Start watch process for unit tests using tape
	npm run watch:test:unit
.PHONY: guard\:test\:unit

guard\:test\:etoe:  ## Start watch process for browser tests using karma
	npm run watch:test:etoe
.PHONY: guard\:test\:etoe

help:  ## Display this message
	@grep -E '^[0-9a-z\:\\]+: ' $(MAKEFILE_LIST) | grep -E '  ## ' | \
	  sed -e 's/\(\s|\(\s[0-9a-z\:\\]*\)*\)  /  /' | tr -d \\\\ | \
	  awk 'BEGIN {FS = ":  ## "}; {printf "\033[36m%-17s\033[0m %s\n", $$1, $$2}' | \
	  sort
.PHONY: help

.DEFAULT_GOAL = build
default: build
