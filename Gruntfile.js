'use strict';

module.exports = function(grunt){

  grunt.initConfig({
    sass: {
        dist: {
            files: {
                'assets/css/main.css' : 'src/styles/*.scss',
            }

        }
    },
  });

  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['sass']);

};
