const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

// counter //
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
  let initial_count = 0;
  const final_count = counter.dataset.count;
  const counting = setInterval(updateCounting, 60);

  function updateCounting() {

    if (initial_count < 1000) {
      initial_count += 10;
      counter.innerText = initial_count;
    }

    if (initial_count >= 1000) {
      initial_count += 100;
      counter.innerText = initial_count / 100 + 'K+';
    }
    else {
      initial_count * 1000;
      counter.innerText = initial_count / 10 + '+';
    }

    if(initial_count >= final_count){
      clearInterval(counting);
    }
  }
});
// counter //

// const counters = document.querySelectorAll(".counter");
// counters.forEach(counter => {
//   let initial_count = 0;
//   const final_count = counter.dataset.count;
//   const counting = setInterval(updateCounting, 1);

//   function updateCounting() {

//     if (initial_count < 1000) {
//       initial_count += 5;
//       counter.innerText = initial_count;
//     }

//     if (initial_count >= 1000) {
//       initial_count += 100;
//       counter.innerText = initial_count / 100 + 'K+';
//     }
    
//     if (initial_count >= 1000) {
//       initial_count += 100;
//       counter.innerText = initial_count / 100 + 'K+';
//     }

//     if(initial_count >= final_count){
//       clearInterval(counting);
//     }
//   }
// });


// ------------------- Zoom-image --------------------- //
const modal = document.getElementsByClassName('idMyModal');
const img = document.getElementsByClassName('toZoom');
const modalImg = document.getElementsByClassName('modal-content');
for ( let i = 0; i < img.length; i++ ) {
  img[i].onclick = function () {
    modal[i].style.display = "block";
    modalImg[i].src = this.src;
  }
}

var span = document.getElementsByClassName("close");
for ( let i = 0; i < span.length; i++ ) {
  span[i].onclick = function() { 
    modal[i].style.display = "none";
  }
}
// ------------------- Zoom-image --------------------- //

// ------------------ Owl-carousel ------------------- //
$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});

// ------------------ Owl-carousel ------------------- //