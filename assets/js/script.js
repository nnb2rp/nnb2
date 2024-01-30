let year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

let hour = new Date().getHours();

if (hour >= 6 && hour < 18) {
  document.body.style.backgroundImage =
    "url('./assets/imagens/background_day.jpg')";
}