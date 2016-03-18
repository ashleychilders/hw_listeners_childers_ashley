var selectedElement = document.getElementById( 'heading' );
var newDOMElement = document.createElement( 'article' );

heading.addEventListener( 'click', tally );

function tally () {
    newDOMElement.innerHTML = '<p>This is click number <a id="clicks">1</a></p>';
    selectedElement.appendChild( newDOMElement );

    var clicks = 0;
    function onclick () {
        clicks += 1;
        document.getElementbyId( 'clicks' ).innerHTML = clicks;
    }

}
