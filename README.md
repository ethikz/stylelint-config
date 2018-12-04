stylelint-config [![npm version](https://badge.fury.io/js/%40ethikz%2Fstylelint-config.svg)](https://badge.fury.io/js/%40ethikz%2Fstylelint-config)
===
[![NPM](https://nodei.co/npm/@ethikz/stylelint-config.png?compact=true)](https://nodei.co/npm/@ethikz/stylelint-config/)

This package provides a base .stylelintrc as an extensible shared config.


### stylelint-config

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `stylelint`.

If you use yarn, run `npm info "@ethikz/stylelint-config@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency. See below for npm instructions.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "@ethikz/stylelint-config@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev @ethikz/stylelint-config
  ```

  If using **npm < 5**, Linux/OSX users can run

  ```sh
  (
    export PKG='@ethikz/stylelint-config';
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
    npm install --save-dev @ethikz/stylelint-config stylelint@^#.#.#
  ```

  If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev stylelint-config
  ```

  The cli will produce and run a command like:

  ```sh
  npm install --save-dev @ethikz/stylelint-config stylelint@^#.#.#
  ```

2. Add `"extends": "@ethikz/stylelint-config"` to your .stylelintrc.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .stylelintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
