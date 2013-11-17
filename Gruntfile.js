/*
 * grunt-revgithash
 * https://github.com/steveax/grunt-revgithash
 *
 * Copyright (c) 2013 Steve Axthelm
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    copy: {
      main: {
        files: [ {expand: true, flatten: true, src: ['test/fixtures/*'], dest: 'tmp/', filter: 'isFile'} ]
      }
    },

    // Configuration to be run (and then tested).
    revgithash: {
      default_options: {
        options: {
        },
        files: {
          src: ['tmp/*.css']
        },
      },
      custom_options: {
        options: {
          ref: 'HEAD~1',
          short: false
        },
        files: {
          src: ['tmp/*js']
        },
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'copy', 'revgithash', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['clean', 'copy', 'revgithash']);

};
