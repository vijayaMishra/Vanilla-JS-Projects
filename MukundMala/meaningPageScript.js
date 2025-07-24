const backToVersesBtnElement = document.querySelector(".backToVersesBtn");
backToVersesBtnElement.addEventListener("click", function backToVerses() {
    window.location.href = "index.html";
});

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}