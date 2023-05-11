const arrows = document.querySelectorAll(".arrow");
const tarihiList = document.querySelectorAll(".tarihi-mekan-list");

  arrows.forEach((arrow, i) => {
    const widthRatio = Math.floor(window.innerWidth / 300);
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
    console.log(window.innerWidth);
  });
 
