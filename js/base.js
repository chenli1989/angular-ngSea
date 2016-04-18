var version = '20151225';
var versionJS = '20160105';
versionJS = versionJS === '' ? version : versionJS;
var themes_dir = 'js/';
diyou.config({
    alias: {
    },
    preload: ['app'],
    map: [
        [/^(.*(src).*\.js)(.*)$/i, '$1?v=' + versionJS]
    ]
});
