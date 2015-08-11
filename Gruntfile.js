module.exports = function(grunt) {
    grunt.initConfig({
  sass: {                              // Task 
    dist: {                            // Target 
      files: {                         // Dictionary of files 
        'styles.css': 'styles.scss',       // 'destination': 'source' 
        }
     }
  },
  watch: {
   css: {
    files: ['*.sass'],
    tasks: ['sass'],
      }
 
    }
});
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default',['sass','watch']);
};