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
    // update DOM with inventory
    getItems();
} // end addItem

function getItems(){
    console.log( 'in getItems' );
    // select ul & empty
    // make GET call to server
    // loop through response
    // append each item to TOM
} // end getItems

function onReady(){
    getItems();
    $( '#addItem' ).on( 'click', addItem );
} // end onReady