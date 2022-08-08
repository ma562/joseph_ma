pick = Math.floor(Math.random() * 2)
console.log(pick)
console.log(screen.width)

let id = document.getElementById("home")

if (pick == 0){
	id.style.backgroundImage = "url('backgrounds/background_2.png')"
}
else{
	id.style.backgroundImage = "url('backgrounds/background_1.png')"
}

if (screen.width < 1300) {
	id.style.backgroundImage = "url('mobile_backgrounds/mobile_background_1.png')"
}
else {

}
id.style.backgroundSize = "cover";
id.style.backgroundRepeat = "no-repeat"


