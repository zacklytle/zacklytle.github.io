var defaultTasks = ['sass', 'htmlmin'];

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
                  cwd: 'sass/',
                  src: ['**/*.scss'],
                  dest: 'css/',
                  ext: '.css'
              }]
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
                  'index.html': 'src/index.html'
              }
          }
      },
    // watch for changes (for dev)
    watch: {
      scripts: {
        files: ['sass/**/*.scss', 'src/index.html', '/js/**/*.js', 'Gruntfile.js'],
        tasks: defaultTasks,
        options: {
          debounceDelay: 250
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', defaultTasks);
};
