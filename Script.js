// change theme color
function changeTheme() {
  document.querySelector('body').classList.toggle('dark');
  document.querySelector('body').classList.toggle('light');
  if (document.getElementById("theme-check").checked) {
    document.getElementById('theme-check-bulb').innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
  else {
    document.getElementById('theme-check-bulb').innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}
//scroll left   
const scrollContainer = document.getElementById("scrollHorizontal");
scrollContainer.addEventListener("wheel", (evt) => {
  if (!evt.target.classList.contains("page5")) {
    evt.preventDefault();
    document.querySelector("html, body").scrollTop=0;
  }
  scrollContainer.scrollLeft += (evt.deltaY * (scrollContainer.offsetWidth / 200));
});
//intersctionObserver
let targets = document.getElementsByClassName("page")
let callbackIntersectingPage = (entries, observer) => {
  entries.forEach(entry => {
    // do  something
    
    if(entry.isIntersecting== true){
      currentPage = entry.target.id+"Link";
      let activeMenuItem = document.querySelector(".menu-item a.active");
      activeMenuItem.classList.remove("active");
      let newActiveMenuItem = document.querySelector(".menu-item a."+currentPage);
      newActiveMenuItem.classList.add("active")
      entry.target.children[0].classList.add("fade-in");
      entry.target.children[1].classList.add("fade-in");
    }
    if(entry.isIntersecting == false){
      entry.target.children[0].classList.remove("fade-in");
      entry.target.children[1].classList.remove("fade-in");
    }

  });
};
let optionIntersectingPage={threshold:0.5};

let observerIntersectingPage = new IntersectionObserver(callbackIntersectingPage, optionIntersectingPage);
Array.from(targets).forEach(target=>{
  observerIntersectingPage.observe(target);
});