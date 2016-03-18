function changeHTML () {
    var title = document.getElementById( 'heading' );
    title.innerHTML = 'Hello! My name is Rebecca!';
}

heading.addEventListener( 'click', changeHTML );

function addHTML () {
    var happy = document.getElementById( 'likes' );
    var newDOMElement = document.createElement( 'article' );
    newDOMElement.innerHTML = '<p>I love Daniel!</p>';
    happy.appendChild( newDOMElement );
}

likes.addEventListener( 'mouseover', addHTML );

document.getElementById( 'message' ).addEventListener( 'click', showDate );

function showDate () {
    document.getElementById( 'datetest' ).innerHTML = Date();
}
