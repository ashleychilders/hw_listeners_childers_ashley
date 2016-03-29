function newtext() {
    var newDOMElement = document.createElement( 'p' );
    newDOMElement.innerHTML = 'This is click number ' + counter;
    document.body.appendChild( newDOMElement );
}
heading.addEventListener( 'click', newtext );

var counter = 1;
