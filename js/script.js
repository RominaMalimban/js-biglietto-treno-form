// Riscrivere il programma del calcolo del biglietto del treno in versione completa:



// salvo in una variabile il riferimento al bottone "genera":
let myButton = document.getElementById("btn");

// creo l'evento:
myButton.addEventListener("click",

    function(event){
       
        event.preventDefault();

        // salvo in una variabile il riferimento a nome e cognome del pax:
        let inputNome = document.getElementById("nome");
        let nomePax = inputNome.value;

        // salvo in una variabile il riferimento al numero di chilometri da percorrere:
        let inputKm = document.getElementById("chilometri");     
        let numeroKm = inputKm.value;

        // salvo in una variabile la scelta dell'utente per la fascia di età:
        let inputEta = document.getElementById("eta");
        let eta = inputEta.value;

        // al click devo mettere in display block il biglietto:
        let mioBiglietto = document.querySelector(".mioBiglietto");
        mioBiglietto.style.display="block";

        // output nome pax:
        document.getElementById("output-nome").innerHTML = nomePax;

        // variabili:
        let costoPerKm = 0.21;
        let prezzoBiglietto = (numeroKm * costoPerKm).toFixed(2);
        let scontoMinorenne = prezzoBiglietto * 20 / 100;
        let scontoSenior = prezzoBiglietto * 40 / 100;
        let numCarrozza = Math.floor(Math.random() * 10) + 1;
        let codice = Math.floor(Math.random() * 10000) + 1;

        
        // output numero carrozza:
        document.getElementById("output-carrozza").innerHTML = numCarrozza;

        // output codice CP:
        document.getElementById("output-codice").innerHTML = codice;

        // creo le mie condizioni per prezzi dei biglietti:
        if (eta === "minorenne"){
            let prezzoMinorenne = (prezzoBiglietto - scontoMinorenne).toFixed(2);
            document.getElementById("output-costo").innerHTML= `${prezzoMinorenne}€`;
            document.getElementById("output-offerta").innerHTML= "Sconto del 20%";
        }else if (eta === "senior"){
            let prezzoSenior = (prezzoBiglietto - scontoSenior).toFixed(2);
            document.getElementById("output-costo").innerHTML= `${prezzoSenior}€`;
            document.getElementById("output-offerta").innerHTML= "Sconto del 40%";
        }else{
            prezzoBiglietto;
            document.getElementById("output-costo").innerHTML= `${prezzoBiglietto}€`;
            document.getElementById("output-offerta").innerHTML= "Biglietto standard";
        }

    }
);

// creo una funzione per resettare:
let myButtonReset = document.getElementById("btn-annulla");

myButtonReset.addEventListener("click",
    function(){
        document.getElementById("myForm").reset();
    }
);