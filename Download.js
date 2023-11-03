var div = document.querySelector(".Download");

var Projets = [['Télécharger les visuels (PDF)', 'https://google.com']] 


// Crée les divs nécessaires pour le projet.
const div1Lien = document.createElement("div");
div1Lien.setAttribute("id", `my-div`);
div1Lien.style.display = "flex";
div1Lien.style.flexDirection = "row";
div1Lien.style.paddingLeft = "20px";
div1Lien.style.paddingRight = "20px";
div1Lien.style.paddingTop = "10px";
div1Lien.style.paddingBottom = "10px";
div1Lien.style.width = "fit-content";
div1Lien.style.alignItems = "center";
div1Lien.style.justifyContent = "start";
div1Lien.style.gap = "15px";

// Ajoute la div "div1Lien" à la div de projet.
div.appendChild(div1Lien);

div1Lien.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 32 32" style="background-color: transparent;"><path class="Pick" d="M 6 3 L 6 29 L 26 29 L 26 9.59375 L 25.71875 9.28125 L 19.71875 3.28125 L 19.40625 3 Z M 8 5 L 18 5 L 18 11 L 24 11 L 24 27 L 8 27 Z M 20 6.4375 L 22.5625 9 L 20 9 Z"></path></svg><p class="projetsTitre Primary" style="text-decoration: none; background-color: transparent;">'+Projets[0][0]+'</p>'

// Ajoute un écouteur d'événements "click" à chaque div.
div.addEventListener('click', function() {
  // Ouvre la page dans l'onglet actuel.
  window.open(Projets[0][1], '_Blank');
});