//chiedere all'utente un email
var email_utente = prompt("Digitare l'indirizzo email?") ;
console.log("Email utente: " + email_utente) ;

//creare la lista delle email valide
var email_valide = ["email1", "email2", "email3" , "email4"];
console.log(email_valide);

var test = false;
for (var i = 0; i < email_valide.length; i++) {
    if (email_utente == email_valide[i]) {
      test = true;
    }
}

if(test == true) {
  console.log("é in lista");
} else {
  console.log("non é in lista");
}


//var autorizzato = email_valide.includes(email_utente);
//if(autorizzato) {
//  console.log("é in lista");
//} else {
//  console.log("non é in lista");
//}
