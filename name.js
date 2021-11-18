const nameText = document.querySelector(".js-name");
const nameForm = document.querySelector(".js-name-form");
const nameInput = document.querySelector(".js-name-input");

const CN_HIDE = "hide"; 
const LS_NAME = "name"; 

function storeName(name) {
    localStorage.setItem(LS_NAME, name)
}

function deleteStoreName() {
    localStorage.removeItem(LS_NAME);
    nameText.classList.add(CN_HIDE);
    nameForm.classList.remove(CN_HIDE);
}

function setName(name) {
    nameText.innerHTML = "Hi, " + name;
    nameText.classList.remove(CN_HIDE);
    nameForm.classList.add(CN_HIDE); 

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", deleteStoreName);
    nameText.appendChild(deleteButton);
}

function handleSubmit(event) {
    event.preventDefault();

    setName(nameInput.value); 
    storeName(nameInput.value);
}

function checkStoreName() {
    const lsName = localStorage.getItem(LS_NAME);
    
    if (lsName !== null) {
        setName(lsName);
    } 

}

function init() {
    nameForm.addEventListener("submit", handleSubmit); 
    checkStoreName();
}

init();
