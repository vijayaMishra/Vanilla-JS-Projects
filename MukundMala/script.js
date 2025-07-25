function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}

const meaningBtnElement = document.querySelector(".meaningBtn");
meaningBtnElement.addEventListener("click", function redirectToMeaningPage() {
    window.location.href = "meaningPage.html";
});

const sanskritVerseElements = document.querySelectorAll(".sanskritVerse");
sanskritVerseElements.forEach(function displayMeanings(sanskritVerseElement) {
    sanskritVerseElement.addEventListener("click", function displayMeaning() {
        console.log("Hi!");
        const pElement = document.createElement("p");
        pElement.textContent = "O Mukunda, my Lord! Please let me become a constant reciter of Your names, addressing You as Śrī-vallabha, Varada, Dayāpara, Bhakta-priya, Bhava-luṇṭhana-kovida, Nātha, Jagan-nivāsa , and Nāga-śayana.";
        pElement.classList.add(".verseMeaning");
        const sanskritVerseElement = document.querySelector("sanskritVerse");
        // sanskritVerseElement.appendChild(pElement);
        this.insertAdjacentElement("afterend", pElement);

        console.log(pElement.textContent);

    });
});
