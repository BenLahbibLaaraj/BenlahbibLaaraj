const setup = () => {


    const student1 = {
        voornaam: 'Mieke',
        familienaam: 'Mickelsen',
        geboorteDatum: new Date('1980-01-01'),
        email: 'mieke@example.com',
        aantalKinderen: 1
    };


    const jsonString = JSON.stringify(student1);
    console.log(jsonString);
    const copiedJsonString = '{"voornaam":"Mieke","familienaam":"Mickelsen","geboorteDatum":"1980-01-01T00:00:00.000Z","email":"mieke@example.com","aantalKinderen":1}'
    const student2 = JSON.parse(copiedJsonString);
    console.log(student2.voornaam);

}
window.addEventListener("load", setup);