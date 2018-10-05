# MeeMe
Dating app clicker. 

You need a javascript script playback to use these scripts. [I recommend this one for chrome](https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija)
Copy and paste the javascript for the specified website , and put into the script playback. 


uncomment the last line, likeMe(<amount of times to swipe> , < amount of ms to wait between each swipe>) 
If either of those numbers are too high on POF or okCupid, the server will block your requests, so keep it reasonable. 
  
 ## Suggestions/Comments 
I generally do 10 seconds wait time with 200 to 400 swipes. On Tinder, I noticed that I didn't get matches if I swiped right all the time, so I have every 13th one swipe left.

POF needs localstorage to figure out when to stop.After you have loaded your script You will need to go into developer tools (F12) and type: ```setLocalStorageCount(100) ``` to set the counter to 100 in localstorage. You can also do ```localStorage.text = 100.toString()```



