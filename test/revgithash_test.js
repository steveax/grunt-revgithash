'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.revgithash = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },

  default_options: function(test) {
    test.expect(2);

    var re1 = /[a-z0-9]{7}.testing-min.css/;
    var re2 = /[a-z0-9]{7}.testing.css/;
    var cssfiles = grunt.file.expand({cwd: 'tmp'}, '*.css').sort();

    var test1 = re1.test(cssfiles[0]);
    var test2 = re2.test(cssfiles[1]);

    test.ok(test1, 'should prepend a 7 digit short hash to testing-min.css');
    test.ok(test2, 'should prepend a 7 digit short hash to testing.css');

    test.done();
  },

  custom_options: function(test) {
    test.expect(2);
    var re1 = /[a-z0-9]{40}.123.456-min.js/;
    var re2 = /[a-z0-9]{40}.123.js/;

    var jsfiles = grunt.file.expand({cwd: 'tmp'}, '*.js').sort();

    var test1 = re1.test(jsfiles[0]);
    var test2 = re2.test(jsfiles[1]);

    test.ok(test1, 'should prepend a 40 digit long hash to 123.456-min.js');
    test.ok(test2, 'should prepend a 40 digit long hash to 123.js');

    test.done();
  }
};
