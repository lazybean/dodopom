YUI.add('mongo', function (Y, NAME) {
  var mongoose = require('mongoose');

  Y.namespace('db')[NAME] = {
    schema: {},
    connections: {},

    /*
    * create the mongoose schema and return an object to creat and get data
    */
    createSchema: function (schemaObj, schemaName, url) {
      if (!url ) {
        url = process.env.MONGOLAB_URI ||
        process.env.MONGOHQ_URL ||
        "mongodb://localhost/weddingGuests";
      }
      Y.log('createSchema ' + schemaName, 'WARN', NAME);
      var schema,
      model,
      createdSchema = Y.db[NAME].schema[schemaName];


      //schema normalization. we want an object with type at least, not string type 
      Y.Object.each(schemaObj, function (val, key, obj) {
        if (typeof val !== 'object') {
          obj[key] = {type: val};
        }
      });

      Y.log('createSchema createdSchema is ' + createdSchema, 'WARN', NAME);
      if (!createdSchema ) {
        Y.log('createSchema: schema does not exist yet: ' + Y.JSON.stringify(schemaObj), 'WARN', NAME);
        schema = new mongoose.Schema(schemaObj); 
        mongoose.model(schemaName, schema);
        model = mongoose.model(schemaName);
        createdSchema  = {
          model: model,

          getList: function (cb) {
            Y.log('getList ' + schemaName, 'WARN', NAME);
            this.model.find({}, null, {sort: {name: 1}}, cb);
          },
          create: function(obj, cb) {
            Y.log('create ' + schemaName, 'WARN', NAME);
            var newEl = new this.model(obj);
            newEl.save(function (err, data) {
              Y.log('saved: ' + err, 'WARN', NAME);
              cb(err, data);});
          },

          update: function(obj, cb) {
            Y.log('update :' + Y.JSON.stringify(obj), 'WARN', NAME);
            this.model.findByIdAndUpdate(obj.id , obj,  cb);
          },

          connect: function () {
            if( !Y.db[NAME].connections[url] ) {
              Y.db[NAME].connections[url] = true;
              try {
                mongoose.connect(url);
              } catch (error) {
                Y.log('connect ' + url + ' ' + error, 'WARN', NAME);
                Y.db[NAME].connections[url] = false;
              }
            }
          },
          getFields: function(cb) {
            var fields = [];
            Y.Object.each(schemaObj, function (val, key, obj) {
              var field = val;
              field.name = key;
              fields.push(field);
            });
            cb(null, fields);
          },

          findById: function(id, cb) {
            Y.log('findById id: ' + id, 'WARN', NAME);
            this.model.findById(id, cb);
          }

        };

        Y.log('createSchema new createdSchema is ' + Y.JSON.stringify(createdSchema), 'WARN', NAME);
      } 
      Y.db[NAME].schema[schemaName] = createdSchema;
      return createdSchema;
    }
  };
}, '0.0.1', {requires: ['json']});
