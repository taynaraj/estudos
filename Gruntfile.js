module.exports = function( grunt ) {
 
  grunt.initConfig({
    
    uglify :{
    	options : {
    		mangle : false
    	},

    	target : {
    		files : {
    			'assets/js/main.js' : [ 'assets/_js/scripts.js' ]
    		}
    	}
    }, //uglifly

    sass : {
    	dist : {
    		options : {
    			style : 'compressed'
    		},
    		files : {
    			'assets/css/style.css' : 'assets/_css/style.sass'
    		}
    	}
    }, //sass

     watch : {
      dist : {
        files : [
          'assets/_js/**/*',
          'assets/_css/**/*'
        ],

        tasks : [ 'uglify', 'sass' ]
      }
    } // watch

  });

  //Plugins do Grunt
  grunt.loadNpmTasks ('grunt-contrib-uglify');
  grunt.loadNpmTasks ('grunt-contrib-sass');
  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  //Tarefas que serão executadas
  grunt.registerTask('default',['uglify','sass']);

  //Tarefa para watch do grunt
  grunt.registerTask( 'w', [ 'watch' ]) ;

};