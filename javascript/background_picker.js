NUM_BACKGROUNDS = 24
pick = Math.floor(Math.random() * NUM_BACKGROUNDS) + 1


let id = document.getElementById("home")


if (screen.width >= 1300) {

	bkground = "url('backgrounds/background_" + String(pick) + ".png')"
	id.style.backgroundImage = bkground


}
else {
	bkground = "url('mobile_backgrounds/mobile_background_" + String(pick) + ".png')"
	id.style.backgroundImage = bkground
}

id.style.backgroundSize = "cover";
id.style.backgroundRepeat = "no-repeat"


