// requires
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();

// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

// globals
const port = 3000;
let inventory = [];

// spin up server
app.listen( port, ()=>{
    console.log( 'server is up:', port );
}) // end server up

// routes
app.get( '/inventory', ( req, res )=>{
    console.log( '/inventory GET hit' );
    res.send( inventory );
}) // end /inventory GET

app.post( '/inventory', ( req, res )=>{
    console.log( req.body );
    inventory.push( req.body );
    res.sendStatus( 201 );
}) // end /inventory POST