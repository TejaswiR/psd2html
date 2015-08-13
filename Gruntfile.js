module.exports = function(grunt) {
          grunt.initConfig({
              sass: {                              // Task 
                 dist: {                            // Target 
                   files: {                         // Dictionary of files 
                      'assets/stylesheets/common.css': 'assets/stylesheets/src/common.scss',      
                      'assets/stylesheets/land.css': 'assets/stylesheets/src/land.scss',      
                      }
                    }
                 },
                 watch:   {
                      css: {
                     files: ['assets/stylesheets/src/*.scss'],
                   tasks: ['sass'],
                 }
              }
         });
    

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default',['sass','watch']);
};