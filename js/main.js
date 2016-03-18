heading.addEventListener( 'click', tally );

function tally () {
    heading.innerHTML =
    '<p>This is click number <a id="count" onClick="onClick()">1</a></p>';

    var count = 1;
    function onClick () {
        count++;
        document.getElementbyId( 'count' ).innerHTML = count;
    }
}
