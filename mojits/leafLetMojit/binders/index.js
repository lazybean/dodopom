/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('leafLetMojitBinderIndex', function(Y, NAME) {

  /**
  * The leafLetMojitBinderIndex module.
  *
  * @module leafLetMojitBinderIndex
  */

  /**
  * Constructor for the leafLetMojitBinderIndex class.
  *
  * @class leafLetMojitBinderIndex
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
      var me = this,
      map, hotel, church;
      this.node = node;

      // create a map in the "map" div, set the view to a given place and zoom
      map = L.map('venueMap').setView([22.6, 120.3], 12);
      this.mojitProxy.listen('resize', function(){ 
        console.log('resize');
        map.invalidateSize(true);
        map.setView([22.64, 120.3], 12);
      });

      // add an OpenStreetMap tile layer
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      node.all('.location').each(function(el) {
        var marker = L.marker( [el.getAttribute('data-lat'), el.getAttribute('data-lng')]).addTo(map)
          .bindPopup(el.one('h3').get('innerHTML'));

        el.on('click', function(evt) {
          marker.openPopup();
          map.setView(marker.getLatLng(), 14);
          });
      });

    }

  };

}, '0.0.1', {requires: ['leaflet', 'mojito-client']});
