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
    });
});
