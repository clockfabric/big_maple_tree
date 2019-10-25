const enableNavAppearAt = 300;
const fixedBeeperExtendAt = 1600;
const learnMoreBtnScroll = 900;

const fixedBeeper = document.querySelector(".fixed-beeper");
const fixedSidePanelContainer = document.querySelector(
	".fixed-side-panel-container"
);
const sidePanleCloseBtn = document.querySelector(".side-panel-close-button");
const fixedSidePanelSpill = document.querySelector(".fixed-side-panel-spill");
const myNav = document.querySelector("nav");
const learnMoreBtn = document.querySelector(".learn-more-btn");

window.onscroll = function() {
	// console.log(window.scrollY);
	if (window.scrollY >= enableNavAppearAt) {
		myNav.classList.add("opaque-nav");
	} else {
		myNav.classList.remove("opaque-nav");
	}
	if (window.scrollY >= fixedBeeperExtendAt) {
		fixedBeeper.classList.add("fixed-beeper-extend");
	} else {
		fixedBeeper.classList.remove("fixed-beeper-extend");
	}
};

learnMoreBtn.addEventListener("click", () => {
	window.scrollBy(0, learnMoreBtnScroll);
});

let toggle = 0;
setInterval(() => {
	if (toggle === 3) {
		fixedBeeper.style.setProperty("--beeper-display", "none");
		toggle = 0;
	} else {
		fixedBeeper.style.setProperty("--beeper-display", "block");
	}
	toggle++;
}, 1000);

fixedBeeper.addEventListener("click", () => {
	console.log("clicked");
	fixedSidePanelContainer.classList.add("side-panel-container-show");
});

sidePanleCloseBtn.addEventListener("click", () => {
	fixedSidePanelContainer.classList.remove("side-panel-container-show");
});

fixedSidePanelSpill.addEventListener("click", () => {
	fixedSidePanelContainer.classList.remove("side-panel-container-show");
});
