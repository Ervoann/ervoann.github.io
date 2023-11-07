const BoiteProjet = document.querySelector('#ng-3-3');

var Projets = [
  ['../Img/MiniaturesZiar/IpadDisplay.jpg','[Miniatures Ziar]','Illustrator / PHOTOSHOP','jui-2023','MiniaturesYoutubeZiar','./MiniaturesYoutubeZiar.html'],
  ['../Img/Kulturika/Totem-City.jpg','[Projet affiches Kulturika]','INDESIGN / PHOTOSHOP / ILLUSTRATOR','déc-2022','Kulturika','./Kulturika.html'],
  ['../Img/KickFlip/Billboard-Mockup-Realistic.jpg','[Projet KickFlip]','ILLUSTRATOR / PHOTOSHOP','fev-2023','KickFlip','./KickFlip.html'],
  ['../Img/Rodtchenko/Magazine.jpg','[Recherches sur alexandre rodtchenko]','ILLUSTRATOR / PHOTOSHOP / indesign','mar-2023','AlexandreRodtchenko','./AlexandreRodtchenko.html'],
  /*['./src/Img/MaisonSoustraire/MagazineMockup.jpg','[Analyse exposition maison soustraire]','ILLUSTRATOR / PHOTOSHOP / Indesign','avr-2023','MaisonSoustraire','./MaisonSoustraire.html'],*/
  ['../Img/TMF/Devanture.jpg','[Identité des Transports Mazenod Florian]','Illustrator / Photoshop / Figma','mai-2023','TMF','./TMF.html']/*,
  ['./src/Img/EspaceTestEnArchipel/Cover.jpg','[Espace-test en archipel]','Photoshop / indesign / illustrator / figma','JAN-2023','EspaceTest','./EspaceTest.html']*/
];

// var Projets = [MiniaturesYoutubeZiar,Kulturika,KickFlip,AlexandreRodtchenko,TMF];
// // var Projets = [MiniaturesYoutubeZiar,Kulturika,KickFlip,AlexandreRodtchenko/*,MaisonSoustraire*/,TMF/*,EspaceTest*/];
// // var ProjetsString = ['T2O2088','T2OClapier','Guinguette'];

var Actuelle = window.location.pathname;
var Page = Actuelle.split("/").pop();
var PageActuelle = Page.slice(0, -5);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

var LeProj = getRandomInt(4);
var LeProj2 = getRandomInt(4);

while (LeProj === LeProj2 || Projets[LeProj][4] === PageActuelle || Projets[LeProj2][4] === PageActuelle) {
        var LeProj2 = getRandomInt(4);
        var LeProj = getRandomInt(4)
}

BoiteProjet.innerHTML = '<div id="Reco" style="display: flex; flex-direction: column; padding-left: 20px; padding-right: 20px; padding-top: 20px; padding-bottom: 10px;  width: 50%;"><div style="width: 100%; height: 10rem; background-image: url('+Projets[LeProj][0]+'); background-repeat: no-repeat; background-size: cover; margin-bottom: 5px;"><div style="height: 50px; opacity: 0; @media (max-width: 1000px) {height: 50px;}"></div></div><p id="Reco" class="projetsTitre Primary" style="text-decoration: none;">'+Projets[LeProj][1]+'</p><p id="Reco" class="projetsInfos Primary" style="opacity: 0.5; text-decoration: none;">'+Projets[LeProj][2]+'</p><p id="Reco" class="projetsInfos Primary" style="opacity: 0.5; text-decoration: none;">'+Projets[LeProj][3]+'</p></div></div>     <div id="Reco2" style="display: flex; flex-direction: column; padding-left: 20px; padding-right: 20px; padding-top: 20px; padding-bottom: 10px;  width: 50%;"><div style="width: 100%; height: 10rem; background-image: url('+Projets[LeProj2][0]+'); background-repeat: no-repeat; background-size: cover; margin-bottom: 5px;"><div style="height: 50px; opacity: 0; @media (max-width: 1000px) {height: 50px;}"></div></div><p id="Reco2" class="projetsTitre Primary" style="text-decoration: none;">'+Projets[LeProj2][1]+'</p><p id="Reco2" class="projetsInfos Primary" style="opacity: 0.5; text-decoration: none;">'+Projets[LeProj2][2]+'</p><p id="Reco2" class="projetsInfos Primary" style="opacity: 0.5; text-decoration: none;">'+Projets[LeProj2][3]+'</p></div></div>'


const LeLien = document.querySelector('#Reco');
const LeLien2 = document.querySelector('#Reco2');

console.log(Projets[0][5]);

// Add a click event listener to the div.
LeLien.addEventListener('click', function() {
  // Open the page in the current tab.
  window.open(Projets[LeProj][5], '_self');
  console.log(Projets[0]);
});

// Add a click event listener to the div.
LeLien2.addEventListener('click', function() {
  // Open the page in the current tab.
  window.open(Projets[LeProj2][5], '_self');
});

