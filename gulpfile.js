var gulp 	= require('gulp'),
	nodemon = require('gulp-nodemon');


gulp.task('default',function(){
	nodemon({
		script:'./server/app.js',
		ext:'js',
		env:{
			PORT:5000,
			ENV:"developement"
		},
		ignore:['./server/node_modules/**','./public/**']
	})
	.on('restart',function(){
		console.log('restarting...')
	});
});