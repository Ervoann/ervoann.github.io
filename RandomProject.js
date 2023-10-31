const BoiteProjet = document.querySelector('#ng-3-3');

var Guinguette = ['../Img/Guinguette/ParalaxCorver_2.jpg','[GUINGUETTE DRAG-QUEEN]','Collectif vertmines','Fev-2023','Guinguette','./Guinguette.html'];
var T2O2088 = ['../Img/T2o2088/Paralax.jpg','[SOIRÉE T2O | 2088]','saison 2022-2023','mar-2023','T2O2088','./T2O2088.html'];
var T2OClapier = ['../Img/AfterPrideClapier/Preview.jpg','[Soirée T2O | Clapier]','saison 2022-2023','jui-2023','T2OClapier','./T2OClapier.html'];
var JustTheTip = ['../Img/JustTheTipBrussels/Wall-Poster-Mockup.jpg','[just the tip brussels]','soirée drag de bruxelles','jui-2023','JustTheTip','./JustTheTip.html'];
var AfterPrideClapier = ['../Img/AfterPrideClapier/Preview.jpg','[Soirée T2O | Clapier]','soirée techno au clapier','avr-2023','AfterPrideClapier','./AfterPrideClapier.html'];


var Projets = [Guinguette,T2O2088,T2OClapier,JustTheTip,AfterPrideClapier];
// var ProjetsString = ['T2O2088','T2OClapier','Guinguette'];

var Actuelle = window.location.pathname;
var Page = Actuelle.split("/").pop();
var PageActuelle = Page.slice(0, -5);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

var LeProj = getRandomInt(4);
var LeProj2 = getRandomInt(4);

while (Projets[LeProj][4] === PageActuelle) {
    LeProj = getRandomInt(4);
}

while (LeProj2 === LeProj || Projets[LeProj2][4] === PageActuelle) {
        var LeProj2 = getRandomInt(4);
}

BoiteProjet.innerHTML = '<div id="my-div" style="display: flex; flex-direction: column; padding-left: 20px; padding-right: 20px; padding-top: 20px; padding-bottom: 10px;  width: 50%;"><div style="width: 100%; height: 10rem; background-image: url('+Projets[LeProj][0]+'); background-repeat: no-repeat; background-size: cover; margin-bottom: 5px;"><div style="height: 50px; opacity: 0; @media (max-width: 1000px) {height: 50px;}"></div></div><p id="my-div" class="projetsTitre Primary" style="text-decoration: none;">'+Projets[LeProj][1]+'</p><p id="my-div" class="projetsInfos Primary" style="opacity: 0.5; text-decoration: none;">'+Projets[LeProj][2]+'</p><p id="my-div" class="projetsInfos Primary" style="opacity: 0.5; text-decoration: none;">'+Projets[LeProj][3]+'</p></div></div>     <div id="my-div2" style="display: flex; flex-direction: column; padding-left: 20px; padding-right: 20px; padding-top: 20px; padding-bottom: 10px;  width: 50%;"><div style="width: 100%; height: 10rem; background-image: url('+Projets[LeProj2][0]+'); background-repeat: no-repeat; background-size: cover; margin-bottom: 5px;"><div style="height: 50px; opacity: 0; @media (max-width: 1000px) {height: 50px;}"></div></div><p id="my-div2" class="projetsTitre Primary" style="text-decoration: none;">'+Projets[LeProj2][1]+'</p><p id="my-div2" class="projetsInfos Primary" style="opacity: 0.5; text-decoration: none;">'+Projets[LeProj2][2]+'</p><p id="my-div2" class="projetsInfos Primary" style="opacity: 0.5; text-decoration: none;">'+Projets[LeProj2][3]+'</p></div></div>'