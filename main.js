// declaring my global variables

const portfolioSection = document.getElementById('portfolio');
const aboutSection = document.getElementById('about');
const contactSection = document.getElementById('contact');

let portfolioIsVisible = true;
let aboutIsVisible = true;
let contactIsVisible = true;


// toggle functions

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

export default { pToggle, aToggle, cToggle };