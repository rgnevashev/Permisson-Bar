Package.describe({
  name: 'rgnevashev:permisson-bar',
  version: '1.5.0',
  summary: 'Permission Bar is a free & simple solution to the EU cookie law',
  git: 'https://github.com/bomba5884/Permisson-Bar',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.addAssets(['logo.png','prompt-bg.png','x.png'], 'client');
  api.addFiles([
    "permissionbar-latest.js",
    "permissionbar.css"
  ], 'client');
});
