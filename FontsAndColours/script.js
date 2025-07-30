document.querySelector('#inputTextField').addEventListener('input', function handleInputBoxChange(e){
    const fontsContainerEle = document.querySelector('#fontsContainer');
    const allPElementsInsideFontsContainer = Array.from(fontsContainerEle.querySelectorAll('p'));
    allPElementsInsideFontsContainer.forEach(function updatedPValue (pEle ) {
        pEle.innerText = e.target.value;
    })
});

// const alreadyPresentFontsContainerElement = document.querySelector("#fontsContainer");
// console.log(alreadyPresentFontsContainerElement);

const fontsContainerElement = document.createElement("div");
fontsContainerElement.id = "fontsContainer";
document.body.appendChild(fontsContainerElement);

let pElement = document.createElement("p");
pElement.classList.add("lobster");
pElement.textContent = "This is the Lobster font – decorative and fun.";
fontsContainerElement.appendChild(pElement);

pElement = document.createElement("p");
pElement.classList.add("montserrat");
pElement.textContent = "This is the Montserrat font – modern and geometric.";
fontsContainerElement.appendChild(pElement);

pElement = document.createElement("p");
pElement.classList.add("orbitron");
pElement.textContent = "This is the Orbitron font – futuristic and techy.";
fontsContainerElement.appendChild(pElement);

pElement = document.createElement("p");
pElement.classList.add("playfair");
pElement.textContent = "This is the Playfair Display font – elegant and serifed.";
fontsContainerElement.appendChild(pElement);

pElement = document.createElement("p");
pElement.classList.add("poppins");
pElement.textContent = "This is the Poppins font – clean and rounded.";
fontsContainerElement.appendChild(pElement);

pElement = document.createElement("p");
pElement.classList.add("raleway");
pElement.textContent = "This is the Raleway font – thin, uppercase modern sans-serif, clean look.";
fontsContainerElement.appendChild(pElement);

pElement = document.createElement("p");
pElement.classList.add("greatvibes");
pElement.textContent = "This is the Great Vibes font - cursive, graceful calligraphy. (Soft, Feminine & Artistic)";
fontsContainerElement.appendChild(pElement);

pElement = document.createElement("p");
pElement.classList.add("sacramento");
pElement.textContent = "This is the Sacramento font - elegant but not too curly, handwritten style.";
fontsContainerElement.appendChild(pElement);
console.log("HIIII");

pElement = document.createElement("p");
pElement.classList.add("dancing-script");
pElement.textContent = "This is the Dancing Script – flowing and friendly.";
fontsContainerElement.appendChild(pElement);

pElement = document.createElement("p");
pElement.classList.add("parisienne");
pElement.textContent = "This is the Parisienne – ophisticated, aesthetic vibe";
fontsContainerElement.appendChild(pElement);

pElement = document.createElement("p");
pElement.classList.add("satisfy");
pElement.textContent = "This is the Satisfy - Smooth, clean cursive.";
fontsContainerElement.appendChild(pElement);
// pElement = document.createElement("p");
// pElement.classList.add("");
// pElement.textContent = "This is the  font – .";

pElement = document.createElement("p");
pElement.textContent = "#E0EDEE, #475E67, #A4B4BE, #EAE1D0, #DCC8BC";
document.body.appendChild(pElement);

let imgElement = document.createElement("img");
imgElement.src = "Images/pastelcreamishcolor.png";
imgElement.alt = "pastelCoolColours";
document.body.appendChild(imgElement);

pElement = document.createElement("p");
pElement.textContent = "#EFE1E1, #F0D2DA, #E0C1C6, #D1B4C6, #CBC4D6";
document.body.appendChild(pElement);

imgElement = document.createElement("img");
imgElement.src = "Images/pastelCoolColours.png";
imgElement.alt = "pastelCoolColours";
document.body.appendChild(imgElement);
