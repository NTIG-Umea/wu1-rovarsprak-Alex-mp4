document.addEventListener('DOMContentLoaded', () => {
    // kolla i webbläsarens console för att se vad som händer
    console.log('Laddat');

    // välj de element vi behöver
    const message = document.querySelector('#message');
    const textbox = document.querySelector('#textbox');
    const button = document.querySelector('#translate');

    // lyssna på knapptryck

    button.addEventListener('click', (e) => {
        // läs in texten från textboxen
        const text = textbox.value;
        // skicka texten till funktionen för att översätta
        const translation = translate(text);
        // Hur kan du rensa textboxen?
        // skriv ut översättningen i message
        display(translation, message);
    });

});

const translate = (text) => {
    // översätt texten till rövarspråket
    console.log(text)

    let kons = "qwrtpsdfghjklzxcvbnmQWRTPSDFGHJKLZXCVBNM";

        let s1 = text;
        let s2 = "";

        for(let i = 0; i < s1.length; i++) {
            let c = s1.charAt(i);
            s2 = s2 + c;
            if(kons.indexOf(c) >= 0) {
                s2 = s2 + "o" + c;
            }
        }

   
   // let text1 = text.replaceAll("q", "qoq");
   // let text2 = text1.replaceAll("w", "wow");
   // let text3 = text2.replaceAll("r", "ror");
   // let text4 = text3.replaceAll("t", "tot");
   // let text5 = text4.replaceAll("p", "pop");
   // let text6 = text5.replaceAll("s", "sos");
   // let text7 = text6.replaceAll("d", "dod");
   // let text8 = text7.replaceAll("f", "fof");
   // let text9 = text8.replaceAll("g", "gog");
   // let text10 = text9.replaceAll("h", "hoh");
   // let text11 = text10.replaceAll("k", "kok");
   // let text12 = text11.replaceAll("l", "lol");
   // let text13 = text12.replaceAll("z", "zoz");
   // let text14 = text13.replaceAll("x", "koksos");
   // let text15 = text14.replaceAll("c", "coc");
   // let text16 = text15.replaceAll("v", "vov");
   // let text17 = text16.replaceAll("b", "bob");
   // let text18 = text17.replaceAll("n", "non");
   // let text19 = text18.replaceAll("m", "mom");
   // let text20 = text19.replaceAll("j", "joj");
   // let text21 = text20.replaceAll("Q", "Qoq");
   // let text22 = text21.replaceAll("W", "Wow");
   // let text23 = text22.replaceAll("R", "Ror");
   // let text24 = text23.replaceAll("T", "Tot");
   // let text25 = text24.replaceAll("P", "Pop");
   // let text26 = text25.replaceAll("S", "Sos");
   // let text27 = text26.replaceAll("D", "Dod");
   // let text28 = text27.replaceAll("F", "Fof");
   // let text29 = text28.replaceAll("G", "GoG");
   // let text30 = text29.replaceAll("H", "Hoh");
   // let text31 = text30.replaceAll("K", "Kok");
   // let text32 = text31.replaceAll("L", "Lol");
   // let text33 = text32.replaceAll("Z", "Zoz");
   // let text34 = text33.replaceAll("X", "Koksos");
   // let text35 = text34.replaceAll("C", "Coc");
   // let text36 = text35.replaceAll("V", "Vov");
   // let text37 = text36.replaceAll("B", "Bob");
   // let text38 = text37.replaceAll("N", "Non");
   // let text39 = text38.replaceAll("M", "Mom");
   // let text40 = text39.replaceAll("J", "Joj");

    return s2;
};

const display = (translation, element) => {
    // skapa ett p element för texten
    const p = document.createElement('p');
    // sätt texten till översättningen
    p.textContent = translation;
    // fäst elementet
    element.insertBefore(p, element.firstChild);
}
