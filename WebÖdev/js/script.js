const searchForm = document.querySelector(".search-form");
const navbar = document.querySelector(".navbar");

/* buton */

const searchBtn = document.querySelector("#search-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(searchBtn) &&
      !e.composedPath().includes(searchForm)
    ) {
      searchForm.classList.remove("active");
    }
  });
});
menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(menuBtn) &&
      !e.composedPath().includes(navbar)
    ) {
      navbar.classList.remove("active");
    }
  });
});
/* slider 448*/
const arrows = document.querySelectorAll(".arrow");
const tarihiList = document.querySelectorAll(".tarihi-mekan-list");

arrows.forEach((arrow, i) => {
  const widthRatio = Math.floor(window.innerWidth / 300)
  let clickCounter = 0;
  const imageItem = tarihiList[i].querySelectorAll("img").length;
  
  arrow.addEventListener("click", function () {
    clickCounter++;
    if (imageItem - (4 + clickCounter) + (4 - widthRatio) >= 0) {
      tarihiList[i].style.transform = `translateX(${
        tarihiList[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      tarihiList[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
  console.log(window.innerWidth)
});
