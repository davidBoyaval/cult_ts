// Gruntfile.js

module.exports = (grunt) => {
    grunt.initConfig({
        execute: {
            target: {
                src: ['ModelDAO/BddConnectionMySQL.js']
            }
        },
        watch: {
            scripts: {
                files: ['ModelDAO/BddConnectionMySQL.js'],
                tasks: ['execute'],
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-execute');
};