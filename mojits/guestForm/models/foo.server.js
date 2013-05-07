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
      //Y.guestModel.connect(config.db.mongodb);
      if( config.mongoUrl && Y.mongoose[config.mongoUrl] !== true) {
        try {
          Y.mongoose.connect(config.mongoUrl);
          Y.mongoose[config.mongoUrl] = true;
        } catch(e) {
          Y.log('error: cannot connect: ' + e); 
        }
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

    getGuestsList: Y.guestModel.getList,

    createGuest: Y.guestModel.createGuest

  };

}, '0.0.1', {requires: ['guestModel']});
