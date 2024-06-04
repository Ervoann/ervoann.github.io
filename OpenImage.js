// Get all divs on the page with the Image class
const imageDivs = document.querySelectorAll('.Image');

// Add a click event listener to each image div
imageDivs.forEach(div => {
  div.addEventListener('click', () => {
    // Get the background image URL of the div
    const backgroundImageUrl = div.style.backgroundImage;

    const backgroundImageBackground= document.createElement('div');
    backgroundImageBackground.style.backgroundColor = "var(--Tertiary)"
    backgroundImageBackground.style.top = '0';
    backgroundImageBackground.style.left = '0';
    backgroundImageBackground.style.width = '100%';
    backgroundImageBackground.style.height = '100%';
    backgroundImageBackground.style.zIndex = '800';

    // Create a new element to display the background image
    const backgroundImageElement = document.createElement('div');
    backgroundImageElement.style.backgroundImage = backgroundImageUrl;
    backgroundImageElement.style.position = 'fixed';
    backgroundImageElement.style.backgroundSize = "contain";
    backgroundImageElement.style.backgroundPosition = "center";
    backgroundImageElement.style.backgroundRepeat = "no-repeat";
    backgroundImageElement.style.top = '0';
    backgroundImageElement.style.left = '0';
    backgroundImageElement.style.width = '100%';
    backgroundImageElement.style.height = '100%';
    backgroundImageElement.style.zIndex = '1000';


    // Create a close button
    const closeButton = document.createElement('span');
    closeButton.innerHTML = 'X';
    closeButton.style.fontSize = '50px';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.backgroundColor = 'var(--Tertiary)';
    closeButton.style.color = 'var(--Primary)';
    closeButton.style.paddingLeft = '20px';
    closeButton.style.paddingRight = '20px';
    closeButton.style.paddingTop = '5px';
    closeButton.style.paddingBottom = '5px';
    closeButton.style.outline = 'none';
    

    // Add the close button to the background image element
    backgroundImageElement.appendChild(closeButton);

    // Add the background image element to the body
    document.body.appendChild(backgroundImageElement);

    // Add a click event listener to the close button
    closeButton.addEventListener('click', () => {
      // Remove the background image element from the body
      document.body.removeChild(backgroundImageElement);
    });

    backgroundImageElement.addEventListener('click', () => {
      // Remove the background image element from the body
      document.body.removeChild(backgroundImageElement);
    });
    
  });
});
