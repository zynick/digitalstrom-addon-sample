/* http://redmine.digitalstrom.org/projects/dss/wiki/DSS_addon_framework_introduction */

Ext.define('DSS.addon.Sample', {
  extend: 'DSS.addon.Framework',

  config: {
    appName: 'Sample',  // automatically translated if the string is in your dss-addon.po
    appIcon: 'default_icon.png',
    appVersion: '0.0.1',
    appId: 'sample',
    dSSVersion: ''
  },

  getContent: function() {
    /* TODO: return instantiated content object of type Ext.Component */
    return null;
    // return Ext.create("DSS.addon.Sample.MainPanel", Ext.apply({ id: 'sample-main-panel' }, this.config));
  },

  getHelp: function() {
    return Ext.create('Ext.Component', {
      whiteSpace: 'normal',
      padding: '0 20 0 0', //top right bottom left
      loader: {
        // url: 'locale/' + dss.staticDataModel.activeLanguage + '/help.html',
        url: 'locale/default/help.html',
        autoLoad: true,
        disableCaching: false
      }
    });
  }

});

Ext.onReady(function() {
  // dss.buildUpLang(['locale/{languageSuffix}/dss-addon.po']);
  var sample = Ext.create('DSS.addon.Sample');
  sample.initPage();
});
