
const incrementBtnElement = document.querySelector(".increment");
incrementBtnElement.addEventListener("click", function() {
    document.querySelector(".counter").textContent++;
});

const decrementBtnElement = document.querySelector(".decrement")
    .addEventListener("click", function() {
        document.querySelector(".counter").textContent--;
    });


const resetBtnElement = document.querySelector(".reset")
    .addEventListener("click", function() {
        document.querySelector('.counter').textContent = 0;
    });