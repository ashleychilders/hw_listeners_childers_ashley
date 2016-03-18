function onclick() {
    var selectedElement = document.getElementById( 'heading' );
    var newDOMElement = document.createElement( 'article' );
    newDOMElement.innerHTML = '<p>This is click number <a href id="clicks">1</a></p>';
    selectedElement.appendChild( newDOMElement );
}
heading.addEventListener( 'click', onclick );
