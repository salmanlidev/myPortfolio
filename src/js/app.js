const hamburgerBtn = document.querySelector(".menu_hamburger")
const menu = document.querySelector(".menu")


hamburgerBtn.addEventListener("click", (e) => {
	hamburgerBtn.classList.toggle("activeHamburger")
    if (hamburgerBtn.classList.contains("activeHamburger")) {
        hamburgerBtn.innerHTML = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
   <path fill="#ffffff" d="M9.016,40.837c0.195,0.195,0.451,0.292,0.707,0.292c0.256,0,0.512-0.098,0.708-0.293l14.292-14.309
       l14.292,14.309c0.195,0.196,0.451,0.293,0.708,0.293c0.256,0,0.512-0.098,0.707-0.292c0.391-0.39,0.391-1.023,0.001-1.414
       L26.153,25.129L40.43,10.836c0.39-0.391,0.39-1.024-0.001-1.414c-0.392-0.391-1.024-0.391-1.414,0.001L24.722,23.732L10.43,9.423
       c-0.391-0.391-1.024-0.391-1.414-0.001c-0.391,0.39-0.391,1.023-0.001,1.414l14.276,14.293L9.015,39.423
       C8.625,39.813,8.625,40.447,9.016,40.837z"/>
   </svg>`;
        menu.style.display = "flex"
        menu.style.opacity = "1"
        menu.style.transform = "scale(1 , 1)"
    }
    else {
        hamburgerBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>`;
        menu.style.transform = "scale(0)"
        menu.style.opacity = "0"
		
    }
	
})

document.querySelector(".menu nav").addEventListener("click" , () => {
	if(window.innerWidth < 822){
		hamburgerBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>`;
	menu.style.transform = "scale(0)"
	menu.style.opacity = "0"
	hamburgerBtn.classList.remove("activeHamburger")
	}
})

// List of sentences
let _CONTENT = [ 
	"Frontend Devoloper", 
	"Web Devoloper" ,
];

// Current sentence being processed
let _PART = 0;

// Character number of the current sentence being processed 
let _PART_INDEX = 0;

// Holds the handle returned from setInterval
let _INTERVAL_VAL;

// Element that holds the text
let _ELEMENT = document.querySelector("#hero_about_type");

// Cursor element 
// let _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	let text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		// Hide the cursor
		// _CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	let text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			// _CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 50);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 50);


const myTags = [
	'JavaScript', 'CSS', 'HTML',
	'React', 'git', 'Node.js',
	"Bootstrap", "Tailwindcss", "Axios",
	"Typescript", "SASS", "Next.js"
];



let windowSize = 300 ;

let tagCloud =  TagCloud('.skills', myTags , {
	radius : windowSize , 
	maxSpeed : "normal" ,
	initSpeed : "fast" ,
	direction : 135 , 
	keep : true
});


if(window.innerWidth < 700) {
	document.querySelector(".about__section").removeAttribute("id")
	document.querySelector(".about__left").setAttribute("id" , "about")
}