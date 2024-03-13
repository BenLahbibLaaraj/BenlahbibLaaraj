const setup = () => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";

    const vervang = (input) => {

        let woorden = input.split(" ");


        for (let i = 0; i < woorden.length; i++) {
            if (woorden[i] === 'de') {
                woorden[i] = 'het';
            }
        }


        return woorden.join(" ");
    };


    const resultaat = vervang(tekst);
    console.log(resultaat);
};

window.addEventListener("load", setup);
