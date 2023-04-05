// Javascript from w3 schools
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_slide
// When the user scrolls down a designated distance from the top of the document, slide down the navbar 

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}
