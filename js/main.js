function newtext() {
    var selectedElement = document.getElementById( 'heading' );
    var newDOMElement = document.createElement( 'article' );
    newDOMElement.innerHTML = '<p>This is click number <a id="clicks">1</a></p>';
    selectedElement.appendChild( newDOMElement );
}
var clicks = 1;
    function onclick() {
        clicks += 1;
        document.getElementById( 'clicks' ).innerHTML = clicks;
    }
heading.addEventListener( 'click', newtext );
