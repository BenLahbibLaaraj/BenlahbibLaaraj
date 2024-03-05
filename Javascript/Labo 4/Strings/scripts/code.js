const setup = () => {

    let leeftijd = 34;
    let intrest = 0.12;
    let isGevaarlijk=true;
    let vandaag = new Date();
    const print = (message) => {
        console.log(message);
    }

    console.log(typeof leeftijd);
    console.log(typeof intrest);
    console.log(typeof isGevaarlijk);
    console.log(typeof vandaag);




        let input = document.getElementById("input");
        let btnSubmit = document.getElementById("btnSubmit");

        btnSubmit.addEventListener("click", () => {
            uitvoer(input.value);
        });
    };

    const uitvoer = (input) => {
        let result = "";
        for (let i = 0; i < input.length; i++) {
            result += input.charAt(i);
            result += " ";
        }

        console.log(result);




}
window.addEventListener("load", setup);