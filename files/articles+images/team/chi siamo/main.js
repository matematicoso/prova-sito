const partecipanti=[
  {
    nome: "Francesco Calderone",
    ruolo: "Articolista",
    img: "lettera-f.svg",
    colore:"#f5cf67",
  },
  {
    nome: "Ginevra Cellitti",
    ruolo: "Articolista",
    img: "lettera-g.svg",
    colore:"#85ed6d",
  },
  {
    nome: "Beatrice di Cioccio",
    ruolo: "Articolista",
    img: "lettera-b.svg",
    colore:"#58e1fc",
  },
  {
    nome: "Giulia Macchia",
    ruolo: "Articolista",
    img: "lettera-g.svg",
    colore:"#ef79fc",
  },
  {
    nome: "Anastasia Riccio",
    ruolo: "Articolista",
    img: "lettera-a.svg",
    colore:"#fc9e79",
  },
];

const nome=document.querySelectorAll('.nome');
const immagine=document.querySelectorAll(".altri-img");
const ruolo=document.querySelectorAll(".ruolo-altri");
const prima=document.querySelector(".freccia-indietro");
const dopo=document.querySelector(".freccia-avanti");
var attuale=0;

function mostra(numero){
  const item=partecipanti[numero];
  let numero1=numero+1;
  if (numero1>=partecipanti.length){
    numero1=0;
  }
  const item1=partecipanti[numero1];
  immagine[0].src=item.img;
  immagine[0].style.backgroundColor=item.colore;
  nome[0].textContent=item.nome;
  ruolo[0].textContent=item.ruolo;
  immagine[1].src=item1.img;
  immagine[1].style.backgroundColor=item1.colore;
  nome[1].textContent=item1.nome;
  ruolo[1].textContent=item1.ruolo;
}
// Caricamento iniziale
window.addEventListener("DOMContentLoaded", function(){
  mostra(0);
});
//Pulsante avanti
dopo.addEventListener("click", function(){
  attuale++;
  if (attuale > partecipanti.length - 1) {
    attuale = 0;
  }
  mostra(attuale);
});
//Pulsante indietro
prima.addEventListener("click", function(){
  attuale--;
  if (attuale<0) {
    attuale = partecipanti.length - 1;
  }
  mostra(attuale);
});
