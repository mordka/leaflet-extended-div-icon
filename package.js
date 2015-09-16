Package.describe({
  name: 'mordka:leaflet-extended-div-icon',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'L.ExtendedDivIcon - Adds the ability to set the id and style of the element created by L.DivIcon',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use("bevanhunt:leaflet@1.0.3");
  api.addFiles('leaflet-extended-div-icon.js','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mordka:leaflet-extended-div-icon');
  api.addFiles('leaflet-extended-div-icon-tests.js','client');
});
