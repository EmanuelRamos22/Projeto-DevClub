const form = document.querySelector(".formu");
const mascara = document.querySelector(".mascara-form");

function cliqueiNoBotao() {
  form.style.left = "50%";
  form.style.transform = "translateX(-50%)";
  mascara.style.visibility = "visible";
}

function cliqueiNaMascara() {
  form.style.left = "-300px";
  form.style.transform = "translateX(-5%)";
  mascara.style.visibility = "hidden";
}
