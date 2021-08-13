// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    navScrollShow();
};

// Get the navbar
let navbar = document.getElementById("nav-scroll");
let searchBox = document.getElementById("search-box");

// Get the offset position of the navbar
let anchorNavScroll = searchBox.offsetHeight + searchBox.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navScrollShow() {
  if (window.pageYOffset >= anchorNavScroll) {
    navbar.classList.add('nav-scroll-show');
} else {
    navbar.classList.remove('nav-scroll-show');
  }
}

let scrollBackButtons = document.querySelectorAll('.top-destination-manager__prev');
let scrollNextButtons = document.querySelectorAll('.top-destination-manager__next');
let scrollLists = document.querySelectorAll('.top-destination__list');

scrollLists.forEach(function(scrollList, index){
    scrollBackButtons[index].style.display = 'none';
    let maxScroll = scrollList.scrollWidth - scrollList.clientWidth;
    if (maxScroll <= 0){
        scrollNextButtons[index].style.display = 'none';
    }
})
scrollNextButtons.forEach((scrollNextButton, index) => {
    let scrollList = scrollLists[index];
    scrollNextButton.onclick = function () {
        scrollList.scrollLeft += scrollList.clientWidth;
        if (scrollList.scrollLeft == 0) {
            this.style.display = 'none';
        }
        scrollBackButtons[index].style.display = 'flex';
    }
});
scrollBackButtons.forEach(function (scrollBackButton, index) {
    let scrollList = scrollLists[index];
    scrollBackButton.onclick = function () {
        scrollList.scrollLeft -= scrollList.clientWidth;
        if (scrollList.scrollLeft == 350) {
            this.style.display = 'none';
        }
        scrollNextButtons[index].style.display = 'flex';
    }
})