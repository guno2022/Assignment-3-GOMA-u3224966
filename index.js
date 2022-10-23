//mortion for each section.
let topNav = document.querySelectorAll(".section-link");
for(let i=0; i<topNav.length; i++){
    topNav[i].addEventListener("click", goToSection);
}
function goToSection(){
    let target = document.querySelector(this.dataset.target);
    target.scrollIntoView();
}

//move to top
const pagetop_btn = document.querySelector(".pagetop");

// input from user
pagetop_btn.addEventListener("click", scroll_top);

// mortion
function scroll_top() {
  window.scroll({ top: 0, behavior: "smooth" });
}

// when it shows
window.addEventListener("scroll", scroll_event);
function scroll_event() {
  if (window.pageYOffset > 100) {
    pagetop_btn.style.opacity = "1";
  } else if (window.pageYOffset < 100) {
    pagetop_btn.style.opacity = "0";
  }
}



// $('theme001').animate({'fontSize': '80px' , 'font-weight': 'bold'}, 7000);

$('#image_move').fadeIn(5000);