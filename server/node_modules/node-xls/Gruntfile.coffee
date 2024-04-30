module.exports = (grunt) ->
    grunt.initConfig(
        pkg: grunt.file.readJSON('package.json'),
        coffee:
            glob_to_multiple:
                expand: true
                flatten: false
                cwd: 'src'
                src: ['**/*.coffee']
                dest: 'lib'
                ext: '.js'
            
        copy:
            copy_js:
                files:[
                    {cwd:'src',src:['**/*.js'],dest:'lib/',expand:true,flatten:false,filter:'isFile'},                    
                ]

        mochaTest: 
            test: 
                options:
                    reporter: "spec"
                    quiet: false
                    clearRequireCache: false
                src: []        
    )
    
    grunt.loadNpmTasks('grunt-contrib-coffee')
    grunt.loadNpmTasks('grunt-contrib-copy')    
    grunt.loadNpmTasks('grunt-mocha-test')
    #
    grunt.registerTask('default',['coffee','copy:copy_js'])    
    grunt.registerTask('test',['coffee','copy:copy_js','mochaTest'])
    

