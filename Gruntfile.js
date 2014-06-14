module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Definitions Watch
    watch: {

      sass: {
        files: ['scss/*.scss'],
        tasks: ['compass'],
        options: {
          livereload: true,
        }

      },

      js: {
        files: ['jssrc/*.js'],
        tasks: ['concat:js', 'uglify:js'],
        options: {
          livereload: true,
        }

      }
    },

    // Definitions SASS

    compass: {
      dist: {
        options: {
          sassDir: 'scss',
          cssDir: 'css'
          //outputStyle: 'compressed'
        }
      }
    },

    // Definitions JS

    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: [
          'jssrc/*.js'
        ],
        dest: 'js/main.js'
      },
    },
    
    uglify: {
      options: {
        mangle: false
      },
      js: {
        files: {
          'js/main.min.js': ['js/main.js']
        }
      }
    }
  });


  // Load the plugins that provide the tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};