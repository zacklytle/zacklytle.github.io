var defaultTasks = ['sass','inline', 'htmlmin'];

module.exports = function(grunt) {
  grunt.initConfig({
      // compile scss files
      sass: {
          dist: {
              options: {
                  sourcemap: 'none',
                  style: 'compressed'
              },
              files: [{
                  expand: true,
                  cwd: 'src/sass/',
                  src: ['**/*.scss'],
                  dest: 'css/',
                  ext: '.css'
              }]
          }
      },
      inline: {
          dist: {
              options: {
                  cssmin: true,
                  tag: '',
                  uglify: true
              },
              src: 'src/index.html',
              dest: 'index.html'
          }
      },
      htmlmin: {
          dist: {
              options: {
                  removeComments: true,
                  collapseWhitespace: true,
                  minifyCSS: true,
                  minifyJS: true,
                  minifyURLs: {}
              },
              files: {
                  'index.html': 'index.html'
              }
          }
      },
    // watch for changes (for dev)
    watch: {
      scripts: {
        files: ['src/sass/**/*.scss', 'src/index.html', '/js/**/*.js', 'Gruntfile.js'],
        tasks: defaultTasks,
        options: {
          debounceDelay: 250
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-inline');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', defaultTasks);
};
