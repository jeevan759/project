var mongoose= require('mongoose');
var config=require('../config/config')

module.exports = {
    connect : function(){
    
        mongoose.connect(config.mongo_connection_string, { useNewUrlParser: true, useUnifiedTopology: true});
        console.log(config.mongo_connection_string);
        console.log('in connect lib');
        mongoose.connection.on('connected', function(){
            console.log("Mongodb Connected");
        })
    }
}