pick = Math.floor(Math.random() * 2)
console.log(pick)
console.log(screen.width)

let id = document.getElementById("home")

if (pick == 0){
	id.style.backgroundImage = "url('images/glow_stark5.png')"
}
else{
	id.style.backgroundImage = "url('images/back12.png')"
}

if (screen.width < 1300) {
	id.style.backgroundImage = "url('images/mobile1.png')"
}
else {

}
id.style.backgroundSize = "cover";
id.style.backgroundRepeat = "no-repeat"


