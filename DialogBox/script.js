const openBtn = document.querySelector('.openDialog');
const addBookBtn = document.querySelector('.addBookAndCloseDialog');
const dialog = document.querySelector('.myDialog');

openBtn.addEventListener('click', () => {
    console.log("Checkinggg");
    dialog.showModal();
});

addBookBtn.addEventListener('click', () => {
    dialog.close();
});