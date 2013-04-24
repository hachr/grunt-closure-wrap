# grunt-closure-wrap

>Provide a simple way to wrap existing javascript file into a simple closure with provided interface.

Note, use this plugin to quickly port an existing large project to be inside a closure. It is not recommended to use this style as the main development since the interface file is not together with the other source files. Although with the modern IDE, it's not really a problem...

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-closure-wrap --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-closure-wrap');
```

## The "closure_wrap" task

### Overview
In your project's Gruntfile, add a section named `closure_wrap` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  closure_wrap: {
    options: {
      src: 'js-file-i-want-to-wrap-inside-a-closure',
      interface: '{ publicMethod1: function(){}, publicMethod2: function(){} }', //this can be a filename that contains the object as well.
      dest: 'my-final-file.js',
      header: 'var MyLibrary = function(){', //start the closure, define the closure-scoped variables here if needed.
      footer: '}();' //close the closure
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  closure_wrap: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  closure_wrap: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
