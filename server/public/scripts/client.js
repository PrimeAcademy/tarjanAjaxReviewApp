$( document ).ready( onReady );

function addItem(){
    console.log( 'in addItem' );
    // get user input & place in an object
    const objectToSend = {
        size: $( '#sizeIn' ).val(),
        color: $( '#colorIn' ).val(),
        description: $( '#descriptionIn' ).val()
    } 
    console.log( 'sending:', objectToSend );
    // send obj to server via POST thru AJAX
    $.ajax({
        method: 'POST',
        url: '/inventory',
        data: objectToSend
    }).then( function( response ){
        console.log( 'back from server with:', response );
        // update DOM with inventory
        getItems();
    }).catch( function( err ){
        alert( 'problem!' );
        console.log( err );
    }) // end ajax POST 
} // end addItem

function getItems(){
    console.log( 'in getItems' );
    // select ul & empty
    let el = $( '#inventoryOut' );
    el.empty();
    // make GET call to server
    $.ajax({
        method: 'GET',
        url: '/inventory'
    }).then( function( response ){
        console.log( 'back from GET:', response );
        // loop through response
        for( let i=0; i<response.length; i++ ){
            // append each item to DOM
            el.append( `<li>
                ${ response[ i ].size }
                ${ response[ i ].color }:
                ${ response[ i ].description }
                </li>` );
        } // end for
    }).catch( function( err ){
        console.log( err );
        alert( 'nope' );
    }) // end AJAX
} // end getItems

function onReady(){
    getItems();
    $( '#addItem' ).on( 'click', addItem );
} // end onReady