Package.describe({
  name: 'mordka:leaflet-extended-div-icon',
  version: '1.0.0',
  summary: 'L.ExtendedDivIcon - Adds the ability to set the id and style of the element created by L.DivIcon',
  git: 'https://github.com/mordka/leaflet-extended-div-icon',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
  api.use("bevanhunt:leaflet@1.0.3");
  api.addFiles('leaflet-extended-div-icon.js','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mordka:leaflet-extended-div-icon');
  api.addFiles('leaflet-extended-div-icon-tests.js','client');
});
