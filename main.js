
// declaring my global variables for toggleSpeechBubble function

const speechBubble = document.getElementById('speechBubble');
let speechBubbleIsVisible = false;


// create  toggleSpeechBubble function

function toggleSpeechBubble() {
    if (speechBubbleIsVisible) {
        speechBubble.style.display = 'none';
        speechBubbleIsVisible = false;
    } else {
        speechBubble.style.display = 'block';
        speechBubbleIsVisible = true;
    }
}

// declaring variables for toggleProfileInfo function

const profileInfo = document.getElementById('profile-info');
let profileInfoIsVisible = false;

// create toggleProfileInfo function

function toggleProfileInfo() {
    if (profileInfoIsVisible) {
        profileInfo.style.display = 'none';
        profileInfoIsVisible = false;
    } else {
        profileInfo.style.display = 'block';
        profileInfoIsVisible = true;
    }
}


// declare variables for nameFlasher function

const g = document.getElementById('g');
const gDash = document.getElementById('g-');
const gDashM = document.getElementById('g-m');
const gDashMa = document.getElementById('g-ma');
const gDashMac = document.getElementById('g-mac');
const gDashMach = document.getElementById('g-mach');

// create functions that add the item-flasher class to each of the letters =========

const gFlash = () => {
    g.classList.add('item-flasher');
}
const gDashFlash = () => {
    gDash.classList.add('item-flasher');
}
const gDashMFlash = () => {
    gDashM.classList.add('item-flasher');
}
const gDashMaFlash = () => {
    gDashMa.classList.add('item-flasher');
}
const gDashMacFlash = () => {
    gDashMac.classList.add('item-flasher');
}
const gDashMachFlash = () => {
    gDashMach.classList.add('item-flasher');
}
const removeClasses = () => {
    g.classList.remove('item-flasher');
    gDash.classList.remove('item-flasher');
    gDashM.classList.remove('item-flasher');
    gDashMa.classList.remove('item-flasher');
    gDashMac.classList.remove('item-flasher');
    gDashMach.classList.remove('item-flasher');
}

// create nameFlasher function

function nameFlasher() {
    gFlash();
    gDashFlash();
    gDashMFlash();
    gDashMaFlash();
    gDashMacFlash();
    gDashMachFlash();
 
    setTimeout(removeClasses, 1500);

}
/* Blowup functions ========================================
 toggleClubSize */

const clubCollage = document.getElementById('club-collage');
const clubBlowup = document.getElementById('club-blowup');
let clubCollageIsVisible = true;
let clubBlowupIsVisible = false;

clubBlowup.addEventListener('click', () => {
    toggleClubSize();
})

clubCollage.addEventListener('click', () => {
    toggleClubSize();
});

function toggleClubSize() {
    if (clubCollageIsVisible) {
        clubBlowup.style.display = 'flex';
        clubBlowupIsVisible = true;
        clubCollage.style.display = 'none';
        clubCollageIsVisible = false;
    } else if (clubBlowupIsVisible) {
        clubBlowup.style.display = 'none';
        clubBlowupIsVisible = false;
        clubCollage.style.display = 'flex';
        clubCollageIsVisible = true;
    }
}

//  toggleCompanySize

const companyCollage = document.getElementById('company-collage');
const companyBlowup = document.getElementById('company-blowup');
let companyCollageIsVisible = true;
let companyBlowupIsVisible = false;

companyBlowup.addEventListener('click', () => {
    toggleCompanySize();
})

companyCollage.addEventListener('click', () => {
    toggleCompanySize();
});

function toggleCompanySize() {
    if (companyCollageIsVisible) {
        companyBlowup.style.display = 'flex';
        companyBlowupIsVisible = true;
        companyCollage.style.display = 'none';
        companyCollageIsVisible = false;
    } else if (companyBlowupIsVisible) {
        companyBlowup.style.display = 'none';
        companyBlowupIsVisible = false;
        companyCollage.style.display = 'flex';
        companyCollageIsVisible = true;
    }
}

//  toggleColmarSize

const colmarCollage = document.getElementById('colmar-collage');
const colmarBlowup = document.getElementById('colmar-blowup');
let colmarCollageIsVisible = true;
let colmarBlowupIsVisible = false;

colmarBlowup.addEventListener('click', () => {
    toggleColmarSize();
})

colmarCollage.addEventListener('click', () => {
    toggleColmarSize();
});

function toggleColmarSize() {
    if (colmarCollageIsVisible) {
        colmarBlowup.style.display = 'flex';
        colmarBlowupIsVisible = true;
        colmarCollage.style.display = 'none';
        colmarCollageIsVisible = false;
    } else if (colmarBlowupIsVisible) {
        colmarBlowup.style.display = 'none';
        colmarBlowupIsVisible = false;
        colmarCollage.style.display = 'flex';
        colmarCollageIsVisible = true;
    }
}

//  toggleFotomaticSize

const fotomaticCollage = document.getElementById('fotomatic-collage');
const fotomaticBlowup = document.getElementById('fotomatic-blowup');
let fotomaticCollageIsVisible = true;
let fotomaticBlowupIsVisible = false;

fotomaticBlowup.addEventListener('click', () => {
    togglefotomaticSize();
})

fotomaticCollage.addEventListener('click', () => {
    togglefotomaticSize();
});

function togglefotomaticSize() {
    if (fotomaticCollageIsVisible) {
        fotomaticBlowup.style.display = 'flex';
        fotomaticBlowupIsVisible = true;
        fotomaticCollage.style.display = 'none';
        fotomaticCollageIsVisible = false;
    } else if (fotomaticBlowupIsVisible) {
        fotomaticBlowup.style.display = 'none';
        fotomaticBlowupIsVisible = false;
        fotomaticCollage.style.display = 'flex';
        fotomaticCollageIsVisible = true;
    }
}