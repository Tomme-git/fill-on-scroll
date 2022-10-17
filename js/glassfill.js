/** 
let scrolled = document.getElementById("scrolled");

scrolled.addEventListener("scroll", function(){
    let scroll = scrolled.scrollTop(),
	docHeight = scrolled.height(),
	winHeight = window.height();

	scrollPercent = (scroll / (docHeight-winHeight)) * 100;
	
	document.getElementsByClassName("wave")[0].style.top = scrollPercent + '%';
})
**/
/*
$(window).scroll(function () {
  let scroll = $(window).scrollTop(),
    docHeight = $(document).height(),
    winHeight = $(window).height(),
    scrollPercent = -(scroll / (docHeight - winHeight)) * 100;
 */
/*
    let scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    let scrollPercent = (scrollBottom / (docHeight - winHeight)) * 100;
    */

let wholeDoc = document.getElementsByTagName("body")[0];
window.onscroll = function () {
  let scroll = window.pageYOffset;
  let docHeight = wholeDoc.clientHeight;
  let winHeight = window.innerHeight;
  let scrollPercent = (scroll / (docHeight - winHeight)) * 100;

  document.getElementsByClassName("wave")[0].style.top =
    "calc(100% - " + scrollPercent + "%)";
};

/*
  $(".wave").css("top", "calc(100% + " + scrollPercent + "%)");
  
});
*/
