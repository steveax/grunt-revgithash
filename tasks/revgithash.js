/*
 * grunt-revgithash
 * https://github.com/steveax/revgithash
 *
 * Copyright (c) 2013 Steve Axthelm
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs'),
    path = require('path');

module.exports = function(grunt) {

  grunt.registerMultiTask('revgithash', 'Rename files by prefixing the hash of current git commit', function() {

    var done = this.async(),
        self = this,
        revision,
        renameFiles,
        getSHA;

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      ref: 'HEAD',
      short: true
    });

    renameFiles = function () {
      var tallyfiles = 0;
      grunt.log.writeln('Renaming files... ');

      self.files.forEach(function(f) {
        f.src.forEach(function(filepath) {

          tallyfiles++;

          var renamed = [revision, path.basename(filepath)].join('.'),
              destfile = path.resolve(path.dirname(filepath), renamed);

          fs.renameSync(filepath, destfile);

          // Print a success message.
          grunt.log.write(filepath + ' ').ok(renamed);
        });
      });

      grunt.log.writeln('Renamed ' + tallyfiles.toString().cyan + ' files.');
      done(true);
    }

    getSHA = function () {
      grunt.log.write('Getting git revision... ');
      grunt.util.spawn({
        cmd: 'git',
        args: ['rev-parse', options.short && '--short', options.ref].filter(Boolean)
      }, function(err, result) {
        if (err) {
          grunt.log.error(err);

          return done(false);
        }

        revision = result.toString();

        grunt.log.ok();
        grunt.log.subhead(options.ref.magenta + ' at revision ' + revision.toString().cyan);

        renameFiles();
      });
    }

    getSHA();
  });
};
