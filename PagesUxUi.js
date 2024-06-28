// Sélectionne la div avec l'id "LaBoiteProjet".
const BoiteProjet = document.querySelector('#LaBoiteProjet');

// Déclaration d'un tableau contenant les informations des projets.
var Projets = [
  ['../Img/HEF-ActionnariatSalarié/TableauDeBord.jpg','[HEF Actionnariat Salarié]','Figma','avr-2023','HEF','./HEF.html'],
  ['../Img/ConcertApp/Cover.jpg','[Projet application ConcertApp]','Figma','dec-2022','ConcertApp','./ConcertApp.html'],
  ['../Img/SwipeCarbon/Cover1.jpg','[Application SwipeCarbon]','Figma','jan-2022','SwipeCarbon','./SwipeCarbon.html']
  //['../Img/Enshantay/Building.png','[Projet WebRadio Enshantay]','Figma','En construction','Enshantay','#'],
  //['../Img/Nidaie/NidaieCover.png','[Projet site vitrine et application Nidaie]','Figma','En construction','Nidaie','#'],
  //['../Img/LeGrenier/Preview.png','[Projet site e-commerce]','Figma / Wordpress','Mai 2024','Nidaie','#']
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

// Crée une fonction pour afficher plus de projets
function afficherPlus(projects, startIndex) {
  // Vérifie si le nombre de projets restant est supérieur à 3
  if (projects.length > startIndex + 3) {
    // Crée un bouton "Afficher plus"
    const showMoreButton = document.createElement("div");
    const showMoreText = document.createElement("p");
    showMoreText.textContent = "Plus de projets";
    showMoreButton.appendChild(showMoreText);
    showMoreButton.classList.add("ShowMore");


    // Stocke la liste des divs à cacher/montrer
    const divsToToggle = [];

    // Crée une div pour les projets cachés
    const divProject2 = document.createElement("div");
    divProject2.classList.add("Projets3"); // Change la classe en "Projets3"
    divProject2.style.display = "none"; // Cache la div par défaut

    // Ajoute un écouteur d'événement au bouton pour afficher plus de projets
    showMoreButton.addEventListener("click", () => {
      // Cache le bouton "Afficher plus"
      showMoreText.textContent = showMoreText.textContent === "Plus de projets" ? "Moins de projets" : "Plus de projets";
      // Inverse l'état des divs
      divsToToggle.forEach(div => {
        div.style.display = div.style.display === "none" ? "flex" : "none";
      });

      // Inverse l'état de la divProject2
      divProject2.style.display = divProject2.style.display === "none" ? "flex" : "none";
    });

    // Ajoute le bouton "Afficher plus" à la div "BoiteProjet" **avant** les divs cachées
    BoiteProjet.appendChild(showMoreButton);

    // Ajoute la divProject2 à la div "BoiteProjet"
    BoiteProjet.appendChild(divProject2);

    // Boucle sur les projets restants et crée les divs
    let j = startIndex + 3;
    let divProjectCount = 0; // Compteur de projets dans la ligne actuelle
    while (j < projects.length) {
      // Crée une nouvelle div de projet pour la ligne si nécessaire
      if (divProjectCount === 0) {
        const divProject = createDivProject(projects, j);
        divProject2.appendChild(divProject);
      }

      // Crée les divs nécessaires pour le projet
      const project = projects[j];

      const div1Projet = document.createElement("div");
      div1Projet.setAttribute("id", `my-div${j}`);
      div1Projet.style.display = "none"; // Cache les divs par défaut
      div1Projet.style.flexDirection = "column";
      div1Projet.style.paddingLeft = "20px";
      div1Projet.style.paddingRight = "20px";
      div1Projet.style.paddingTop = "50px";
      div1Projet.style.paddingBottom = "30px";

      // Ajoute la div "div1Projet" à la dernière div de projet
      divProject2.children[divProject2.children.length - 1].appendChild(div1Projet); 

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

      div1Projet.appendChild(div2Projet);

      const div3Projet = document.createElement("div");
      div3Projet.classList.add("Bigger");

      div2Projet.appendChild(div3Projet);

      const titre = document.createTextNode(project[1]);
      const text1Projet = document.createElement("p");
      text1Projet.setAttribute("id", `my-div${j}`);
      text1Projet.classList.add("projetsTitre");
      text1Projet.classList.add("Primary");
      text1Projet.style.textDecoration = "none";
      text1Projet.appendChild(titre);
      div1Projet.appendChild(text1Projet);

      const sousTitre = document.createTextNode(project[2]);
      const text2Projet = document.createElement("p");
      text2Projet.setAttribute("id", `my-div${j}`);
      text2Projet.classList.add("projetsInfos");
      text2Projet.classList.add("Primary");
      text2Projet.style.textDecoration = "none";
      text2Projet.style.opacity = "0.5";
      text2Projet.appendChild(sousTitre);
      div1Projet.appendChild(text2Projet);

      const sousTitre2 = document.createTextNode(project[3]);
      const text3Projet = document.createElement("p");
      text3Projet.setAttribute("id", `my-div${j}`);
      text3Projet.classList.add("projetsInfos");
      text3Projet.classList.add("Primary");
      text3Projet.style.textDecoration = "none";
      text3Projet.style.opacity = "0.5";
      text3Projet.appendChild(sousTitre2);
      div1Projet.appendChild(text3Projet);

      div1Projet.addEventListener('click', function() {
        window.open(project[5], '_self');
      });

      divsToToggle.push(div1Projet);

      j++; // Incrémente l'index pour le prochain projet
      divProjectCount++; // Incrémente le compteur de projets dans la ligne

      // Crée une nouvelle ligne si le compteur atteint 3
      if (divProjectCount === 3) {
        divProjectCount = 0; // Réinitialise le compteur pour la nouvelle ligne
      }
    }
  }
}

// Met à jour les boucles for pour créer de nouvelles divs de projet si nécessaire.
let divProjectCount = 0;
for (let i = 0; i < 9; i += 3) { // Affiche les trois premières lignes
  // Crée une nouvelle div de projet, si nécessaire.
  const divProject = createDivProject(Projets, i);

  // Si une nouvelle div de projet a été créée, l'ajouter à la div "BoiteProjet".
  if (divProject) {
    BoiteProjet.appendChild(divProject);
    divProjectCount++;

    // Appelle la fonction afficherPlus pour afficher plus de projets si nécessaire
    if (divProjectCount === 3 && i + 3 < Projets.length) {
      afficherPlus(Projets, i);
    }
  }

  // Pour chaque projet dans le tableau de projets,
  // à partir de l'index donné jusqu'à l'index donné + 3 (ou jusqu'à la fin du tableau, si nécessaire),
  for (let j = i; j < i + 3 && j < Projets.length; j++) {
    // Obtiens le projet actuel.
    const project = Projets[j];

    // Crée les divs nécessaires pour le projet.
    const div1Projet = document.createElement("div");
    div1Projet.setAttribute("id", `my-div${j}`);
    div1Projet.style.display = "flex"; // Affiche les divs par défaut
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

    // Ajoute un écouteur d'événement "click" à la div "div1Projet" pour ouvrir la page du projet
    div1Projet.addEventListener('click', function() {
      window.open(project[5], '_self');
    });
  }
}