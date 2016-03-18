heading.addEventListener( 'click', tally );

function tally () {
    heading.innerHTML=
    '<p onClick="hi()">This is click number <a id="clicks">1</a></p>';
}
    var clicks = 0;
    function hi () {
        clicks += 1;
        document.getElementbyId( 'clicks' ).innerHTML = clicks;
}
