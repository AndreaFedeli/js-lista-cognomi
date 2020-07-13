//Creare un array di cognomi,chiedere all utente di inserirne uno

var lista=["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
var cognomeUtente = prompt('Inserisci un cognome');

//lista aggiornata col cognome scelto dall cognomeUtente
lista.push(cognomeUtente);

//lista ordinata alfabeticamente e stampata
lista.sort();
document.getElementById('stampa').innerHTML = lista;
console.log(lista)


//scrivere la posizione umana del nuovo cognome
var pos = lista.indexOf(cognomeUtente) + 1;
console.log(pos);
