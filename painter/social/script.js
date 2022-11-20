let texth1 = `My discord: Playdayer#0001`;
let texth2 = `My github: https://github.com/Playdayer`;

let ourh1 = document.querySelector(".t");
let ourh2 = document.querySelector(".d");

let text1 = ``;
let text2 = ``;

let input = (i) => {
    setTimeout(() => {
        text1 += texth1[i];
        ourh1.textContent = text1;
    }, 60 * i)
}

for(let i = 0; i < texth1.length; i++) {
    input(i) 
};

let input2 = (i) => {
    setTimeout(() => {
        text2 += texth2[i];
        ourh2.textContent = text2;
    }, 60 * i)
}

for(let i = 0; i < texth2.length; i++) {
    input2(i) 
};

ourh2.addEventListener("click", () => {
    window.open("https://github.com/Playdayer");
})