// ==========================================
// MODULE RH - PORTAIL EAP SDIS37
// Version 1.0
// ==========================================

const agents = [

{
    grade:"Lieutenant",
    nom:"DELALANDE",
    prenom:"Michaël",
    cis:"CEFOR",
    gpt:"CTA",
    niveau:"EAP3",
    heures:142,
    fmpa:"12/03/2026"
},

{
    grade:"Adjudant",
    nom:"DUPONT",
    prenom:"Jean",
    cis:"LOCHES",
    gpt:"Sud",
    niveau:"EAP2",
    heures:96,
    fmpa:"18/06/2026"
},

{
    grade:"Caporal-Chef",
    nom:"MARTIN",
    prenom:"Pierre",
    cis:"TOURS",
    gpt:"Nord",
    niveau:"EAP1",
    heures:84,
    fmpa:"05/09/2026"
}

];

const tbody=document.getElementById("listeAgents");

function afficherAgents(liste){

    tbody.innerHTML="";

    liste.forEach(agent=>{

        tbody.innerHTML+=`

<tr>

<td>${agent.grade}</td>

<td>${agent.nom}</td>

<td>${agent.prenom}</td>

<td>${agent.cis}</td>

<td>${agent.gpt}</td>

<td>${agent.niveau}</td>

<td>${agent.heures} h</td>

<td>${agent.fmpa}</td>

<td>

<button class="action view">
<i class="fa-solid fa-eye"></i>
</button>

<button class="action edit">
<i class="fa-solid fa-pen"></i>
</button>

<button class="action delete">
<i class="fa-solid fa-trash"></i>
</button>

</td>

</tr>

`;

    });

}

afficherAgents(agents);

// ===============================
// RECHERCHE
// ===============================

document.getElementById("recherche")
.addEventListener("keyup",function(){

const texte=this.value.toLowerCase();

const resultat=agents.filter(agent=>

agent.nom.toLowerCase().includes(texte)
||

agent.prenom.toLowerCase().includes(texte)
||

agent.cis.toLowerCase().includes(texte)

);

afficherAgents(resultat);

});