function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string){
   let uppercase=string.toUpperCase();
    console.log (uppercase);
}
function logWhisper(string){
    let lowercase=string.toLowerCase();
    console.log (lowercase);
}
function sayHiToHeadphonedRoommate(string){
    if(string.toLowerCase()===string){
        return "I can't hear you!";
    }
    if(string.toUpperCase()===string){
        return "YES INDEED!";
    }
    if(string=== "Let's have dinner together!"){
        return "I would love to!";
    }

    }





