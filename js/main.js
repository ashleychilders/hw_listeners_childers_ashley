function newtext() {
    var newDOMElement = document.createElement( 'article' );
    newDOMElement.innerHTML = ( '<p>This is click number</p><p id="clicks">1</p>' );
    document.body.appendChild( newDOMElement );
}
heading.addEventListener( 'click', newtext );

var counter = 1;
