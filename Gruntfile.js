module.exports = function(grunt) {
  grunt.initConfig({
              sass: {                              // Task 
                 dist: {                            // Target 
                   files: {                         // Dictionary of files 
                    'assets/stylesheets/common.css': 'assets/stylesheets/src/common.scss',  
                    'assets/stylesheets/land.css': 'assets/stylesheets/src/land.scss',     
                    'assets/stylesheets/about.css': 'assets/stylesheets/src/about.scss',      
                  }
                }
              },
              watch:   {
                css: {
                 files: ['assets/stylesheets/src/*.scss'],
                 tasks: ['sass', 'cssmin'],
               }
             },
            //  concat: {
            //   css: {
            //     src: ['assets/stylesheets/common.css', 'assets/stylesheets/land.css'],
            //     dest: 'assets/stylesheets/app.css',
            //   },
            // },
            cssmin: {
              target: {
                files: {
                  'assets/stylesheets/app.min.css' : 
                  [
                  'assets/stylesheets/common.css', 
                  'assets/stylesheets/land.css',
                  'assets/stylesheets/about.css'
                  ],
                }
              }
            }
          });


  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default',['sass','cssmin','watch']);
};