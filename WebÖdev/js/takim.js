const images = ["tiy.jpg", "tiy2.jpg", "tiy3.jpg"];
let index = 0;
changeBackground();
function changeBackground() {
  index = (index + 1) % images.length;
  const url = "url('" + images[index] + "')";
  document.getElementById("bg-image").style.backgroundImage = url;
}

setInterval(changeBackground, 5000);
/*
const progressBar = document.getElementById("filler");
let progress = 0;

function fillProgressBar() {
  progress++;
  progressBar.style.width = progress + "%";

  if (progress >= 100) {
    progress = 0;
    setTimeout(fillProgressBar, 10);
  }
}

setInterval(fillProgressBar, 50);*/