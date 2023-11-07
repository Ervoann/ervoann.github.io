// Sélectionne la div avec l'id "LaBoiteProjet".
const BoiteProjet = document.querySelector('#LaBoiteProjet');

// Déclaration d'un tableau contenant les informations des projets.
var Projets = [
  ['./src/Img/MiniaturesZiar/IpadDisplay.jpg','[Miniatures Ziar]','Illustrator / PHOTOSHOP','jui-2023','MiniaturesYoutubeZiar','./src/Pages/MiniaturesYoutubeZiar.html'],
  ['./src/Img/Kulturika/Totem-City.jpg','[Projet affiches Kulturika]','INDESIGN / PHOTOSHOP / ILLUSTRATOR','déc-2022','Kulturika','./src/Pages/Kulturika.html'],
  ['./src/Img/KickFlip/Billboard-Mockup-Realistic.jpg','[Projet KickFlip]','ILLUSTRATOR / PHOTOSHOP','fev-2023','KickFlip','./src/Pages/KickFlip.html'],
  ['./src/Img/Rodtchenko/Magazine.jpg','[Recherches sur alexandre rodtchenko]','ILLUSTRATOR / PHOTOSHOP / indesign','mar-2023','AlexandreRodtchenko','./src/Pages/AlexandreRodtchenko.html'],
  /*['./src/Img/MaisonSoustraire/MagazineMockup.jpg','[Analyse exposition maison soustraire]','ILLUSTRATOR / PHOTOSHOP / Indesign','avr-2023','MaisonSoustraire','./src/Pages/MaisonSoustraire.html'],*/
  ['./src/Img/TMF/Devanture.jpg','[Identité des Transports Mazenod Florian]','Illustrator / Photoshop / Figma','mai-2023','TMF','./src/Pages/TMF.html']/*,
  ['./src/Img/EspaceTestEnArchipel/Cover.jpg','[Espace-test en archipel]','Photoshop / indesign / illustrator / figma','JAN-2023','EspaceTest','./src/Pages/EspaceTest.html']*/
];

// Crée une fonction pour créer une nouvelle div de projet si nécessaire.
function createDivProject(projects, index) {
  // Si le tableau de projets contient plus d'éléments que l'index donné,
  // alors crée une nouvelle div de projet et retourne-la.
  if (projects.length > index) {
    const divProject = document.createElement("div");
    divProject.classList.add("projets");
    return divProject;
  }

  // Sinon, retourne null.
  return null;
}

// Met à jour les boucles for pour créer de nouvelles divs de projet si nécessaire.
for (let i = 0; i < Projets.length; i += 3) {
  // Crée une nouvelle div de projet, si nécessaire.
  const divProject = createDivProject(Projets, i);

  // Si une nouvelle div de projet a été créée, l'ajouter à la div "BoiteProjet".
  if (divProject) {
    BoiteProjet.appendChild(divProject);
  }

  // Pour chaque projet dans le tableau de projets,
  // à partir de l'index donné jusqu'à l'index donné + 3 (ou jusqu'à la fin du tableau, si nécessaire),
  for (let j = i; j < i + 3 && j < Projets.length; j++) {
    // Obtiens le projet actuel.
    const project = Projets[j];

    // Crée les divs nécessaires pour le projet.
    const div1Projet = document.createElement("div");
    div1Projet.setAttribute("id", `my-div${j}`);
    div1Projet.style.display = "flex";
    div1Projet.style.flexDirection = "column";
    div1Projet.style.paddingLeft = "20px";
    div1Projet.style.paddingRight = "20px";
    div1Projet.style.paddingTop = "50px";
    div1Projet.style.paddingBottom = "30px";

    // Ajoute la div "div1Projet" à la div de projet.
    divProject.appendChild(div1Projet);

    const div2Projet = document.createElement("div");
    const bg = project[0];

    div2Projet.classList.add(`my-div${j}`);
    div2Projet.style.width = "100%";
    div2Projet.style.height = "50rem";
    div2Projet.style.backgroundImage = `url("${bg}")`;
    div2Projet.style.backgroundRepeat = "no-repeat";
    div2Projet.style.backgroundSize = "cover";
    div2Projet.style.marginBottom = "5px";
    div2Projet.style.backgroundPosition = "center";

    // Ajoute la div "div2Projet" à la div "div1Projet".
    div1Projet.appendChild(div2Projet);

    // Crée une nouvelle div avec la classe "Bigger".
    const div3Projet = document.createElement("div");
    div3Projet.classList.add("Bigger");

    // Ajoute la div "div3Projet" à la div "div2Projet".
    div2Projet.appendChild(div3Projet);

    // Crée un nouveau nœud de texte contenant le titre du projet.
    const titre = document.createTextNode(project[1]);

    // Crée un nouveau paragraphe avec l'id `my-div${j}`, les classes `projetsTitre` et `Primary`, et le style `text-decoration: none`.
    const text1Projet = document.createElement("p");
    text1Projet.setAttribute("id", `my-div${j}`);
    text1Projet.classList.add("projetsTitre");
    text1Projet.classList.add("Primary");
    text1Projet.style.textDecoration = "none";

    // Ajoute le nœud de texte `titre` au paragraphe `text1Projet`.
    text1Projet.appendChild(titre);

    // Ajoute le paragraphe `text1Projet` à la div "div1Projet".
    div1Projet.appendChild(text1Projet);

    // Crée un nouveau nœud de texte contenant le sous-titre du projet.
    const sousTitre = document.createTextNode(project[2]);

    // Crée un nouveau paragraphe avec l'id `my-div${j}`, les classes `projetsInfo` et `Primary`, la propriété `style.text-decoration: none`, et l'opacité `0.5`.
    const text2Projet = document.createElement("p");
    text2Projet.setAttribute("id", `my-div${j}`);
    text2Projet.classList.add("projetsInfos");
    text2Projet.classList.add("Primary");
    text2Projet.style.textDecoration = "none";
    text2Projet.style.opacity = "0.5";

    // Ajoute le nœud de texte `sousTitre` au paragraphe `text2Projet`.
    text2Projet.appendChild(sousTitre);

    // Ajoute le paragraphe `text2Projet` à la div "div1Projet".
    div1Projet.appendChild(text2Projet);

    // Crée un nouveau nœud de texte contenant le deuxième sous-titre du projet.
    const sousTitre2 = document.createTextNode(project[3]);

    // Crée un nouveau paragraphe avec l'id `my-div${j}`, les classes `projetsInfo` et `Primary`, la propriété `style.text-decoration: none`, et l'opacité `0.5`.
    const text3Projet = document.createElement("p");
    text3Projet.setAttribute("id", `my-div${j}`);
    text3Projet.classList.add("projetsInfos");
    text3Projet.classList.add("Primary");
    text3Projet.style.textDecoration = "none";
    text3Projet.style.opacity = "0.5";

    // Ajoute le nœud de texte `sousTitre2` au paragraphe `text3Projet`.
    text3Projet.appendChild(sousTitre2);

    // Ajoute le paragraphe `text3Projet` à la div "div1Projet".
    div1Projet.appendChild(text3Projet);
}
}


// Sélectionne les divs avec les id "my-div0" à "my-div4".
const LeLien = document.querySelector('#my-div0');
const LeLien1 = document.querySelector('#my-div1');
const LeLien2 = document.querySelector('#my-div2');
const LeLien3 = document.querySelector('#my-div3');
const LeLien4 = document.querySelector('#my-div4');
const LeLien5 = document.querySelector('#my-div5');
const LeLien6 = document.querySelector('#my-div6');

// Ajoute un écouteur d'événements "click" à chaque div.
LeLien.addEventListener('click', function() {
  // Ouvre la page dans l'onglet actuel.
  window.open(Projets[0][5], '_self');
});

LeLien1.addEventListener('click', function() {
  window.open(Projets[1][5], '_self');
});

LeLien2.addEventListener('click', function() {
  window.open(Projets[2][5], '_self');
});

LeLien3.addEventListener('click', function() {
  window.open(Projets[3][5], '_self');
});

LeLien4.addEventListener('click', function() {
  window.open(Projets[4][5], '_self');
});

LeLien5.addEventListener('click', function() {
  window.open(Projets[5][5], '_self');
});

LeLien6.addEventListener('click', function() {
  window.open(Projets[6][5], '_self');
});

