// declaring my global variables for toggle visibility functions

const portfolioSection = document.getElementById('portfolio');
const aboutSection = document.getElementById('about');
const contactSection = document.getElementById('contact');

let portfolioIsVisible = false;
let aboutIsVisible = false;
let contactIsVisible = false;


// toggle visibility functions

const pToggle = () => {
    if (portfolioIsVisible === true) {
        portfolioSection.style.visibility = 'hidden';
        portfolioIsVisible = false;
    } else {
        portfolioSection.style.visibility = 'visible';
        portfolioIsVisible = true;
    };
};

const aToggle = () => {
    if(aboutIsVisible === true) {
        aboutSection.style.visibility = 'hidden';
        aboutIsVisible = false;
    } else {
        aboutSection.style.visibility = 'visible';
        aboutIsVisible = true;
    };
};

const cToggle = () => {
    if(contactIsVisible === true) {
        contactSection.style.visibility = 'hidden';
        contactIsVisible = false;
    } else {
        contactSection.style.visibility = 'visible';
        contactIsVisible = true;
    };
};




