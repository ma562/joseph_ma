// alert("Website is currently under maintenance - theme and memories section work in progress.")
// function changeTextColor(colorForText1And3, colorForText2) {
//     // Change color for text-1 and text-3
//     document.querySelectorAll('.home .home-content .text-1, .home .home-content .text-3').forEach(function(el) {
//         el.style.color = colorForText1And3;
//     });

//     // Change color for text-2
//     document.querySelector('.home .home-content .text-2').style.color = colorForText2;
// }

// function changeTextColor(colorForText1And3, colorForText2) {
//     // Apply a stronger shadow to text-1 and text-3
//     document.querySelectorAll('.home .home-content .text-1, .home .home-content .text-3').forEach(function(el) {
//         el.style.color = colorForText1And3; // White or neon green
//         //el.style.textShadow = '3px 3px 6px #000000'; // Stronger black shadow
//         el.style.textShadow = '4px 4px 8px #000000'; // Stronger black shadow
//     });

//     // Apply a stronger shadow to text-2
//     document.querySelector('.home .home-content .text-2').style.color = colorForText2; // White or neon green
//     document.querySelector('.home .home-content .text-2').style.textShadow = '3px 3px 6px #000000'; // Stronger black shadow
// }
	

const my_background = localStorage.getItem('my__background');
const is_theme = localStorage.getItem('is__theme')

let id = document.getElementById("home")

if((my_background == null) || (is_theme == null)) {
	//we did not previously select a background --> randomly generate one
	let currentTime = new Date();
	let currentHour = currentTime.getHours();

	if (currentHour >= 18 || currentHour < 6) {
		//It's night time
  		if (screen.width >= 1300) {
  			bkground = "url('backgrounds/Base_Background_Night.png')"
  			id.style.backgroundImage = bkground
  		}
  		else {
  			bkground = "url('mobile_backgrounds/mobile_night.png')"
  			id.style.backgroundImage = bkground
  		}
	} else {
		//It's day time
  		if (screen.width >= 1300) {
  			bkground = "url('backgrounds/Base_Background_Day.png')"
  			id.style.backgroundImage = bkground
  		}
  		else {
  			bkground = "url('mobile_backgrounds/mobile_day.png')"
  			id.style.backgroundImage = bkground
  		}
	}

}
else {
	//memories background selector
	if(is_theme == 1) {
		pick = my_background
		pick *= 4;
		pick -= Math.floor(Math.random() * 4);
		if (screen.width >= 1300) {
			console.log(pick)
			bkground = "url('backgrounds/background_" + String(pick) + ".png')"
		}
		else {
			bkground = "url('mobile_backgrounds/mobile_background_" + String(pick) + ".png')"
		}
		id.style.backgroundImage = bkground
	}
	else {
		if(screen.width >= 1300) {
			bkground = "url('memories/" + my_background + ".png')"
		}
		else {
			bkground = "url('mobile_memories/mobile_" + my_background + ".png')"
		}
		id.style.backgroundImage = bkground

		// if (my_background === "fall23" && screen.width >= 1300) {
		// 	// adapt text color to background
		// 	changeTextColor('#FFFFFF', '#39FF14');
		// }
	}
}

//remove the localStorage so if page is refreshed we go back to homepage
// localStorage.removeItem('my__background');
// localStorage.removeItem('is__theme');

id.style.backgroundSize = "cover";
id.style.backgroundRepeat = "no-repeat"
