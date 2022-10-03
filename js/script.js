//Animação para o data-anime
const dataAnime = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
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

animeScroll();

window.addEventListener("scroll", ()=>{
  animeScroll();
});

//Animação escrita
const escritaItem = document.querySelector(".writer");
typeWriter(escritaItem);
function typeWriter(element) {
  const textArray = element.innerHTML.split('');
  element.innerHTML = '';
  textArray.forEach((letra, i) =>{
    setTimeout(() => element.innerHTML += letra, 75 * i)
  });
}

$(document).ready(function() {
  tabHabilidadeChecked();
  $('input:radio[name="tab-habilidade"]').change(function() {
    tabHabilidadeChecked();
  });
});

function tabHabilidadeChecked(){
  if (document.getElementById("tab-front-end").checked) {
    document.getElementById("front-end").style.display = "block";
    document.getElementById("btn-front-end").classList.add("active");
  }else {
    document.getElementById("front-end").style.display = "none";
    document.getElementById("btn-front-end").classList.remove("active");
  }
  if (document.getElementById("tab-back-end").checked) {
    document.getElementById("back-end").style.display = "block";
    document.getElementById("btn-back-end").classList.add("active");
  }else {
    document.getElementById("back-end").style.display = "none";
    document.getElementById("btn-back-end").classList.remove("active");
  }
  if (document.getElementById("tab-data-base").checked) {
    document.getElementById("data-base").style.display = "block";
    document.getElementById("btn-data-base").classList.add("active");
  }else {
    document.getElementById("data-base").style.display = "none";
    document.getElementById("btn-data-base").classList.remove("active");
  }
  if(document.getElementById("tab-ferramenta").checked) {
    document.getElementById("ferramenta").style.display = "block";
    document.getElementById("btn-ferramenta").classList.add("active");
  }else {
    document.getElementById("ferramenta").style.display = "none";
    document.getElementById("btn-ferramenta").classList.remove("active");
  }
  if(document.getElementById("tab-idioma").checked) {
    document.getElementById("idioma").style.display = "block";
    document.getElementById("btn-idioma").classList.add("active");
  }else {
    document.getElementById("idioma").style.display = "none";
    document.getElementById("btn-idioma").classList.remove("active");
  }
}

//
const bemvindos = document.querySelector("#boas-vindas")
var date = new Date().toLocaleTimeString().substring(0,2);

if(date<=12){
  bemvindos.innerHTML += ", bom dia!"  
}else if(date<=18){
  bemvindos.innerHTML += ", boa tarde!"  
}else if(date<=24){
  bemvindos.innerHTML += ", boa noite!"  
}