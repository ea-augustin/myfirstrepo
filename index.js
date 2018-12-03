$(function(){


    //fonction de convertion en secondes
    function enSecondes(j,h,m){
        return j*24*60*60+h*60*60+m*60;
    }

    //au clique sur le bouton
    $('#calculer').click(function(){
        //récupération de toutes les valeurs
        let NbJours=$('#NbJours').val();
        let NbHeures=$('#NbHeures').val();
        let NbMinutes=$('#NbMinutes').val();
        let NbJours2=$('#NbJours2').val();
        let NbHeures2=$('#NbHeures2').val();
        let NbMinutes2=$('#NbMinutes2').val();
        //valeur absolue du résultat pour afficher un nombre positif à chaque fois
        let resultat = Math.abs(enSecondes(NbJours,NbHeures,NbMinutes)-enSecondes(NbJours2,NbHeures2,NbMinutes2));
        //affichage
        $('p').text("Différence des deux horaires en secondes : " + resultat +"s");
    })
})
