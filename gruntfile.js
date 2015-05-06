var path = require('path');

var stylesheetsDir = 'css/';
var javascriptDir = 'js/';

module.exports = function(grunt) {
    //Project configuration
    grunt.initConfig({  
        pkg: grunt.file.readJSON('package.json'),

        stylus: {
            compile: {
                options: {
                    paths: [stylesheetsDir],
                    'include css': true
                },
                files: {
                    'public/app/css/app.min.css': stylesheetsDir + '/*.styl' 
                }
            }
        },

        watch: {
            stylesheets: {
                files: [stylesheetsDir + '/**/*.styl', stylesheetsDir + '/**/*.css'],
                tasks: ['stylus'],
                options: {
                    interrupt: true
                }
            }
        }
    });

    //Load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');

    //Compile Javascript Client-Side and Processing Stylus to CSS
    grunt.registerTask('compile', ['stylus']);

    //Run the server and watch for file changes
    grunt.registerTask('server', ['compile', 'watch'])

    //Default task(s)
    grunt.registerTask('default', ['compile']);
};