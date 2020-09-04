// requires
const express = require( 'express' );
const app = express();

// uses
app.use( express.static( 'server/public' ) );

// globals
const port = 3000;

// spin up server
app.listen( port, ()=>{
    console.log( 'server is up:', port );
}) // end server up