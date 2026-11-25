"use strict";
const menu=document.querySelector("#menu"),links=document.querySelector("#links");
function closeMenu(){links.classList.remove("open");menu.setAttribute("aria-expanded","false");menu.setAttribute("aria-label","Abrir menu");}
menu.addEventListener("click",()=>{const open=links.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.setAttribute("aria-label",open?"Fechar menu":"Abrir menu");});
links.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&links.classList.contains("open")){closeMenu();menu.focus();}});
document.querySelectorAll(".filter").forEach(button=>button.addEventListener("click",()=>{
document.querySelectorAll(".filter").forEach(b=>{const selected=b===button;b.classList.toggle("active",selected);b.setAttribute("aria-pressed",String(selected));});
document.querySelectorAll(".card").forEach(card=>{card.hidden=button.dataset.filter!=="all"&&card.dataset.category!==button.dataset.filter;});
}));