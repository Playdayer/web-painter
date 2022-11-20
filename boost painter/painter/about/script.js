let texth1 = `Soooooo... info about me: my nickname is Playdayer, I'm 13 y.o. and I'm from Ukraine. 
Now i learning js to become web-dev. This web-painter not finalized.
I made it becouse it's great canvas practice. My final goal is not a web developer,
I don't have a final goal. I will do everything spontaneously. 
For example, first I will master web-dev, then C ++ and Python, 
and then I will freelance and do my pet projects. I hope you enjoy this web-painter. You can check
"My contacts to write and talk with me. By the way, if you need to make some kind of simple website
but you don’t know how and you don’t have much money - you can also write
to me by looking at "My contacts", I will try to do what you need cheaper,
as this is a good practice. In general, write to me if you need something. Good luck !`;


let ourh1 = document.querySelector(".t");

let text1 = ``;

let input = (i) => {
    setTimeout(() => {
        text1 += texth1[i];
        ourh1.textContent = text1;
        ourh1.append(span)
    }, 60 * i)
}

for(let i = 0; i < texth1.length; i++) {
    input(i) 
};