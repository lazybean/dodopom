/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('guestFormModelFoo', function(Y, NAME) {

  /**
  * The guestFormModelFoo module.
  *
  * @module guestForm
  */

  /**
  * Constructor for the guestFormModelFoo class.
  *
  * @class guestFormModelFoo
  * @constructor
  */
  Y.namespace('mojito.models')[NAME] = {

    init: function(config) {
      this.config = config;
      Y.log('init : ' + Y.JSON.stringify(config), 'WARN', NAME);
      if( config.mongo) {
        Y.log('init: create schema: ' + config.mongo.modelName, 'WARN', NAME); 
        this.model = Y.db.mongo.createSchema( config.mongo.schema, config.mongo.modelName, config.mongo.url);
        this.model.connect();
      }

    },

    /**
    * Method that will be invoked by the mojit controller to obtain data.
    *
    * @param callback {function(err,data)} The callback function to call when the
    *        data has been retrieved.
    */
    getData: function(callback) {
      callback(null, { some: 'data' });
    },

    getGuestsList: function (cb) {
      this.model.getList(cb);
    },

    createGuest: function(obj, cb) {
      this.model.create(obj, cb);
    },

    updateGuest: function(obj, cb) {
      this.model.update(obj, cb);
    },

    getFields: function(cb) {
      this.model.getFields(cb);
    },

    getById: function(id, cb) {
      this.model.findById(id, cb);
    }

  };

}, '0.0.1', {requires: ['mongo']});
