//chiedere un numero compreso tra 1 e 6 come giocata
var numero_utente = prompt("Tira un numero da 1 a 6!");
console.log(numero_utente);

//generare un numero casuale dal computer
var numero_pc = getRndInteger(1,7);
console.log(numero_pc)


//funzione per generare il numero casuale
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


//stabilisco chie é il vincitore tra i due giocatori!
if (numero_utente > numero_pc) {
  console.log("Hai vinto!")
} else if  (numero_utente == numero_pc){
  console.log("Hai pareggiato!")
} else  {
  console.log("Hai perso!")
}
