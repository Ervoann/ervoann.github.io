const mode = document.querySelector('#SwitchMode');
const mode2 = document.querySelector('#SwitchMode2');

var current = localStorage.getItem('current');
if (current === null) {
  current = 0;
}
else {
  current = current
  console.log(current)
}

// Set the CSS variables based on the current value.
setCSSVariables();

// Add a click event listener to the divs.
mode.addEventListener('click', function() {
  toggleCurrent();
  setCSSVariables();
});

mode2.addEventListener('click', function() {
  toggleCurrent();
  setCSSVariables();
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
