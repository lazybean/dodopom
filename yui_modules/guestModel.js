/*YUI.add('guestModel', function (Y, NAME) {

  Y.mongoose = require('mongoose');

  var Schema = Y.mongoose.Schema,
  ObjectId = Y.mongoose.Schema.ObjectId,
  mongodb = "mongodb://localhost/weddingGuests",            
  */
  /* Schema Definition */ 
  /*Guest = new Schema({
    name:  { type: "String", required: true },  
    firstName: "String",
    veget: "Boolean",
    needHotel: "Boolean",
    hotelStart: { type: "Date" },
    hotelEnd: { type: "Date"},
    lang: "String"
  }); 

  Y.log('compiling model Guests', 'WARN', NAME);
  Y.mongoose.model('Guests', Guest);

  
  Y.guestModel = {};
  Y.guestModel.Guest = Y.mongoose.model('Guests');

  Y.guestModel.connect = function() { //mongodb) {
    Y.mongoose.connect(mongodb);
  };

  Y.guestModel.getList = function (callback) {
    Y.log('getList', 'WARN', NAME);
    Y.guestModel.Guest.find({}, null, {sort: {name: 1}} , callback); 
  };
  Y.guestModel.createGuest = function (guestObj, callback) {
    Y.log('guestModel createGuest: ' + guestObj);
    var newGuest = new Y.guestModel.Guest(guestObj);
    newGuest.save(callback);
  };
});
*/
