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
