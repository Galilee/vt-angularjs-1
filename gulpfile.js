'usr strict';

var gulp = require('gulp');
var browserify = require('browserify');
var nodeResolve = require('resolve');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');

var browserDependencies = [
  'angular',
  'angular-ui-router',
];

function npmPackages() {
  var dependenciesObj = require('./package.json').dependencies;

  return Object.keys(dependenciesObj).filter(function(element) {
    return browserDependencies.indexOf(element) != -1;
  });
}

/**
 * Utilisation de browserify
 * - Création d'un seul fichier pour le code javascript de l'application
 * - Se base sur les "require" dans le "src/app.js"
 */
gulp.task('application', [], function() {
  var b = browserify('./src/app.js');

  npmPackages().forEach(function (id) { b.external(id); });

  var stream = b.bundle().pipe(source('app.js'));

  return stream.pipe(gulp.dest('public/dist'));
});

/**
 * Utilisation de browserify
 * - Création d'un seul fichier pour le code javascript des dépendances node utilisées dans le browser
 * - Utilise le "browserDependencies" et "npmPackages()" pour lister les dépendances FRONT
 * - Se base sur les "require" des dépendances
 */
gulp.task('vendor', [], function() {
  var b = browserify();

  npmPackages().forEach(function (id) {
    b.require(nodeResolve.sync(id), { expose: id });
  });

  var stream = b.bundle().pipe(source('vendor.js'));

  return stream.pipe(gulp.dest('public/dist'));
});

/**
 * Tâche par défaut lancée lors de l'appel à la commande "gulp"
 */
gulp.task('default', ['vendor', 'application'], function() {
  console.log('Fin des tâches automatisées');
});