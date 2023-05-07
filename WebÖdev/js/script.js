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
/* slider */
const arrows = document.querySelectorAll(".arrow");
const tarihiList = document.querySelectorAll(".tarihi-mekan-list");

arrows.forEach((arrow, i) => {
  arrow.addEventListener("click", function () {
    tarihiList[i].style.tranform = `translateX(${
      tarihiList[i].computedStyleMap().get("transform")[0].x.value - 300
    }px)`;
  });
});
