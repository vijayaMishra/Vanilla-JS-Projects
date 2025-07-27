document.querySelector('#inputTextField').addEventListener('input', function handleInputBoxChange(e){
    const fontsContainerEle = document.querySelector('#fontsContainer');
    const allPElementsInsideFontsContainer = Array.from(fontsContainerEle.querySelectorAll('p'));
    allPElementsInsideFontsContainer.forEach(function updatedPValue (pEle ) {
        pEle.innerText = e.target.value;
    })

})