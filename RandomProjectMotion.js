const BoiteProjet = document.querySelector('#ng-3-3');

var Projets2 = [
  ['../Img/PlaisirsPartages/Cover.png','[Plaisirs Partages]','After effects / FIGMA / ILLUSTRATOR','jui-2023','PlaisirsPartages','./PlaisirsPartages.html'],
  ['../Img/Intrus/Cover.jpg','[Intrus]','After effects / FIGMA / ILLUSTRATOR','jui-2023','Intrus','./Intrus.html'],
  ['../Img/AVA/Cover.jpg','[T2O création | AVA]','After effects / ILLUSTRATOR','oct-2023','AvaT2O','./AvaT2O.html'],
  ['../Img/Blau/Preview.jpg','[Vidéo identité média indépendant]','After effects / ILLUSTRATOR / photoshop','dec-2021','Blau','./Blau.html'],
  ['../Img/Redbull/Preview.jpg','[Vidéo promotionnelle Redbull]','After effects / Blender','avril-2022','RebBull','./RedBull.html'],
];

var Actuelle = window.location.pathname;
var Page = Actuelle.split("/").pop();
var PageActuelle = Page.slice(0, -5);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

var LeProj = getRandomInt(5);
var LeProj2 = getRandomInt(5);

while (LeProj === LeProj2 || Projets2[LeProj][4] === PageActuelle || Projets2[LeProj2][4] === PageActuelle) {
        var LeProj2 = getRandomInt(5);
        var LeProj = getRandomInt(5);
}

BoiteProjet.innerHTML = '<div id="Reco" style="display: flex; flex-direction: column; padding-left: 20px; padding-right: 20px; padding-top: 20px; padding-bottom: 10px;  width: 50%;"><div style="width: 100%; height: 10rem; background-image: url('+Projets2[LeProj][0]+'); background-repeat: no-repeat; background-size: cover; margin-bottom: 5px; background-position:center;"><div style="height: 50px; opacity: 0; @media (max-width: 1000px) {height: 50px;}"></div></div><p id="Reco" class="projetsTitre Primary" style="text-decoration: none;">'+Projets2[LeProj][1]+'</p><p id="Reco" class="projetsInfos Primary" style="opacity: 0.5; text-decoration: none;">'+Projets2[LeProj][2]+'</p><p id="Reco" class="projetsInfos Primary" style="opacity: 0.5; text-decoration: none;">'+Projets2[LeProj][3]+'</p></div></div>     <div id="Reco2" style="display: flex; flex-direction: column; padding-left: 20px; padding-right: 20px; padding-top: 20px; padding-bottom: 10px;  width: 50%;"><div style="width: 100%; height: 10rem; background-image: url('+Projets2[LeProj2][0]+'); background-repeat: no-repeat; background-size: cover; margin-bottom: 5px; background-position:center;"><div style="height: 50px; opacity: 0; @media (max-width: 1000px) {height: 50px;}"></div></div><p id="Reco2" class="projetsTitre Primary" style="text-decoration: none;">'+Projets2[LeProj2][1]+'</p><p id="Reco2" class="projetsInfos Primary" style="opacity: 0.5; text-decoration: none;">'+Projets2[LeProj2][2]+'</p><p id="Reco2" class="projetsInfos Primary" style="opacity: 0.5; text-decoration: none;">'+Projets2[LeProj2][3]+'</p></div></div>'


const LeLien = document.querySelector('#Reco');
const LeLien2 = document.querySelector('#Reco2');

// Add a click event listener to the div.
LeLien.addEventListener('click', function() {
  // Open the page in the current tab.
  window.open(Projets2[LeProj][5], '_self');
});

// Add a click event listener to the div.
LeLien2.addEventListener('click', function() {
  // Open the page in the current tab.
  window.open(Projets2[LeProj2][5], '_self');
});
