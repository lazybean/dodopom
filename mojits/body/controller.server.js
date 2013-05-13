/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('body', function(Y, NAME) {

  /**
  * The body module.
  *
  * @module body
  */

  /**
  * Constructor for the Controller class.
  *
  * @class Controller
  * @constructor
  */
  Y.namespace('mojito.controllers')[NAME] = Y.Object(Y.mojito.controllers.HTMLFrameMojit);


}, '0.0.1', {requires: ['mojito', 'mojito-util', 'mojito-assets-addon', 'mojito-deploy-addon', 'mojito-config-addon', 'mojito-composite-addon', 'HTMLFrameMojit']});
