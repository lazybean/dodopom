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
      ac.models.get('guestFormModelFoo').getFields(function(err, data) {
        if (err) {
          ac.error(err);
          return;
        }
        ac.assets.addCss('./index.css');
        ac.done({
          "fields": data
        });
      });
    },
    /**
    * Method return an guest update form
    *
    * @param ac {Object} The ActionContext that provides access
    *        to the Mojito API.
    */
    updateForm: function(ac) {
      var id = ac.params.getFromUrl('id');
      if ( id ) {
      ac.models.get('guestFormModelFoo').getById(id, function(err, data) {
        
        if ( !err ) {
        ac.done(data);
        } else {
        ac.done({error:'Guest not found'});
        }
      });
      } else {
        ac.done({error:'Who are you?'});
      }

    },

    create: function(ac) {
      var obj = ac.params.getFromBody(),
      model = ac.models.get('guestFormModelFoo'),
      me = this;
      Y.log('guestForm create: '+ Y.JSON.stringify(obj), 'WARN', NAME);
      model.createGuest(obj, function (){me.list(ac);});
    },


    updateFormPost: function(ac) {
      var obj = ac.params.getFromBody(),
      model = ac.models.get('guestFormModelFoo'),
      me = this;
      Y.log('guestForm update :'+ Y.JSON.stringify(obj), 'WARN', NAME);
      model.updateGuest(obj, function (err, data){
        Y.log('guestForm upddated:'+ Y.JSON.stringify(obj) + '\n err: ' + err , 'WARN', NAME);
        if (err) {
          ac.done({'error': err});
        } else {
          ac.done(data, 'updateSuccess');
        }});
    },

    list: function (ac) {
      var model = ac.models.get('guestFormModelFoo');
      model.getGuestsList( function (err, data) {
        Y.log('list callback', 'WARN', NAME);
        if (!err) {
          Y.log('list cb: ' + data, 'WARN', NAME);
          model.getFields(function(err, fields ){
            ac.done({"data": data, "fields": fields}, 'json');
          });
        } else {
          ac.done({error: 1});
        }
      });
    }

  };

}, '0.0.1', {requires: ['mojito', 'mojito-assets-addon', 'mojito-models-addon', 'mojito-params-addon',  'guestFormModelFoo']});
