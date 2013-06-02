/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('weddInfoBinderIndex', function(Y, NAME) {

  /**
  * The weddInfoBinderIndex module.
  *
  * @module weddInfoBinderIndex
  */

  /**
  * Constructor for the weddInfoBinderIndex class.
  *
  * @class weddInfoBinderIndex
  * @constructor
  */
  Y.namespace('mojito.binders')[NAME] = {

    /**
    * Binder initialization method, invoked after all binders on the page
    * have been constructed.
    */
    init: function(mojitProxy) {
      this.mojitProxy = mojitProxy;
    },

    /**
    * The binder method, invoked to allow the mojit to attach DOM event
    * handlers.
    *
    * @param node {Node} The DOM node to which this mojit is attached.
    */
    bind: function(node) {
      var me = this;
      this.node = node;
      node.all('nav a').plug(Y.Plugin.ScrollNav);
      var contentNodes = Y.all('.content');
      contentNodes.setStyle('height', Y.DOM.winHeight());
    /*  Y.one('body').plug(Y.Plugin.ScrollSpy, {
        "target": "#movingPommeMenu ul",
        "activeClass": "pure-menu-hover"
      });
      */
      Y.on('windowresize', function(evt) {
        console.log('resize');
        Y.log('resize', 'WARN', NAME);
        contentNodes.setStyle('height', Y.DOM.winHeight());
      });
    }

  };

}, '0.0.1', {requires: ['gallery-scroll-nav', 'gallery-scrollspy', 'event', 'event-resize', 'mojito-client']});
