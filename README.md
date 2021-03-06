[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/G43riko/GTools/blob/master/LICENSE)
![REPO SIZE](https://img.shields.io/github/repo-size/G43riko/GTools.svg?style=flat-square)
![CODE SIZE](https://img.shields.io/github/languages/code-size/G43riko/GTools.svg?style=flat-square)
[![Build Status](https://api.travis-ci.org/G43riko/GTools.svg?branch=master)](https://travis-ci.org/G43riko/GTools)
[![Coverage Status](https://coveralls.io/repos/github/G43riko/GTools/badge.svg?branch=master)](https://coveralls.io/github/G43riko/GTools?branch=master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/bbb0af52dcd730cdc422/test_coverage)](https://codeclimate.com/github/G43riko/GTools/test_coverage)
[![Code Climate](https://codeclimate.com/github/G43riko/GTools.svg)](https://codeclimate.com/github/G43riko/GTools)
[![GitHub version](https://badge.fury.io/gh/G43riko%2FGTools.svg)](https://badge.fury.io/gh/G43riko%2FGTools)
[![npm version](https://badge.fury.io/js/gtools.svg)](https://badge.fury.io/js/gtools)
[![Dependency Status](https://david-dm.org/G43riko/GTools.svg)](https://david-dm.org/G43riko/GTools)
[![devDependencies Status](https://david-dm.org/G43riko/GTools/dev-status.svg)](https://david-dm.org/G43riko/GTools?type=dev)
[![HitCount](http://hits.dwyl.io/G43riko/GToools.svg)](http://hits.dwyl.io/G43riko/GToools)

# GTools
[![NPM](https://nodei.co/npm/gtools.png)](https://www.npmjs.com/package/gtools)

[Documentation](https://g43riko.github.io/GTools/)

## Contents

* [Installation](#installation)
     * [NodeJS](#nodejs)
     * [Browser](#browser)
* [List of methods](#list-of-methods)
* [Structure of src directory](#structure-of-src-directory)
* [Release steps](#release-steps)

## Installation
### NodeJS
run `npm install gtools`

```javascript
import { ArrayUtils } from "gtools";

const min = ArrayUtils.min([1, 2, 3]);

```
### Browser
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Test</title>
        <script type="text/javascript" src="gtools.web.js"></script>
    </head>
    <body>
        <script type="text/javascript">
        
        const min = G.array.min([1, 2, 3]);
        </script>
    </body>
</html>
```

## List of methods

**TODO**
##Implements
https://github.com/G43riko/JavaUtils/blob/master/GLib2/src/main/java/org/utils/QuadIterator.java
https://github.com/G43riko/JavaUtils/tree/master/GLib2/src/main/java/org/utils/noises
https://github.com/G43riko/JavaUtils/blob/master/GLib2/src/test/java/org/glib2/math/Bresenhams3D.java
https://github.com/G43riko/JavaUtils/blob/master/GLib2/src/main/java/org/utils/GeometryUtils.java



## Structure of src directory

- [index](src/index.html)
- [MockData](src/MockData.ts)
- *[components](src/components)*
    - [FileManager](src/components/file-manager.ts)
    - [paginator](src/components/paginator.ts)
- *[dom](src/dom)*
    - [CanvasManager](src/dom/canvas-manager.ts)
    - [CanvasUtils](src/dom/canvas-utils.ts)
    - [Checkers](src/dom/deprecated/Checkers.ts)
    - [ElementBuilder](src/dom/element-builder.ts)
    - [DomGet](src/dom/dom-get.ts)
- *[enums](src/enums)*
    - [encodings](src/enums/enodings.enum.ts)
    - [file-types](src/enums/file-types.enum.ts)
    - [http-status-codes](src/enums/http-status-codes.enum.ts)
    - [keys](src/enums/keys.enum.ts)
- *[errors](src/errors)*
    - [GLogger](src/components/logger/g-logger.ts)
    - [NotBrowserException](src/errors/not-browser.exception.ts)
    - [NullPointerException](src/errors/null-pointer.exception.ts)
    - [WrongParameterException](src/errors/wrong-parameter.exception.ts)
    - [WrongTypeException](src/errors/wrong-type.exception.ts)
- *[math](src/math)*
    - [Vector2f](src/math/vector2f.ts)
- *[models](src/models)*
    - [gender](src/models/gender.ts)
- *[utils](src/utils)*
    - [ArrayUtils](src/utils/deprecated/ArrayUtils.ts)
    - [DomUtils](src/utils/DomUtils.ts)
    - [FileUtils](src/utils/FileUtils.ts)
    - [MathUtils](src/utils/deprecated/MathUtils.ts)
    - [MiscUtils](src/utils/deprecated/MiscUtils.ts)
    - [ObjectUtils](src/utils/deprecated/ObjectUtils.ts)
    - [ProcessUtils](src/utils/deprecated/ProcessUtils.ts)
    - [Runtime](src/utils/Runtime.ts)
    - [StringCheckers](src/utils/deprecated/StringCheckers.ts)
    - [StringUtils](src/utils/deprecated/StringUtils.ts)
    - [TimeUtils](src/utils/time-utils.ts)

## Release steps
1. change version in `package.json`
2. run all tests with `npm test`
3. run `npm run release`
4. run `npm publish`
5. commit and push data to [github](https://github.com/G43riko/GTools)
6. wait for the build to complete on [travis](https://travis-ci.org/G43riko/GTools) and check for success
7. create new release on [github](https://github.com/G43riko/GTools/releases)
