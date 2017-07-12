# Tether-Password

[![Build Status](https://travis-ci.org/petrofeed/tether-password.svg?branch=master)](https://travis-ci.org/petrofeed/tether-password)
[![NPM](https://img.shields.io/npm/v/tether-password.svg)](https://www.npmjs.com/package/tether-password)
[![Downloads](https://img.shields.io/npm/dm/tether-password.svg)](http://npm-stat.com/charts.html?package=tether-password)
[![guidelines](https://tether.github.io/contribution-guide/badge-guidelines.svg)](https://github.com/tether/contribution-guide)

Hash and verify passwords using Argon2 algorithm

## Usage

```js
const password = require('tether-password')

// return hashed buffer
const hash = password('thisismysecret')

// verify password against stored buffer and return buffer if verified
password('thisismysecret', hash)
```

## Installation

```shell
npm install tether-password --save
```

[![NPM](https://nodei.co/npm/tether-password.png)](https://nodei.co/npm/tether-password/)


## Question

For support, bug reports and or feature requests please make sure to read our
<a href="https://github.com/tether/contribution-guide/blob/master/community.md" target="_blank">community guidelines</a> and use the issue list of this repo and make sure it's not present yet in our reporting checklist.

## Contribution

The open source community is very important to us. If you want to participate to this repository, please make sure to read our <a href="https://github.com/tether/contribution-guide" target="_blank">guideline</a> before making any pull request. If you have any related project, please let everyone know in our wiki.
## License


The MIT License (MIT)

Copyright (c) 2017 Tether Inc

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
