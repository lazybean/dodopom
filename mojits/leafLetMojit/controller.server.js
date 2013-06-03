/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('leafLetMojit', function(Y, NAME) {

  /**
  * The leafLetMojit module.
  *
  * @module leafLetMojit
  */

  /**
  * Constructor for the Controller class.
  *
  * @class Controller
  * @constructor
  */
  Y.namespace('mojito.controllers')[NAME] = {

    /**
    * Method corresponding to the 'index' action.
    *
    * @param ac {Object} The ActionContext that provides access
    *        to the Mojito API.
    */
    index: function(ac) {
      ac.assets.addCss("http://cdn.leafletjs.com/leaflet-0.5/leaflet.css");
        Y.log('lang: ' + Y.JSON.stringify(ac.intl.lang()), 'WARN', NAME);
        ac.data.set('lang', ac.intl.lang());
        ac.done();
    }

  };

}, '0.0.1', {requires: ['mojito', 'mojito-assets-addon', 'mojito-intl-addon', 'mojito-data-addon']});
