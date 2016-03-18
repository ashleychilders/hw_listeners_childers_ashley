function changeHTML () {
    var title = document.getElementById( 'heading' );
    title.innerHTML = 'Hello! My name is Rebecca!';
}

heading.addEventListener( 'click', changeHTML );

/*This is an event listener to change my name from Ashley to Rebeccca on heading click */

function addHTML () {
    var happy = document.getElementById( 'likes' );
    var newDOMElement = document.createElement( 'article' );
    newDOMElement.innerHTML = '<p>I love Daniel!</p>';
    happy.appendChild( newDOMElement );
}

likes.addEventListener( 'mouseover', addHTML );
/*This adds the text I love Daniel continuously to my interests with mouseover*/

document.getElementById( 'message' ).addEventListener( 'click', showDate );

function showDate () {
    document.getElementById( 'datetest' ).innerHTML = Date();
}
/*This adds the date when you select email me*/
