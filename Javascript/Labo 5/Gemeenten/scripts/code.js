const setup = () => {
    const gemeenten = [];

    while (true) {
        let gemeente = prompt("Voer een gemeente in (of typ 'stop' om te stoppen):");
        if (gemeente && gemeente.toLowerCase() === "stop") break;
        if (gemeente) gemeenten.push(gemeente);
    }

    gemeenten.sort();

    const selectElement = document.createElement("select");
    gemeenten.forEach(gemeente => {
        const option = document.createElement("option");
        option.text = gemeente;
        selectElement.add(option);
    });

    document.body.appendChild(selectElement);
};

window.addEventListener("load", setup);
