let texth1 = `Web-Painter`;
let texth2 = `I hope you will do very cool image`;
let textButton = `Start draw`;
let textAbout = `About me`;
let textSocial = `My contacts`

let ourh1 = document.querySelector(".texttt");
let ourh2 = document.querySelector(".textttt");
let playButton = document.querySelector(".play");
let meButton = document.querySelector(".me");
let socialButton = document.querySelector(".social");

let text1 = ``;
let text2 = ``;
let text3 = ``;
let text4 = ``;
let text5 = ``;
let text6 = ``;

let input = (i) => {
    setTimeout(() => {
        text1 += texth1[i];
        ourh1.textContent = text1;
        ourh1.append(span)
    }, 50 * i)
}

for(let i = 0; i < texth1.length; i++) {
    input(i) 
};
setTimeout(() => {
    let input2 = (e) => {
        setTimeout(() => {
            text2 += texth2[e];
            ourh2.textContent = text2;
            ourh2.append(span)
        }, 50 * e)
    }
    
    for(let e = 0; e < texth2.length; e++) {
        input2(e) 
    };
}, 1000)

setTimeout(() => {
    let input3 = (r) => {
        setTimeout(() => {
            text3 += textButton[r];
            playButton.textContent = text3;
            playButton.append(span)
        }, 50 * r)
    }
    
    for(let r = 0; r < textButton.length; r++) {
        input3(r) 
    };

    let input5 = (g) => {
        setTimeout(() => {
            text5 += textAbout[g];
            meButton.textContent = text5;
            meButton.append(span)
        }, 50 * g)
    }
    
    for(let g = 0; g < textAbout.length; g++) {
        input5(g) 
    };

    let input6 = (g) => {
        setTimeout(() => {
            text6 += textSocial[g];
            socialButton.textContent = text6;
            socialButton.append(span)
        }, 50 * g)
    }
    
    for(let g = 0; g < textSocial.length; g++) {
        input6(g) 
    };
}, 3000)

const play = document.getElementById("play");
const about = document.getElementById("me");
const social = document.getElementById("social");

play.addEventListener("click", () => {
    window.location = "./game/index.html"
});

about.addEventListener("click", () => {
    window.location = "./about/index.html"
});

social.addEventListener("click", () => {
    window.location = "./social/index.html"
});