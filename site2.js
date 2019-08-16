/* This verson of jq/js is to be used with index2 */

/* test: alert("Hello! I am an alert box!!");*/


/* For smooth scrolling */
/* $('.smooth').on('click', function() {
    $.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: '#' + this.id
    });

    return false;
}); */

/* from W3Schools */
function myFunction() {
  var x = document.getElementById("menu");
  if (x.className === "myMenu") {
    x.className += " responsive";
  } else {
    x.className = "myMenu";
  }
}
