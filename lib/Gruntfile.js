module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      js: {
        src: ['../javascripts/main.js'],
        dest: '../dist/app.js'
      }
    },
    jshint: {
      options: {
        predef: [ "document", "console", "$" ],
        esnext: true,
        strict: "global",
        globals: {"movieDB": true},
        browserify: true
      },
      files: ['../javascripts/**/*.js']
    },
    sass: {
      dist: {
        files: {
          '../css/main.css': '../sass/main.scss'
        }
      }
    },
    connect: {
      server: {
        options: {
          base: '../',
          hostname: 'localhost',
          port: 3000,
          livereload: true,
          open: true
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      index: {
        files: ["../index.html"]
      },
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'connect','watch']);
};