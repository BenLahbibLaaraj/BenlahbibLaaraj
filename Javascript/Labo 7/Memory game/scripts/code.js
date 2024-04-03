const setup = () => {

    let AANTAL_HORIZONTAAL = 4;
    let AANTAL_VERTICAAL = 3;
    let AANTAL_KAARTEN = 6;

// Namen van de afbeeldingen voor de kaarten
    let afbeeldingen = ['kaart1.png', 'kaart2.png', 'kaart3.png', 'kaart4.png', 'kaart5.png', 'kaart6.png'];

// Voeg dubbele afbeeldingen toe om een paar te maken en schud ze
    let kaarten = afbeeldingen.concat(afbeeldingen).sort(() => 0.5 - Math.random());

    const spelbord = document.getElementById('spelbord');

// Voeg kaarten toe aan het spelbord
    kaarten.forEach((kaart, index) => {
        let kaartElement = document.createElement('div');
        kaartElement.classList.add('kaart');
        kaartElement.innerHTML = `<img src="${kaart}" alt="Kaart ${index + 1}">`;
        spelbord.appendChild(kaartElement);
    });

}
window.addEventListener("load", setup);