'use strict';

module.exports = function(grunt){

  grunt.initConfig({
    sass: {
        dist: {
            files: {
              'assets/css/main.css' : 'src/styles/main.scss',
            }
        },
        options: {
          outputStyle: 'compressed'
        }
    },
    watch: {
      scss: {
        files: 'src/styles/*.scss',
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  
  grunt.registerTask('default', ['sass', 'watch']);

};
