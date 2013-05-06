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
      if (this.count) { this.count += 1; }
      else { this.count = 1; } 
      Y.log('init: ' + this.count, 'WARN', NAME);
      this.config = config;
      //Y.guestModel.connect(config.db.mongodb);
      try {
        Y.guestModel.connect();
      } catch(e) {
        Y.log('error: cannot connect: ' + e); 
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
