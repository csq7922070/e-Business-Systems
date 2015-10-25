module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        bower: {
            install: {
                options: {
                    targetDir: 'dist/script/lib',
                    layout: 'byComponent',
                    install: true,
                    verbose: false,
                    cleanTargetDir: false,
                    cleanBowerDir: false,
                    bowerOptions: {}
                }
            }
        },

        concat: {
            index : {
                src: ['src/script/config.js', 'src/script/index.js'],
                dest: 'dist/script/index.js'
            }
        },

        copy: {
            main: {
                files: [
                  { src: ['src/html/index.html'], dest: 'dist/html/index.html', filter: 'isFile' }
                ]
            }
        },

        less: {
            development: {
                files: {
                    "dist/css/index.css": "src/less/index.less"
                }
            }
        },

        watch: {
            files: ['src/**'],
            tasks: ['dist']
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('dist', ['concat', 'copy', 'less']);
    // 默认被执行的任务列表。
    grunt.registerTask('default', ['dist', 'watch']);
};
