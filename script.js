const promoBanner = document.querySelector('#promo-text');
console.log (promoBanner);
let pElement = document.createElement('p');
promoBanner.appendChild(pElement);

function changeMessage() {
    const messageOne = `Get 15% off today on all items. <br />
        <span>Promo lasts until the end of 2024.</span>`;
    const messageTwo = `This message changed.`;
    const messageThree = `This is the final message of the rotation.`;

    const messages = [messageOne, messageTwo, messageThree];
    let messageIndex = 0;
    pElement.innerHTML = messages[messageIndex];

    function insertMessage() {

        messageIndex = (messageIndex + 1) % messages.length;
        pElement.innerHTML = messages[messageIndex];
        
    }

    setInterval(
       insertMessage, 3000);
};

changeMessage();