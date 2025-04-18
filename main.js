
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


// rainbow color change for the h1

let pageTitle = document.getElementById('pageTitle')

const rainbow = () => {
    pageTitle.classList.add('animation-rainbow');
    setTimeout(() => {
        pageTitle.classList.remove('animation-rainbow');
    }, 1500);
};

// crumble the headline in 3 sections

const crumble1 = document.getElementById('crumble1');
const crumble2 = document.getElementById('crumble2');
const crumble3 = document.getElementById('crumble3');

const redWhiteBlue = () => {
    setTimeout(() => {
        crumble1.classList.add('animation-redWhiteBlue');
    }, 100)

    setTimeout(() => {
        crumble2.classList.add('animation-redWhiteBlue');
    }, 1500);

    
    setTimeout(() => {
        crumble3.classList.add('animation-redWhiteBlue');
    }, 3000);

    setTimeout(() => {
        crumble1.classList.remove('animation-redWhiteBlue');
        crumble2.classList.remove('animation-redWhiteBlue');
        crumble3.classList.remove('animation-redWhiteBlue');
    }, 4500);

}
