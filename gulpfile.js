var gulp = require('gulp');

gulp.task('default', ['builder']);

gulp.task('builder', function(cb) {
    var path = require("path");
    var Builder = require('systemjs-builder');

    var builder = new Builder({
        defaultJSExtensions: true,
        baseURL: './',
        map: {
            'angular2': 'node_modules/angular2',
            'rxjs': 'node_modules/rxjs'
        },
        transpiler: 'node_modules/typescript'
    });

    builder.buildStatic('app/main.js', 'app.min.js', { minify: true })
        .then(function() {
            console.log('Build complete');
            cb();
        })
        .catch(function(err) {
            console.log('Build error');
            console.log(err);
        });
});