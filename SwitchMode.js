const mode = document.querySelector('#SwitchMode');
const mode2 = document.querySelector('#SwitchMode2');

var current = localStorage.getItem('current');
if (current === null) {
  current = 0;
}
else {
  current = current
}

// Set the CSS variables based on the current value.
setCSSVariables();

// Add a click event listener to the divs.
mode.addEventListener('click', function() {
  toggleCurrent();
  setCSSVariables();
  photos();
});

mode2.addEventListener('click', function() {
  toggleCurrent();
  setCSSVariables();
  photos();
});

// Function to toggle the current value.
function toggleCurrent() {
  current = current === 0 ? 1 : 0;
  localStorage.setItem('current', current);
}

// Function to set the CSS variables based on the current value.
function setCSSVariables() {
    if (current == 0) {
        // Open the page in the current tab.
        document.documentElement.style.setProperty('--Primary', 'rgb(19, 19, 19)');
        document.documentElement.style.setProperty('--Secondary', '#f5f5f5');
        document.documentElement.style.setProperty('--Tertiary', '#ececec');
        document.documentElement.style.setProperty('--Pick', '#0313ff');
      }
        else {
        // Open the page in the current tab.
        document.documentElement.style.setProperty('--Primary', '#f5f5f5');
        document.documentElement.style.setProperty('--Secondary', 'rgb(19, 19, 19)');
        document.documentElement.style.setProperty('--Tertiary', '#28282b');
        document.documentElement.style.setProperty('--Pick', '#ff0');
      }
}


function photos() {  // Récupère la valeur de la variable current
  const opera = document.querySelector(".opera");
  const logohighday = document.querySelector(".highday");
  const ziar = document.querySelector(".ziar");
  const optimiz = document.querySelector(".optimiz");
  const T2o = document.querySelector(".t2o");
  const sem = document.querySelector(".sem");
  const sclt = document.querySelector(".sousculture");
  const clap = document.querySelector(".clap");
  const hef = document.querySelector(".hef");
  const g404 = document.querySelector(".g404");

  // Initialise les variables de couleurs
  const whiteImageHighday = "../Img/Icons/logo_highday_darkmode.png";
  const blackImageHighday = "../Img/Icons/logo_highday_darkmode2.png";

  const whiteImageZiar = "../Img/Icons/ZIAR_LOGO_NOIR.png";
  const blackImageZiar = "../Img/Icons/ZIAR_LOGO_NOIR2.png";

  const whiteImageOptimiz = "../Img/Icons/LOGO_OPTIMIZ_LONG.png";
  const blackImageOptimiz = "../Img/Icons/LOGO_OPTIMIZ_LONG2.png";

  const whiteImageT2o = "../Img/Icons/T2o.png";
  const blackImageT2o = "../Img/Icons/T2o2.png";

  const whiteImageOpera = "../Img/Icons/6-logo-opera-saint-etienne.png";
  const blackImageOpera = "../Img/Icons/6-logo-opera-saint-etienne2.png";

  const whiteImageSem = "../Img/Icons/188_249_Logo-SEM-blanc.png";
  const blackImageSem = "../Img/Icons/188_249_Logo-SEM-blanc2.png";

  const whiteImageSousculture = "../Img/Icons/SousCulture.png";
  const blackImageSousculture = "../Img/Icons/SousCulture2.png";

  const whiteImageClap = "../Img/Icons/Logo-ClapFondTransparent.png";
  const blackImageClap = "../Img/Icons/Logo-ClapFondTransparent2.png";

  const whiteImageHef = "../Img/Icons/HEF_DURFERRIT_CMJN-01.png";
  const blackImageHef = "../Img/Icons/HEF_DURFERRIT_CMJN-012.png";

  const whiteImage404 = "../Img/Icons/cropped-garage404.png";
  const blackImage404 = "../Img/Icons/cropped-garage4042.png";
  

  // Parcours les images de la page
  const images = document.querySelectorAll("img");
  for (const image of images) {
    // Si current = 1, les images sont blanches
    if (current === 0) {
      logohighday.src = blackImageHighday;
      ziar.src = blackImageZiar;
      optimiz.src = blackImageOptimiz;
      T2o.src = blackImageT2o;
      opera.src = blackImageOpera;
      sem.src = blackImageSem;
      sclt.src = blackImageSousculture;
      clap.src = blackImageClap;
      hef.src = blackImageHef;
      g404.src = blackImage404;
    } else {
      // Sinon, les images sont noires
      logohighday.src = whiteImageHighday;
      ziar.src = whiteImageZiar;
      optimiz.src = whiteImageOptimiz;
      T2o.src = whiteImageT2o;
      opera.src = whiteImageOpera;
      sem.src = whiteImageSem;
      sclt.src = whiteImageSousculture;
      clap.src = whiteImageClap; 
      hef.src = whiteImageHef;
      g404.src = whiteImage404;
    }
  }
}