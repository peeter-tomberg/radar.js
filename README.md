# Radar
--------------

A small service locator library

## Installation
```
bower install radar
```

### Setup requirejs
```javascript
    var requirejs = {
        "paths": {
            "Radar" : "bower_components/radar/src"
        }
    };

```

### Setup

You can use Radars global service locator

```javascript
    var ServiceLocator = require('Radar/Radar');
    ServiceLocator.set('key', 'value');
    ServiceLocator.get('key') // value
```

Or you can instantiate your own

```javascript
    var Locator = require('Radar/Locator');
    var ServiceLocator = new Locator();
```