//tinder
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}

async function likeMe(amount, waitTime){
for(let i =0 ; i < amount; i++){
let ilike = document.getElementsByClassName("button recsGamepad__button--like")[0]
let pass= document.getElementsByClassName("button Lts($ls-s) Z(0) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) recsGamepad__button D(b) Bgc(#fff) Wc($transform) recsGamepad__button--dislike")[0]

// begin swipe left of every 13th 
if(i %13 ==0){
    if(pass){
    pass.click();
    }
    continue;
}
// end of swipe left of every 13th 
await sleep(waitTime);
if(ilike){
ilike.click();
}
console.log("liking" + i + " times");
}
}
likeMe(100, 1000);
