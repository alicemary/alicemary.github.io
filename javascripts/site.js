// main menu scrolls to different sections

// node list for main menu buttons
const MAINMENU = document.querySelectorAll(".dropdown button");

// dropdown menu
const DROPDOWN = document.querySelector(".dropdown");

// hamburger icon
const HAMBURGER = document.querySelector(".hamburger_container");



// main menu buttons scroll to different sections on the webpage
for (let button of MAINMENU){
	button.addEventListener('click', function(){
		let section = button.innerHTML;
		console.log(section);
		document.getElementById(section).scrollIntoView({behavior: "smooth"});
	 	console.log("button clicked");
	});
};

// hide the dropdown menu when the page loads
DROPDOWN.classList.add("hide");

function toggleMenu(){
	console.log("toggle");
	DROPDOWN.classList.toggle("hide");
}


HAMBURGER.addEventListener('click', toggleMenu);