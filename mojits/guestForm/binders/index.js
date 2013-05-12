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


    onListDataReceived: function ( err, data) { 
      if (this.datatable ) {
        this.datatable.data  = data.data;
      } else { 
      var fields = [];
      Y.Object.each(data.fields, function (val, key, obj) {
        fields.push(val.name); 
      });
      this.datatable  = new Y.DataTable({
        'data': data.data,
        'columns': fields
      }).render(this.nodeTable); 
      }
    },
    createDatatable: function(){
      var me = this;
      this.mojitProxy.invoke('list', Y.bind(this.onListDataReceived, this));
    },
    submitForm: function(evt) {
      var form = evt.target,
      formData = {
        "name": form.get('name').get('value'),
        "firstName": form.get("firstName").get('value'),
        "email": form.get("email").get('value'),
        "veget": form.get('veget').get('value'),
        "needHotel": form.get('needHotel').get('value'),
        "hotelStart": form.get('hotelStart').get('value'),
        "hotelEnd": form.get('hotelEnd').get('value'),
        "lang": form.get('lang').get('value')
      };
      this.mojitProxy.invoke('create', {"params":{"body":formData}}, Y.bind(this.onListDataReceived, this));
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
      this.nodeTable = this.node.one('.datatable');
      this.dateInput = node.one('input[type="date"]');
      node.one('form').on('submit', this.submitForm, this);
      this.createDatatable();
      this.cal = new Y.PopupCalendar({
        input: this.dateInput 
      });
    }


  };

}, '0.0.1', {requires: ['event', 'datatable', 'popup-calendar', 'mojito-client']});
