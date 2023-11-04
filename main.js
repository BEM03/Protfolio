const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 750) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})


let nav = document.querySelector("nav");
    window.onscroll = function() {
      if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
      }else {
        nav.classList.remove("sticky");
      }
}
var typed = new Typed(".auto-type",{
  strings : ["Web developer", "Freelancer", "student"],
  typeSpeed : 150,
  backSpeed : 150,
  looped : true
})