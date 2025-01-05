// querySelect div id in order to access it here in js
const promoBanner = document.querySelector('#promo-text');
// create a paragraph element
let pElement = document.createElement('p');
// added p element into the promo-text div
promoBanner.appendChild(pElement);


function changeMessage() {
    // function creates three messages
    const messageOne = `Get 15% off today on all items. <br />
        <span>Promo lasts until the end of 2024.</span>`;
    const messageTwo = `This message changed.`;
    const messageThree = `This is the final message of the rotation.`;

    // put messages into array so we can access later
    const messages = [messageOne, messageTwo, messageThree];
    // index to choose which message from the array
    let messageIndex = 0;
    // we initially inject the first message (index 0) into the p element to display on page load
    pElement.innerHTML = messages[messageIndex];

    // function then updates index to the next index number
    function insertMessage() {
        // 0 + 1; 1 % 3; remainder is 1 (1/3 = 0, then 0*3 = 0, 1-0 = 1, thus remainder is 1, and thusly, index is now 1)
        // this will eventually loop around because of messages.length. Once index is 3 (index 2 + 1 = 3), 3 % 3 = 0, and the loop starts over
        messageIndex = (messageIndex + 1) % messages.length;
        // replace current HTML in p element (index 0) with index 1
        pElement.innerHTML = messages[messageIndex];
        
    }
// runs the insertMessage function every 3 sec
    setInterval(
       insertMessage, 3000);
};

// runs this function on page load
changeMessage();