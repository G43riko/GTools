[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/G43riko/GTools/blob/master/LICENSE)
![Size](https://reposs.herokuapp.com/?path=G43riko/GTools)
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

## install
### NodeJS
run `npm install gtools`

```javascript
import { ArrayUtils } from "gtools";

const min = ArrayUtils.min([1, 2, 3]);

```
### browser
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

## list of methods

**TODO**

## structure of src directory

- [index](src/index.html)
- [TestCase](src/TestCase.ts)
- *[dom](src/dom)*
    - [CanvasManager](src/dom/CanvasManager.ts)
    - [CanvasUtils](src/dom/CanvasUtils.ts)
    - [Checkers](src/dom/Checkers.ts)
    - [Get](src/dom/Get.ts)
    - [Get](src/dom/dom/Get.ts)
- *[errors](src/errors)*
    - [GLogger](src/errors/GLogger.ts)
    - [NullPointerException](src/errors/NullPointerException.ts)
- *[utils](src/utils)*
    - [ArrayUtils](src/utils/ArrayUtils.ts)
    - [DomUtils](src/utils/DomUtils.ts)
    - [FileUtils](src/utils/FileUtils.ts)
    - [MathUtils](src/utils/MathUtils.ts)
    - [MiscUtils](src/utils/MiscUtils.ts)
    - [ObjectUtils](src/utils/ObjectUtils.ts)
    - [StringUtils](src/utils/StringUtils.ts)
    - [StringCheckers](src/utils/StringCheckers.ts)
    - [TimeUtils](src/utils/TimeUtils.ts)

    
    