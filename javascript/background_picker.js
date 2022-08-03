pick = Math.floor(Math.random() * 2)
console.log(pick)

let id = document.getElementById("home")

if (pick == 0){
	id.style.backgroundImage = "url('images/glow_stark5.png')"
}
else{
	id.style.backgroundImage = "url('images/back_test.png')"
}


id.style.backgroundSize = "cover";
id.style.backgroundRepeat = "no-repeat"