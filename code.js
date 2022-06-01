let background = document.getElementsByClassName("FourthPage");
let word1 = document.getElementsByClassName("word1");


word1.addEventListener('mouseover', (e)=> {
    background.classList.add("show1"); 
});

word1.addEventListener('mouseup', (e)=> {
    background.classList.remove("show1");
});

