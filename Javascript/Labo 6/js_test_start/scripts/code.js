const setup = () => {
    const selectedValue = this.value;
    const imgElement = document.getElementById("img");
    const noteElement = document.getElementById("note");



    imgElement.innerHTML = "";
    noteElement.innerHTML = "";


    if (selectedValue === "2") {
        imgElement.innerHTML = '<img src="../img/with-egg.png" alt="Kip met ei">';
        noteElement.innerHTML = "Je hebt gekozen voor een kip met een ei!";
    } else if (selectedValue === "3") {
        imgElement.innerHTML = '<img src="../img/without-egg.png" alt="Kip zonder ei">';
        noteElement.innerHTML = "Je hebt gekozen voor een kip zonder een ei!";
    }
    const Letter = this.value.toLowerCase();
    const sentence = "De kip legt een ei.";

    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i].toLowerCase() === Letter) {
            count++;
        }
    }


    noteElement.textContent = "Letter  " + Letter + "komt  " + count + " keer voor in de bovenstaande zin";

}
window.addEventListener("load", setup);