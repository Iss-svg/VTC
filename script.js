// Effectue une requête HTTP GET vers l'API Fake Store pour récupérer une liste de produits
fetch("data.json")
    .then((rep) => {
        // Lorsque la réponse est reçue, elle est convertie en JSON pour pouvoir être manipulée en tant qu'objet JavaScript
        return rep.json();
    })
    .then((boite) => {
        // Une fois les données reçues et converties, elles sont affiché dans la console (pour verifier que ça focntionen bien)
        console.log(boite);
        affiche(boite)

        

    });





//**FONCTION AFFICHER 
//Role : Afficher les services en carte et les temoignages en carte rectengulaire
//Paramétre : la "boite" represente l'objet les informations sur les services et les temoignages
//Retour : AUCUN

function affiche(boite){
    let nom=boite.nomCommercial
    let slogan=boite.phraseAccroche
    let devis=boite.texteAppelAction
    let benef=boite.beneficesClients
console.log(benef)


    // Je veux gerer les avantages: boite.beneficesClients qui est un tableau 
    let beneflist=""
    benef.forEach(list => {
        beneflist += `<div class="boite"><img src="${list.img}" alt=""><li>${list.texte}</li></div>`
    });
    console.log(beneflist)
    //je veux afficher en html dans ma classe avantage le tableau avec la liste des avantages qui est renger dans une variable
    let avantage=document.querySelector(`.avantage`)
    avantage.innerHTML += `${beneflist}`

   

    //je veux dans un premier tempt lire le tableaux temoignage est ensuite recuperer l'Objet, les stockers dans des variables puit indiquer dans quel div les informations doivent etre appliquer.
    boite.temoignages.forEach(boittem => {
        let pren=boittem.prenom
        let type=boittem.typePrestation
        let comment=boittem.commentaire
        let note=boittem.note

        let contain=document.querySelector(`.contain`)
        contain.innerHTML += ` <div class="carteTemoignage">
                <div class="alit"> 
                <p>${pren}</p> 
                <p>note : ${note}/5</p>
                </div>
                 <h4>${type}</h4>
                <p>${comment}</p>
                
            </div>
`
        
    });

     console.log(boite.realisations)
    //je veux gerer les realisations qui son dans une boite 
    boite.realisations.forEach(botreal => {
        let titr=botreal.titre
       let desc=botreal.description
       let img=botreal.imageUrl
       
       //je veux injecter dans ma div "container" la div "carte" mais avec les informations qui était dans le tableau
       let container=document.querySelector(`.container`)
        container.innerHTML += `<div class="carte">

                <img src="${img}" alt="">

                <div class="divSpad">
                    <h4>${titr}</h4>
                    <p>${desc}</p>
                    <a href="" class="loser">louer les Services</a>
                </div>
            </div>`
    
    });
    

    
    //je veux afficher en html dans ma classe hero les differentes "boite" qui sont renger dans des variables
    let hero=document.querySelector(`.hero`)
    hero.innerHTML += `<div>
    <h2>${nom}</h2>
    <h1>${slogan}</h1>
    <a href="" class="hebT">${devis}</a>
</div>`

}

