
function inserisci(){
    var nomesquadra1 = document.getElementById('s1').value;
    var nomesquadra2 = document.getElementById('s2').value;
    var attac1 = document.getElementById('att1').value;
    var attac2 = document.getElementById('att2').value;
    var attac3 = document.getElementById('att3').value;
    var attac4 = document.getElementById('att4').value;
    var difen1 = document.getElementById('dif1').value;
    var difen2 = document.getElementById('dif2').value;
    var difen3 = document.getElementById('dif3').value;
    var difen4 = document.getElementById('dif4').value;
    var port1 = document.getElementById('por1').value;
    var port2 = document.getElementById('por2').value;
    document.getElementById('squadra1').innerHTML = nomesquadra1;
    document.getElementById('squadra2').innerHTML = nomesquadra2;
    document.getElementById('1').innerHTML = attac1;
    document.getElementById('2').innerHTML = attac2;
    document.getElementById('3').innerHTML = attac3;
    document.getElementById('4').innerHTML = attac4;
    document.getElementById('5').innerHTML = difen1;
    document.getElementById('6').innerHTML = difen2;
    document.getElementById('7').innerHTML = difen3;
    document.getElementById('8').innerHTML = difen4;
    document.getElementById('P1').innerHTML = port1;
    document.getElementById('P2').innerHTML = port2;
    document.getElementById("partitaz").classList.remove("hide");
    document.getElementById("partitaz").classList.add("container");
    document.getElementById("inizio").classList.add("hide");
    telecronaca.innerHTML = 'Comincia la partita di Calcio da Strda tra <b>' + nomesquadra1 + '</b> VS <b>' + nomesquadra2 + '</b>';
}


const giocatori = 8;
const eventi = 14;
const gz1 = document.getElementById('Goal1');
const gz2 = document.getElementById('Goal2');
const gg1 = 0;
const gg2 = 0;
const gg3 = 0;
const gg4 = 0;
const gg5 = 0;
const gg6 = 0;
const gg7 = 0;
const gg8 = 0;
//funzione che esegue il conteggio fino a 120
function conta90() {
    var squadra1 = document.getElementById('squadra1').innerHTML;
    var squadra2 = document.getElementById('squadra2').innerHTML;
    gz1.innerHTML = 0;
    gz2.innerHTML = 0;
    var tabellaHTML = "";
    var num_evento = 0;
    var counter = 1; //contatore inizia da 1
    var output = document.getElementById('counter');
    var telecronaca = document.getElementById('telecronaca');
    var goal1 = 0;
    var goal2 = 0;
    telecronaca.innerHTML = 'Tutto è pronto per la partita tra <b>' + squadra1 + '</b> VS <b>' + squadra2 + '</b>';
    document.getElementById("avvia").classList.add("hide");
    
    //funzione per aggiornare il numero e impostare il timeout per il prossimo aggiornamento
    function updateCounter() {
        output.innerHTML = counter;//scrittura del valore corrente sul tag manipolato
        counter++;//incrementiamo il nostro counter
        num_evento = Math.trunc(eventi * Math.random()) + 1;
        
        switch (num_evento) {
            case 1:
                var gr1 = Math.trunc(giocatori * Math.random());
                var gr2 = Math.trunc(giocatori * Math.random());
                if (gr1 % 2 === 0) {
                    gr1 = gr1 + 1;
                } else {
                }
                if (gr2 % 2 === 0) {
                } else {
                    gr2 = gr2 + 1;
                }
                if (gr2 == 0) {
                    gr2 = 2;
                }
                if (gr1 == 9) {
                    gr1 = 1;
                }
                var g1 = document.getElementById(gr1).innerHTML;
                var g2 = document.getElementById(gr2).innerHTML;
                telecronaca.innerHTML ='<b>' + g1 + '</b> supera senza difficoltà <b>' + g2 + '</b> si avvicina in area di rigore e scaglia un tiro violentissimo contro il portiere ma la palla esce di poco oltre la traversa';
                break;
            case 2:
                var gr1 = Math.trunc(giocatori * Math.random());
                var gr2 = Math.trunc(giocatori * Math.random());
                if (gr1 % 2 === 0) {
                    gr1 = gr1 + 1;
                } else {
                }
                if (gr2 % 2 === 0) {
                } else {
                    gr2 = gr2 + 1;
                }
                if (gr2 == 0) {
                    gr2 = 2;
                }
                if (gr1 == 9) {
                    gr1 = 1;
                }
                var g1 = document.getElementById(gr1).innerHTML;
                var g2 = document.getElementById(gr2).innerHTML;
                telecronaca.innerHTML ='<b>' + g2 + '</b> supera senza difficoltà <b>' + g1 + '</b> si avvicina in area di rigore e scaglia un tiro violentissimo contro il portiere che para però senza problemi';
                break;
            case 3:
                var gr1 = Math.trunc(giocatori * Math.random());
                var gr2 = Math.trunc(giocatori * Math.random());
                if (gr1 % 2 === 0) {
                    gr1 = gr1 + 1;
                } else {
                }
                if (gr2 % 2 === 0) {
                } else {
                    gr2 = gr2 + 1;
                }
                if (gr2 == 0) {
                    gr2 = 2;
                }
                if (gr1 == 9) {
                    gr1 = 1;
                }
                var g1 = document.getElementById(gr1).innerHTML;
                var g2 = document.getElementById(gr2).innerHTML;
                telecronaca.innerHTML ='<b>' + g1 + '</b> contrasto durissimo <b>' + g2 + '</b> che cade a terra malconcio';
                break;
            case 4:
                var gr1 = Math.trunc(giocatori * Math.random());
                var gr2 = Math.trunc(giocatori * Math.random());
                if (gr1 % 2 === 0) {
                    gr1 = gr1 + 1;
                } else {
                }
                if (gr2 % 2 === 0) {
                } else {
                    gr2 = gr2 + 1;
                }
                if (gr2 == 0) {
                    gr2 = 2;
                }
                if (gr1 == 9) {
                    gr1 = 1;
                }
                var g1 = document.getElementById(gr1).innerHTML;
                var g2 = document.getElementById(gr2).innerHTML;
                telecronaca.innerHTML ='<b>' + g2 + '</b> contrasto durissimo <b>' + g1 + '</b> che cade a terra dolorante';
                break;
            case 5:
                var gr1 = Math.trunc(giocatori * Math.random());
                var gr2 = Math.trunc(giocatori * Math.random());
                if (gr1 % 2 === 0) {
                    gr1 = gr1 + 1;
                } else {
                }
                if (gr2 % 2 === 0) {
                } else {
                    gr2 = gr2 + 1;
                }
                if (gr2 == 0) {
                    gr2 = 2;
                }
                if (gr1 == 9) {
                    gr1 = 1;
                }
                var g1 = document.getElementById(gr1).innerHTML;
                var g2 = document.getElementById(gr2).innerHTML;
                var portiere = document.getElementById('P2').innerHTML;
                goal1++;
                telecronaca.innerHTML = '<b>' + g1 + '</b> tira un bolide contro <b>' + portiere + '</b> che spiazzato subisce <b class="red">GOAL!</b>';
                gz1.innerHTML = goal1;
                tabellaHTML += "<tr><td>" + counter + "</td><td>" + g1 + "</td><td>"+ squadra1 + "</td></tr>";
                document.getElementById('tabella').innerHTML = tabellaHTML;
                break;
            case 6:
                var gr1 = Math.trunc(giocatori * Math.random());
                var gr2 = Math.trunc(giocatori * Math.random());
                if (gr1 % 2 === 0) {
                    1111
                    gr1 = gr1 + 1;
                } else {
                }
                if (gr2 % 2 === 0) {
                } else { 
                    gr2 = gr2 + 1;
                }
                if (gr2 == 0) {
                    gr2 = 2;
                }
                if (gr1 == 9) {
                    gr1 = 1;
                }
                var g1 = document.getElementById(gr1).innerHTML;
                var g2 = document.getElementById(gr2).innerHTML;
                var portiere = document.getElementById('P1').innerHTML;
                goal2++;
                telecronaca.innerHTML ='<b>' + g2 + '</b> tira un bolide contro <b>' + portiere + '</b> che spiazzato subisce <b class="red">GOAL!</b>';
                gz2.innerHTML = goal2;
                tabellaHTML +=  "<tr><td>" + counter + "</td><td>" + g2 + "</td><td>"+ squadra2 + "</td></tr>";
                document.getElementById('tabella').innerHTML = tabellaHTML;
                break;
            case 7:
                var gr1 = Math.trunc(giocatori * Math.random());
                var gr2 = Math.trunc(giocatori * Math.random());
                if (gr1 % 2 === 0) {
                    gr1 = gr1 + 1;
                } else {
                }
                if (gr2 % 2 === 0) {
                } else {
                    gr2 = gr2 + 1;
                }
                if (gr2 == 0) {
                    gr2 = 2;
                }
                if (gr1 == 9) {
                    gr1 = 1;
                }
                var g1 = document.getElementById(gr1).innerHTML;
                var g2 = document.getElementById(gr2).innerHTML;
                telecronaca.innerHTML ='<b>'+ g1 + '</b> marcato stretto da <b>' + g2 + '</b> che lo blocca violentemente a terra';
                break;
            case 8:
                var gr1 = Math.trunc(giocatori * Math.random());
                var gr2 = Math.trunc(giocatori * Math.random());
                if (gr1 % 2 === 0) {
                    gr1 = gr1 + 1;
                } else {
                }
                if (gr2 % 2 === 0) {
                } else {
                    gr2 = gr2 + 1;
                }
                if (gr2 == 0) {
                    gr2 = 2;
                }
                if (gr1 == 9) {
                    gr1 = 1;
                }
                var g1 = document.getElementById(gr1).innerHTML;
                var g2 = document.getElementById(gr2).innerHTML;
                telecronaca.innerHTML ='<b>'+ g2 + '</b> in evidente difficoltà viene buttato giù da <b>' + g1 + '</b> senza troppi complimenti';
                break;
            case 9:
                var gr1 = Math.trunc(giocatori * Math.random());
                var gr2 = Math.trunc(giocatori * Math.random());
                if (gr1 % 2 === 0) {
                    gr1 = gr1 + 1;
                } else {
                }
                if (gr2 % 2 === 0) {
                } else {
                    gr2 = gr2 + 1;
                }
                if (gr2 == 0) {
                    gr2 = 2;
                }
                if (gr1 == 9) {
                    gr1 = 1;
                }
                var g1 = document.getElementById(gr1).innerHTML;
                var g2 = document.getElementById(gr2).innerHTML;
                telecronaca.innerHTML ='<b>' + g1 + '</b> incita la folla mentre <b>' + g2 + '</b> lo guarda con disappunto';
                break;
            case 10:
                var gr1 = Math.trunc(giocatori * Math.random());
                var gr2 = Math.trunc(giocatori * Math.random());
                if (gr1 % 2 === 0) {
                    gr1 = gr1 + 1;
                } else {
                }
                if (gr2 % 2 === 0) {
                } else {
                    gr2 = gr2 + 1;
                }
                if (gr2 == 0) {
                    gr2 = 2;
                }
                if (gr1 == 9) {
                    gr1 = 1;
                }
                var g1 = document.getElementById(gr1).innerHTML;
                var g2 = document.getElementById(gr2).innerHTML;
                telecronaca.innerHTML = '<b>' + g1 + '</b> trova un distratto <b>' + g2 + '</b> che viene colpito alle spalle cadendo rovinosamente';
                break;
            case 11:
                var gr1 = Math.trunc(giocatori * Math.random());
                var gr2 = Math.trunc(giocatori * Math.random());
                if (gr1 % 2 === 0) {
                    gr1 = gr1 + 1;
                } else {
                }
                if (gr2 % 2 === 0) {
                } else {
                    gr2 = gr2 + 1;
                }
                if (gr2 == 0) {
                    gr2 = 2;
                }
                if (gr1 == 9) {
                    gr1 = 1;
                }
                var g1 = document.getElementById(gr1).innerHTML;
                var g2 = document.getElementById(gr2).innerHTML;
                telecronaca.innerHTML = '<b>' + g2 + '</b> cerca di divincolarsi ma <b>' + g1 + '</b> gli ruba la spazzandola via';
                break;
            case 12:
                var gr1 = Math.trunc(giocatori * Math.random());
                var gr2 = Math.trunc(giocatori * Math.random());
                if (gr1 % 2 === 0) {
                    gr1 = gr1 + 1;
                } else {
                }
                if (gr2 % 2 === 0) {
                } else {
                    gr2 = gr2 + 1;
                }
                if (gr2 == 0) {
                    gr2 = 2;
                }
                if (gr1 == 9) {
                    gr1 = 1;
                }
                var g1 = document.getElementById(gr1).innerHTML;
                var g2 = document.getElementById(gr2).innerHTML;
                telecronaca.innerHTML = '<b>' + g1 + '</b> scivola con la gamba tesa colpendo un malcapitato <b>' + g2 + '</b>';
                break;
            case 13:
                var gr1 = Math.trunc(giocatori * Math.random());
                var gr2 = Math.trunc(giocatori * Math.random());
                if (gr1 % 2 === 0) {
                    gr1 = gr1 + 1;
                } else {
                }
                if (gr2 % 2 === 0) {
                } else {
                    gr2 = gr2 + 1;
                }
                if (gr2 == 0) {
                    gr2 = 2;
                }
                if (gr1 == 9) {
                    gr1 = 1;
                }
                var g1 = document.getElementById(gr1).innerHTML;
                var g2 = document.getElementById(gr2).innerHTML;
                telecronaca.innerHTML = '<b>' + g2 + '</b> spintona <b>' + g1 + '</b> che cade in malo modo';
                break;
            default:
                var gr1 = Math.trunc(giocatori * Math.random());
                var gr2 = Math.trunc(giocatori * Math.random());
                if (gr1 % 2 === 0) {
                    gr1 = gr1 + 1;
                } else {
                }
                if (gr2 % 2 === 0) {
                } else {
                    gr2 = gr2 + 1;
                }
                if (gr2 == 0) {
                    gr2 = 2;
                }
                if (gr1 == 9) {
                    gr1 = 1;
                }
                var g1 = document.getElementById(gr1).innerHTML;
                var g2 = document.getElementById(gr2).innerHTML;
                telecronaca.innerHTML ='<b>'+ g2 + '</b> incita la folla mentre <b>' + g1 + '</b> lo prende in giro animatamente';
                break;

        }



        if (counter <= 60) {
            setTimeout(updateCounter, 2200);


        } else {
            if (goal1 > goal2) {
                telecronaca.innerHTML = 'Partita Terminata, vince <b> '+ squadra1 + '</b> con ben ' + goal1 + ' reti a ' + goal2;
                
    document.getElementById("avvia").classList.remove("hide");
            } else if (goal2 > goal1) {
                
                document.getElementById("avvia").classList.remove("hide");    
            telecronaca.innerHTML = 'Partita Terminata, vince <b>'+ squadra2 +'</b> con ben ' + goal2 + ' reti a ' + goal1;
            } else { 
                
                document.getElementById("avvia").classList.remove("hide");
                telecronaca.innerHTML = 'Partita Terminata, pareggio tra <b>'+ squadra1 +'</b> e <b>'+squadra2+'</b>'; }

            
        }



    }


    //avviamo la funzione updateCounter
    updateCounter();






}