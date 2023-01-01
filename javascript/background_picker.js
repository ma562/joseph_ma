// alert("Website is currently under maintenance - theme and memories section work in progress.")

const my_background = localStorage.getItem('my__background');
const is_theme = localStorage.getItem('is__theme')

let id = document.getElementById("home")

if((my_background == null) || (is_theme == null)) {
	//we did not previously select a background --> randomly generate one
	NUM_BACKGROUNDS = 28
	pick = Math.floor(Math.random() * NUM_BACKGROUNDS) + 1

	if (screen.width >= 1300) {

		bkground = "url('backgrounds/background_" + String(pick) + ".png')"
		id.style.backgroundImage = bkground
	}
	else {
		bkground = "url('mobile_backgrounds/mobile_background_" + String(pick) + ".png')"
		id.style.backgroundImage = bkground
	}

}
else {
	//memories background selector
	if(is_theme) {
		alert("it's themes")
		pick = my_background
		pick *= 4;
		pick -= Math.floor(Math.random() * 4);
		if (screen.width >= 1300) {
			bkground = "url('backgrounds/background_" + String(pick) + ".png')"
		}
		else {
			bkground = "url('mobile_backgrounds/mobile_background_" + String(pick) + ".png')"
		}
		id.style.backgroundImage = bkground
	}
	else {
		alert("it's memory")
		if(screen.width >= 1300) {
			bkground = "url('memories/" + my_background + ".png')"
		}
		else {
			bkground = "url('mobile_memories/" + my_background + ".png')"
		}
		id.style.backgroundImage = bkground
	}
}

//code change
// bkground = "url('backgrounds/Base_Background.png')"
// id.style.backgroundImage = bkground

//here

id.style.backgroundSize = "cover";
id.style.backgroundRepeat = "no-repeat"

localStorage.removeItem('my__background');
