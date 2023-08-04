let sub__menu = document.getElementById("sub__menu");
let contenido__nuevo = document.getElementById("contenido__nuevo"); 
let sub__conten = document.getElementById("sub__conten");
let img__icon = document.getElementById("img__icon");
let img__flex = document.getElementById("img__flex");
let contenido__estilo = document.getElementById("contenido__estilo");
let menu__button = document.getElementById("menu__button");
let menu__class = document.getElementById("menu__class");
let icono = document.getElementById("icono");


contenido__nuevo.addEventListener("click", function(){
 sub__menu.classList.toggle("remove");
if(sub__menu.classList.contains("remove")){
    img__icon.src = "img/icon-arrow-up.svg";
}
else{
    img__icon.src = "img/icon-arrow-down.svg";
}
});

contenido__estilo.addEventListener("click", function(){
    sub__conten.classList.toggle("remove");
   if(sub__conten.classList.contains("remove")){
     img__flex.src = "img/icon-arrow-up.svg";
   }
   else{
     img__flex.src = "img/icon-arrow-down.svg";
   }
});

menu__button.addEventListener("click",()=>{
  menu__class.classList.toggle("remo");
  if(menu__class.classList.contains("remo")){
    icono.src = "img/icon-close-menu.svg";
  }
  else{
    icono.src = "img/icon-menu.svg";
  }
});