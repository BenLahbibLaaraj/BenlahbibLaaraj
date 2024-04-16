const setup = () => {

    const verjaardag = new Date('2003-11-17');
    const actueel = new Date();
    const verschimMs = actueel - verjaardag;

    const verschilDag = Math.floor(verschimMs / (1000 * 60 * 60 * 24));

    console.log('Aantal dagen tussen mijn verjaardag en vandaag:', verschilDag);

}
window.addEventListener("load", setup);