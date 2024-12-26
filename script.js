// select banner
const promobanner = document.querySelector('#promo-text');
console.log (promobanner);

// select text
// needed to select p in particular; using .children didn't work because promobanner has 2 children elements. cannot get text of 2 children with one property like this
let promoString = promobanner.querySelector('p').textContent;
console.log (promoString);

// This did not work, because I am targeting the text content of text content lol
// promotext.textContent = 'This text changed from JavaScript';
//===================
// also doesn't work, because im targeting string itself, not the element that is changeable
// promotext = 'Did this change?';

let promoText = promobanner.querySelector('p');
promoText.textContent = "Did this finally change?";
console.log (promoText.textContent);
