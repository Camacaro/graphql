
const mongose = require('mongoose');

mongose.connect( 'mongodb://user-graphql:123456abc@ds231723.mlab.com:31723/grapql-course', {
    
    useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true

}, ( err ) => {
    
    if (err) {
        throw err;
    }

    console.log('Base de datos ONLINE');
});
