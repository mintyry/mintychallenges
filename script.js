// select banner
const promoBanner = document.querySelector('#promo-text');
console.log (promoBanner);

// NOT NEEDED ANYMORE CUZ P DOESNT EXIST IN HTML ORIGINALLY
// select text
// needed to select p in particular; using .children didn't work because promobanner has 2 children elements. cannot get text of 2 children with one property like this
// let promoString = promoBanner.querySelector('p').textContent;
// console.log (promoString);

// This did not work, because I am targeting the text content of text content lol
// promotext.textContent = 'This text changed from JavaScript';
//===================
// also doesn't work, because im targeting string itself, not the element that is changeable
// promotext = 'Did this change?';

// MANUALLY HARDCODE CHANGE TO TEXT
// let promoText = promobanner.querySelector('p');
// promoText.textContent = "Did this finally change?";
// console.log (promoText.textContent);

// CREATE ELEMENT TO ATTACH TO PROMO TEXT SECTION
let pElement = document.createElement('p');
// adds message to p
pElement.innerHTML = `Get 15% off today on all items. <br />
        <span>Promo lasts until the end of 2024.</span>`;
// adds p to promoBanner
promoBanner.appendChild(pElement);

// changes message in 3 sec
setInterval(changeMessage, 3000);

// function to change the message
// need to edit this so message changes every 3 sec
function changeMessage() {
    pElement.innerHTML = 'This message changed';
}