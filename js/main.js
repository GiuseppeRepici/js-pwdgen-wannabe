const userFullName = prompt("Inserisci il tuo nome!");
const userFullSurname = prompt("Inserisci il tuo cognome!");
const userPColor = prompt("Inserisci il tuo colore preferito!");

const fraseFinale = `${userFullName}${userFullSurname}${userPColor}`;

const Div1Body = document.getElementById("id1");

Div1Body.innerHTML = fraseFinale + 21;