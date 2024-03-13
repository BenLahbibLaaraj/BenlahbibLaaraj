const setup = () => {
    let woord = "onoorbaar";

    const trigrammen = (woord) => {
        for (let i = 0; i < woord.length - 2; i++) {
            console.log(woord.slice(i, i + 3));
        }
    };

  trigrammen(woord);

};

window.addEventListener("load", setup);
