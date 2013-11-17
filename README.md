# grunt-revgithash

> Rename files in place by prepending the hash of a git commit

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-revgithash --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-revgithash');
```

## The "revgithash" task

### Overview
In your project's Gruntfile, add a section named `revgithash` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  revgithash: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.ref
Type: `String`
Default value: `'HEAD'`

A string value that specifies the git revision that will be used for the hash.

#### options.short
Type: `Boolean`
Default value: `'true'`

A Bool value that is used to signify whether to use the short or long hash.

### Usage Examples

#### Default Options
In this example, the default options are used and the files will have the short git hash of `HEAD` prepended to their name.

```js
grunt.initConfig({
  revgithash: {
    options: {
    },
    files: {
      [
        'tmp/*.css',
        'tmp/*.js'
      ],
    },
  },
})
```

#### Custom Options
In this example, custom options are used to specify a git ref other than `HEAD` and to use the long git hash to prepend to their name.

```js
grunt.initConfig({
  revgithash: {
    options: {
      ref: 'HEAD~2',
      short: false
    },
    files: {
      [
        'tmp/*.css',
        'tmp/*.js'
      ],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* 2013-11-17 Initial Release
