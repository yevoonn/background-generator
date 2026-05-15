/*
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var buttton = document.getElementById("random");

setGradient();

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function generateColors() {
	var num1 = Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString();
	var num2 = Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString();

	color1.value = "#" + num1 + color1.value.substring(3,color1.value.length);
	color2.value = "#" + num1 + color2.value.substring(3,color2.value.length);

	setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", generateColors);
*/

const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomButton = document.getElementById("random");

setGradient = () => {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = `${body.style.background};`;
};

generateColors = () => {
	const num1 = Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString();
	const num2 = Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString();

	color1.value = `#${num1}${color1.value.substring(3,color1.value.length)}`;
	color2.value = `#${num2}${color2.value.substring(3,color2.value.length)}`;

	setGradient();
}

setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", generateColors);