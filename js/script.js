$(document).ready(function() {
  tabHabilidadeChecked();
  $('input:radio[name="tab-habilidade"]').change(function() {
    tabHabilidadeChecked();
  });
});

function tabHabilidadeChecked(){
  if (document.getElementById("tab-front-end").checked) {
    document.getElementById("front-end").style.display = "block";
    document.getElementById("link-front-end").classList.add("active");
    document.getElementById("link-front-end").classList.add("border-bottom");
  }else {
    document.getElementById("front-end").style.display = "none";
    document.getElementById("link-front-end").classList.remove("active");
    document.getElementById("link-front-end").classList.remove("border-bottom");
  }
  if (document.getElementById("tab-back-end").checked) {
    document.getElementById("back-end").style.display = "block";
    document.getElementById("link-back-end").classList.add("active");
    document.getElementById("link-back-end").classList.add("border-bottom");
  }else {
    document.getElementById("back-end").style.display = "none";
    document.getElementById("link-back-end").classList.remove("active");
    document.getElementById("link-back-end").classList.remove("border-bottom");
  }
  if (document.getElementById("tab-data-base").checked) {
    document.getElementById("data-base").style.display = "block";
    document.getElementById("link-data-base").classList.add("active");
    document.getElementById("link-data-base").classList.add("border-bottom");
  }else {
    document.getElementById("data-base").style.display = "none";
    document.getElementById("link-data-base").classList.remove("active");
    document.getElementById("link-data-base").classList.remove("border-bottom");
  }
  if(document.getElementById("tab-ferramenta").checked) {
    document.getElementById("ferramenta").style.display = "block";
    document.getElementById("link-ferramenta").classList.add("active");
    document.getElementById("link-ferramenta").classList.add("border-bottom");
  }else {
    document.getElementById("ferramenta").style.display = "none";
    document.getElementById("link-ferramenta").classList.remove("active");
    document.getElementById("link-ferramenta").classList.remove("border-bottom");
  }
  if(document.getElementById("tab-idioma").checked) {
    document.getElementById("idioma").style.display = "block";
    document.getElementById("link-idioma").classList.add("active");
    document.getElementById("link-idioma").classList.add("border-bottom");
  }else {
    document.getElementById("idioma").style.display = "none";
    document.getElementById("link-idioma").classList.remove("active");
    document.getElementById("link-idioma").classList.remove("border-bottom");
  }
}

window.onload = function() {
  typeWriter();
  updateGreetings();
  updateCopyright();
}


//Animação escrita
function typeWriter() {
  const element = document.querySelector(".writer")
  const textArray = element.innerHTML.split('');
  element.innerHTML = '';
  textArray.forEach((letra, i) =>{
    setTimeout(() => element.innerHTML += letra, 75 * i)
  });
}

//Texto automatico saudação
function updateGreetings(){
  const bemvindos = document.querySelector("#boas-vindas")
  const date = new Date().toLocaleTimeString().substring(0,2);
  if(date<=12){
    bemvindos.innerHTML += ", bom dia!"  
  }else if(date<=18){
    bemvindos.innerHTML += ", boa tarde!"  
  }else if(date<=24){
    bemvindos.innerHTML += ", boa noite!"  
  }
}

//Texto automatico copyRight
function updateCopyright() {
  const currentYear = new Date().getFullYear();
  document.getElementById("copyright").innerHTML = `Copyright ${currentYear}. by - Paulo Marques Gonçalves`;
}

window.addEventListener("scroll", ()=>{
  animeScroll();
});

//Animação para o data-anime
const animeScroll = () => {
  const dataAnime = document.querySelectorAll("[data-anime]");
  const windowTop = window.pageYOffset + window.innerHeight * .9;

  dataAnime.forEach(
    (element) => {
      if (windowTop > element.offsetTop) {
        element.classList.add("animate");
      } else {
        element.classList.remove("animate");
      }
    }
  );
};