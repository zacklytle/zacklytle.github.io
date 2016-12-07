var defaultTasks = ['sass', 'critical', 'watch'];

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
      //critical optimization
      critical: {
          dist: {
              options: {
                  base: './',
                  src: 'src/index.html',
                  dest: 'index.html',
                  inline: true,
                  minify: true,
                  assetPaths: [
                      '/css'
                  ],
                  dimensions: [{
                      width: 480
                  },{
                      width: 736
                  },{
                      width: 1280
                  },{
                      width: 1680
                  }],
                  ignore: ['@font-face']
            }
          }
      },
    // watch for changes (for dev)
    watch: {
      scripts: {
        files: ['src/sass/**/*.scss', 'src/index.html', 'src/js/**/*.js', 'Gruntfile.js'],
        tasks: defaultTasks,
        options: {
          debounceDelay: 250,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-critical');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', defaultTasks);
};
