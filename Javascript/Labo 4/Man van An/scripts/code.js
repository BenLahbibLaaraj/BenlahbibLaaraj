const setup = () => {
    let String = "De man van An geeft geen hand aan ambetante verwanten";

    let i = 0;
    let count = 0;


    while (i !== -1) {
        i = String.toLowerCase().indexOf("an", i);
        if (i !== -1) {
            count++;
            i += 2;
        }
    }

    console.log(count);


    count = 0;
    i = String.toLowerCase().lastIndexOf("an");

    while (i !== -1) {
        count++;
        i = String.toLowerCase().lastIndexOf("an", i - 1);
    }

    console.log(count);
};

window.addEventListener("load", setup);
