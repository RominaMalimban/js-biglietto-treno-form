// Riscrivere il programma del calcolo del biglietto del treno in versione completa:



// salvo in una variabile il riferimento al bottone "genera":
let myButton = document.getElementById("btn");

// creo l'evento:
myButton.addEventListener("click",

    function(){
        // salvo in una variabile il riferimento a nome e cognome del pax:
        let inputNome = document.getElementById("nome");
        console.log(inputNome);
        let nomePax = inputNome.value;
        console.log(nomePax);

        // salvo in una variabile il riferimento al numero di chilometri da percorrere:
        let inputKm = document.getElementById("chilometri");
        console.log(inputKm);
        let numeroKm = inputKm.value;
        console.log(numeroKm);
    }
);