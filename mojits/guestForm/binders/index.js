/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('guestFormBinderIndex', function(Y, NAME) {

/**
 * The guestFormBinderIndex module.
 *
 * @module guestFormBinderIndex
 */

    /**
     * Constructor for the guestFormBinderIndex class.
     *
     * @class guestFormBinderIndex
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

        submitForm: function(evt) {
          var form = evt.target,
          formData = {
            "name": form.get('name').get('value'),
            "firstName": form.get("firstName").get('value'),
            "veget": form.get('veget').get('value'),
            "needHotel": form.get('needHotel').get('value'),
            "hotelStart": form.get('hotelStart').get('value'),
            "hotelEnd": form.get('hotelEnd').get('value'),
            "lang": form.get('lang').get('value')
          };
          this.mojitProxy.invoke('create', {"params":{"body":formData}});
          evt.preventDefault();
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

            node.one('form').on('submit', this.submitForm, this);
            /**
             * Example code for the bind method:
             *
             * node.all('dt').on('mouseenter', function(evt) {
             *   var dd = '#dd_' + evt.target.get('text');
             *   me.node.one(dd).addClass('sel');
             *
             * });
             * node.all('dt').on('mouseleave', function(evt) {
             *   
             *   var dd = '#dd_' + evt.target.get('text');
             *   me.node.one(dd).removeClass('sel');
             *
             * });
             */
        }


    };

}, '0.0.1', {requires: ['event', 'mojito-client']});
