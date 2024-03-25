const app = require( "express" )();
const PORT = process.env.PORT || 3000;
app. get(" "
, (reg, res) =
res. send ("Hello world");
}) ;
app. listen (PORT, () →> {
console. log('App up at port ${PORT}');
});
