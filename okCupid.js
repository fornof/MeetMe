//copy and paste this into a javascript runner
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function likeMe(amount, waitTime){
 for(let i =0 ; i < amount; i++){ 
     await sleep(waitTime); 
     console.log(document.getElementsByClassName("cardactions-action--like")[0]);
     document.getElementsByClassName("cardactions-action--like")[0].click();
     
     console.log("liking" + i + " times");
     }   
    
}
likeMe(500, 3000)


//copy and paste this into a javascript runner

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function likeMe(amount, waitTime, mod = 3) {
    for (let i = 0; i < amount; i++) {
        await sleep(waitTime);

        if (mod % 3 == 0) {
            console.log(document.getElementsByClassName("cardactions-action--like")[0]);
            document.getElementsByClassName("cardactions-action--like")[0].click();

            console.log("liking" + i + " times");
        } else {
            console.log(document.getElementsByClassName("cardactions-action--reject")[0]);
            document.getElementsByClassName("cardactions-action--reject")[0].click();

            console.log("rejecting" + i + " times");
        }
    }

}

likeMe(500, 3000, 3);
