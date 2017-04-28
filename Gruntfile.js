module.exports = function(grunt) {

  // Load Grunt tasks declared in the package.json file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    
    bump: {  
      options: {
        files: [
          'package.json',
          'defs/*.json'
        ],
        //updateConfigs: ['pkg'],
        //createTag: false,
        //commit: false,
        push: false,
        //push: true,
        commitFiles: ['-a']
      }
    }

  });

};
