//alert("Joseph's currently working on a memories section of his website. It's not working at the moment but will be up by the beginning of 2023. Click Ok to continue to site.")

const my_background = localStorage.getItem('my__background');

let id = document.getElementById("home")

if(my_background == null) {
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
	if(my_background > 0) {
		pick = my_background
		pick *= 4;
		pick -= Math.floor(Math.random() * 4);
	}
	if (screen.width >= 1300) {
		bkground = "url('backgrounds/background_" + String(pick) + ".png')"
		id.style.backgroundImage = bkground
	}
	else {
		bkground = "url('mobile_backgrounds/mobile_background_" + String(pick) + ".png')"
		id.style.backgroundImage = bkground
	}
}

id.style.backgroundSize = "cover";
id.style.backgroundRepeat = "no-repeat"

localStorage.removeItem('my__background');
