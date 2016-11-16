module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		eslint: {
			options: {
				outputFile: 'example/example-report.html',
				format: './lib/detailed.js'
			},
			target: ['test/**/*.js']
		}
	});

	grunt.registerTask('default', ['eslint']);
};