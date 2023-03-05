const progress = document.getElementById("progress");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

btnNext.addEventListener("click", () => {
  currentActive < circles.length && currentActive++;

  update();
});

btnPrev.addEventListener("click", () => {
  currentActive > 1 && currentActive--;

  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width = `${
    ((actives.length - 1) / (circles.length - 1)) * 100
  }%`;

  if (currentActive === 1) {
    btnPrev.disabled = true;
  } else if (currentActive === circles.length) {
    btnNext.disabled = true;
  } else {
    btnPrev.disabled = false;
    btnNext.disabled = false;
  }
}
