// Generate array of songs and generate a random number from array.
var numberOfSongs = 11;
var sound = new Array(numberOfSongs)
sound[0] = "./music/joji x shamana - BESIDJU.mp3"
sound[1] = "./music/Her.mp3"
sound[2] = "./music/Thom.mp3"
sound[3] = "./music/unsaved info.mp3"
sound[4] = "./music/you suck charlie.mp3"
sound[5] = "./music/joji - demons.mp3"
sound[6] = "./music/i dont wanna waste my time.mp3"
sound[7] = "./music/joji - rain on me.mp3"
sound[8] = "./music/Water Or Concrete.mp3"
sound[9] = "./music/Again (Hold Your Horses) prod. Nadiak.mp3"
sound[10] = "./music/Hell In My Thoughts.mp3"

function randomNumber(){
var randomLooper = -1
while (randomLooper < 0 || randomLooper > numberOfSongs || isNaN(randomLooper)){ randomLooper = parseInt(Math.random()*(numberOfSongs))
}
return randomLooper
}
var prevrandomSub;
var prevprevrandomSub;
var randomSub;
var soundFile
var audio;

    function playSong() {
    //window.alert(randomSub);
    // Make randomSub the random number and make soundFile lead to random number respective song.
    randomSub = randomNumber()
    //window.alert(randomSub);
    soundFile = sound[randomSub]
	if (audio != null)
	{
		audio.pause();
	}
		
    if (randomSub == prevrandomSub) {
        //window.alert("prevrandomSub");
        playSong();
    }
    else if (randomSub == prevprevrandomSub) {
        //window.alert("prevprevrandomSub")
        playSong()
    }
    
    else {
    
    // Display current playing song in text.
	switch(randomSub) {
        case 0:
			document.getElementById("playing").innerHTML = 
            "<p>NOW PLAYING: JOJI X SHAMANA - BESIDJU</p>";
			playing.setAttribute('style', 'position: absolute;top: 57%;left: 50%;text-align: center; display: block;transform: translate(-50%, -50%);white-space: nowrap')
        break;
        case 1:
            document.getElementById("playing").innerHTML = 
            "<p>NOW PLAYING: EERY - HER</p>";
            playing.setAttribute('style', 'position: absolute;top: 57%;left: 50%;text-align: center; display: block;transform: translate(-50%, -50%);white-space: nowrap')
			break;
        case 2:
            document.getElementById("playing").innerHTML = 
            "<p>NOW PLAYING: JOJI - THOM</p>";
            playing.setAttribute('style', 'position: absolute;top: 57%;left: 50%;text-align: center; display: block;transform: translate(-50%, -50%);white-space: nowrap')
			break;
        case 3:
            document.getElementById("playing").innerHTML = 
            "<p>NOW PLAYING: JOJI - UNSAVED INFO</p>";
            playing.setAttribute('style', 'position: absolute;top: 57%;left: 50%;text-align: center; display: block;transform: translate(-50%, -50%);white-space: nowrap')
			break;
        case 4:
            document.getElementById("playing").innerHTML = 
            "<p>NOW PLAYING: JOJI - YOU SUCK CHARLIE</p>";
            playing.setAttribute('style', 'position: absolute;top: 57%;left: 50%;text-align: center; display: block;transform: translate(-50%, -50%);white-space: nowrap')
			break;
        case 5:
            document.getElementById("playing").innerHTML = 
			"<p>NOW PLAYING: JOJI - DEMONS</p>";
            playing.setAttribute('style', 'position: absolute;top: 57%;left: 50%;text-align: center; display: block;transform: translate(-50%, -50%);white-space: nowrap')
			break;
        case 6:
            document.getElementById("playing").innerHTML = 
            "<p>NOW PLAYING: JOJI - I DON'T WANNA WASTE MY TIME</p>";
            playing.setAttribute('style', 'position: absolute;top: 57%;left: 50%;text-align: center; display: block;transform: translate(-50%, -50%);white-space: nowrap')
			break;
        case 7:
            document.getElementById("playing").innerHTML = 
            "<p>NOW PLAYING: JOJI - RAIN ON ME</p>";
            playing.setAttribute('style', 'position: absolute;top: 57%;left: 50%;text-align: center; display: block;transform: translate(-50%, -50%);white-space: nowrap')
			break;
        case 8:
            document.getElementById("playing").innerHTML = 
            "<p>NOW PLAYING: SETEC - WATER OR CONCRETE</p>";
            playing.setAttribute('style', 'position: absolute;top: 57%;left: 50%;text-align: center; display: block;transform: translate(-50%, -50%);white-space: nowrap')
			break;
        case 9:
            document.getElementById("playing").innerHTML = 
            "<p>NOW PLAYING: THE ZODIAC FATHER - AGAIN (HOLD YOUR HORSES)</p>";
            playing.setAttribute('style', 'position: absolute;top: 57%;left: 50%;text-align: center; display: block;transform: translate(-50%, -50%);white-space: nowrap')
			break;
        case 10:
			document.getElementById("playing").innerHTML = 
			"<p>NOW PLAYING: THE ZODIAC FATHER - HELL IN MY THOUGHTS</p>";
			playing.setAttribute('style', 'position: absolute;top: 57%;left: 50%;text-align: center; display: block;transform: translate(-50%, -50%);white-space: nowrap')
			break;
	}
	
    prevprevrandomSub = prevrandomSub;
    prevrandomSub = randomSub;
    // Create audio from soundFile and play it.
    audio = new Audio(soundFile);
    audio.play();
	// Lower volume to something bearable
    audio.volume = 0.2;
    // Pick new song after old one ends.
    audio.onended = function(){playSong()};
    }
}        

// Does spicy stuff
function curry() {
	document.location.href = "../curry/index.html#attention";
}
