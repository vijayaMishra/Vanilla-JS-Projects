document.querySelector('#inputTextField').addEventListener('input', function handleInputBoxChange(e){
    const fontsContainerEle = document.querySelector('#fontsContainer');
    const allPElementsInsideFontsContainer = Array.from(fontsContainerEle.querySelectorAll('p'));
    allPElementsInsideFontsContainer.forEach(function updatedPValue (pEle ) {
        pEle.innerText = e.target.value;
    })
});

// const alreadyPresentFontsContainerElement = document.querySelector("#fontsContainer");
// console.log(alreadyPresentFontsContainerElement);
function createFontsStyleUI() {

    const fontsHeading = document.createElement("div");
    fontsHeading.textContent = "Cool Font Styles";
    fontsHeading.classList.add("fontHeading");
    document.body.appendChild(fontsHeading);

    const fontsContainerElement = document.createElement("div");
    fontsContainerElement.id = "fontsContainer";
    document.body.appendChild(fontsContainerElement);

    const fontDetails = [
        {"fontName": "satisfy", "fontTextContent": "This is the Satisfy - Smooth, clean cursive."},
        {"fontName": "playfair", "fontTextContent": "This is the Playfair Display font – elegant and serifed."},
        {"fontName": "poppins", "fontTextContent": "This is the Poppins font – clean and rounded."},
        {"fontName": "raleway", "fontTextContent": "This is the Raleway font – thin, uppercase modern sans-serif, clean look."},
        {"fontName": "greatvibes", "fontTextContent": "This is the Great Vibes font - cursive, graceful calligraphy. (Soft, Feminine & Artistic)"},
        {"fontName": "sacramento", "fontTextContent": "This is the Sacramento font - elegant but not too curly, handwritten style."},
        {"fontName": "dancing-script", "fontTextContent": "This is the Dancing Script – flowing and friendly."},
        {"fontName": "parisienne", "fontTextContent": "This is the Parisienne – ophisticated, aesthetic vibe"},
        {"fontName": "lobster", "fontTextContent": "This is the Lobster font – decorative and fun."},
        {"fontName": "montserrat", "fontTextContent": "This is the Montserrat font – modern and geometric."},
        {"fontName": "orbitron", "fontTextContent": "This is the Orbitron font – futuristic and techy."}
    ]

    for(let i= 0; i < fontDetails.length; i++) {
        let pElement = document.createElement("p");
        pElement.classList.add(fontDetails[i].fontName);
        console.log("Hi");
        pElement.textContent = fontDetails[i].fontTextContent;
        fontsContainerElement.appendChild(pElement);
        console.log(fontsContainerElement);
    }
}

function createCoolColoursVariationUI() {
    const colourHeading = document.createElement("div");
    colourHeading.textContent = "Cool Colours to pick from";
    colourHeading.classList.add("colourHeading");
    document.body.appendChild(colourHeading);

    const colourDetails = [
        {
            "textContent": "#E0EDEE, #475E67, #A4B4BE, #EAE1D0, #DCC8BC", 
            "src": "Images/pastelcreamishcolor.png", 
            "alt": "pastelCoolColours"
        },
        {
            "textContent": "#EFE1E1, #F0D2DA, #E0C1C6, #D1B4C6, #CBC4D6", 
            "src": "Images/pastelCoolColours.png", 
            "alt": "pastelCoolColours"
        }
    ];

    for(let i = 0; i < colourDetails.length; i++) {
        let pElement = document.createElement("p");
        pElement.textContent = colourDetails[i].textContent;
        document.body.appendChild(pElement);

        let imgElement = document.createElement("img");
        imgElement.src = colourDetails[i].src;
        imgElement.alt = colourDetails[i].alt;
        document.body.appendChild(imgElement);
    }
}

createFontsStyleUI();
createCoolColoursVariationUI();
