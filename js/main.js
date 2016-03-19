function newtext() {
    var selectedElement = document.getElementById( 'heading' );
    var newDOMElement = document.createElement( 'article' );
    newDOMElement.innerHTML = ( '<p>This is click number</p><p id="clicks">1</p>' );
    selectedElement.appendChild( newDOMElement );
}
heading.addEventListener( 'click', newtext );

var counter = 1;
function add() {
    return counter += 1;
}

function myFunction () {
    document.getElementById( 'clicks' ).innerHTML = add();
}
