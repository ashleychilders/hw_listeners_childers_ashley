function changeHTML () {
    var title = document.getElementById( 'heading' );
    title.innerHTML = 'Hello! My name is Rebecca!';
}

heading.addEventListener( 'click', changeHTML );

/*This event listener listens for click on heading and then changes my
name from Ashley to Rebeccca*/

function addHTML () {
    var happy = document.getElementById( 'likes' );
    var newDOMElement = document.createElement( 'article' );
    newDOMElement.innerHTML = '<p>I love Daniel!</p>';
    happy.appendChild( newDOMElement );
}

likes.addEventListener( 'mouseover', addHTML );
/*This event listener listens to mouseover on the interests header and adds the text I love Daniel*/

document.getElementById( 'message' ).addEventListener( 'click', showDate );

function showDate () {
    document.getElementById( 'datetest' ).innerHTML = Date();
}
/*This is an event listener listens for a click on the email me button and displays the date*/
