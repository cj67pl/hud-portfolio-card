//Infinite scrolling of the technologies

const track = document.querySelector('.technologies-track');
const images = document.querySelectorAll(".tech-container img");

let lastTime = performance.now();
let paused = false;
let pos = 0;
const speed= 20;

// duplicate track
track.append(...track.cloneNode(true).childNodes);

const trackHalfWidth = track.scrollWidth / 2;

images.forEach(img => {
    img.addEventListener('mouseenter', () => {
        paused = true;
        img.classList.add('active');
        // console.log(img);
        
    });
    img.addEventListener('mouseleave', () => {
		paused = false;
		img.classList.remove("active");
	});
})


function animate(now) {
    const delta = now - lastTime;
    lastTime = now;

    if (!paused) {
        
        pos -= (speed * delta) / 1000;

        if(Math.abs(pos) >= trackHalfWidth / 2) {
            pos = 0;
        }
        track.style.transform = `translateX(${pos}px)`;

    }
    
    requestAnimationFrame(animate);
    
}

animate(lastTime);




//Hover Pop-ups

//Guild Info Pop-up
const hoveredLogo = document.querySelector('.guild-name-box');
const hoveredLogoImg = document.querySelector(".guild-name-box img");
const popUp = document.querySelector('.pop-up-container');

hoveredLogo.addEventListener('mouseenter', () => {
    popUp.classList.add('active-guild-info');
    hoveredLogoImg.classList.add("active-logo");
});

hoveredLogo.addEventListener("mouseleave", () => {
	popUp.classList.remove("active-guild-info");
    hoveredLogoImg.classList.remove("active-logo");
});


//Developer Info Pop-up
const hoveredName = document.querySelector(".information-details .name");
const popUpName = document.querySelector(".developer-info");

hoveredName.addEventListener("mouseenter", () => {
	popUpName.classList.add("developer-info-popup");

});

hoveredName.addEventListener("mouseleave", () => {
	popUpName.classList.remove("developer-info-popup");

});



//Buttons Pop-up

const clickedButton = document.querySelectorAll(".extend-buttons");
const popups = document.querySelectorAll(".pop-up-container");

let autoCloseTimer;


clickedButton.forEach(btn => {

    btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        const popupToShow = document.querySelector(`.pop-up-container.${target}`);

        if (popupToShow.classList.contains("show-button-content")) {
            popupToShow.classList.remove("show-button-content");
            clearTimeout(autoCloseTimer);
            return;
        }

        popups.forEach(p => p.classList.remove("show-button-content"));

        popupToShow.classList.add("show-button-content");

        clearTimeout(autoCloseTimer);
        autoCloseTimer = setTimeout(() => {
			popupToShow.classList.remove("show-button-content");
		}, 30000);
    });

   

});



//Carousel Slider Pop-up

const carouselTrack = document.querySelector(".carousel-track");
const cards = document.querySelectorAll(".project-card");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;
const cardWidth = 250; 

function updateCarousel() {
	carouselTrack.style.transform = `translateX(${(-index * cardWidth)}px)`;
}

next.addEventListener("click", () => {
    index++;

	if (index >= cards.length) index = 0;
    updateCarousel();
});

prev.addEventListener("click", () => {
    index--;

	if (index < 0) index = cards.length - 1;

	updateCarousel();
});


