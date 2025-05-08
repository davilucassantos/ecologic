// Navbar
function menuOn() {
  const navBar = document.getElementById("navbar");
  navBar.classList.toggle("nav-on");

}

// Modo Escuro
function modoEscuro() {
  const icon = document.getElementsByClassName("icon")
  const section = document.getElementsByClassName("section")
  const sectionText = document.getElementsByClassName("section-text")
  const navTopBottom = document.getElementsByClassName("nav-top-bottom")
  const infografico = document.getElementsByClassName("infografico")

  Array.from(sectionText).forEach((item) => {
    item.classList.toggle("dark")
  })
  
  Array.from(section).forEach((item) => {
    item.classList.toggle("dark")
  })

  Array.from(icon).forEach((item) => {
    item.classList.toggle("dark")
  })

  Array.from(navTopBottom).forEach((item) => {
    item.classList.toggle("dark")
  })

  Array.from(infografico).forEach((item) => {
    item.classList.toggle("dark")
  })
}

// document.addEventListener("DOMContentLoaded", function(event) {
  
// });

// Botão de Voltar
const btnTopo = document.getElementById("voltar-btn");

window.onscroll = function () {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
};

btnTopo.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};