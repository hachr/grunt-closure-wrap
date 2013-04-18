/*
 * grunt-closure-wrap
 * https://github.com/hachr/grunt-closure-wrap
 *
 * Copyright (c) 2013 hachr
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  grunt.registerMultiTask('closure_wrap', 'Wrap current src content into a closure with provided public interface.', function () {
    var options = this.options({
      src: null,
      interface: '{}',
      dest: 'output.js',
      header: '',
      footer: ''
    });

    var lf = grunt.util.linefeed;
    var header = grunt.template.process(options.header);
    var footer = grunt.template.process(options.footer);

    if (!options.src || options.src === '') {
      grunt.fail.warn(new Error('src must be specified'));
    }

    var src = grunt.file.read(options.src);

    if (!options.interface || options.interface === '') {
      grunt.fail.warn(new Error('interface must be specified'));
    }

    if (src.indexOf(header) === 0 && src.substr(src.length - footer.length) === footer) {
      grunt.log.writeln("Skipped task since it's processed already");
      return;
    }

    var file = grunt.file.exists(options.interface);

    var exposed = file ? grunt.file.read(options.interface) : options.interface;

    grunt.file.write(options.dest, header + lf + src + lf + 'return ' + exposed + lf + footer);

    grunt.log.writeln('File ' + options.dest + ' created');

  });

};
