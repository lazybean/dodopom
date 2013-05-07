/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('guestForm', function(Y, NAME) {

  Y.log('Am I called once? ' + new Date(), 'WARN', NAME);
  /**
  * The guestForm module.
  *
  * @module guestForm
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
      ac.models.get('guestFormModelFoo').getData(function(err, data) {
        if (err) {
          ac.error(err);
          return;
        }
        ac.assets.addCss('./index.css');
        ac.done({
          status: 'Mojito is working.',
          data: data
        });
      });
    },

    create: function(ac) {
      var obj = ac.params.getFromBody(),
      me = this;
      Y.log('guestForm create: '+ obj);
      ac.models.get('guestFormModelFoo').createGuest(obj, function (){me.list(ac);});
    },

    list: function (ac) {
      ac.models.get('guestFormModelFoo').getGuestsList( function (err, data) {
        if (!err) {
          Y.log('list cb: ' + data, 'WARN', NAME);
          ac.done({"guests": data});
        } else {
          ac.done({error: 1});
        }
      });
    }

  };

}, '0.0.1', {requires: ['mojito', 'mojito-assets-addon', 'mojito-models-addon', 'mojito-params-addon',  'guestFormModelFoo']});
