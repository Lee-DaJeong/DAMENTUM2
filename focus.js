const focusText = document.querySelector(".js-focus");
const focusForm = document.querySelector(".js-focus-form");
const focusInput = document.querySelector(".js-focus-input");
const focusWrapper = document.querySelector(".js-focus-wrapper");

const CN_HIDE_F = "hide";
const LS_FOCUS = "focus";

function checkStoreFocus() {
  const lsFocus = localStorage.getItem(LS_FOCUS);

  if (lsFocus !== null) {
      setFocus(lsFocus)
  } 
}

function setFocus(focus) {
    // focusText.innerHTML = "Main focus: "+focus;
    focusText.innerHTML = `${focus}`;
    
    focusWrapper.classList.remove(CN_HIDE_F);
    focusForm.classList.add(CN_HIDE_F);

    localStorage.setItem(LS_FOCUS, focus);
}

function handleSubmit(event) {
    event.preventDefault();
    setFocus(focusInput.value);
}

function init() {
    focusForm.addEventListener("submit", handleSubmit);
    checkStoreFocus();
}

init();



// const focusText = document.querySelector(".js-focus");
// const focusForm = document.querySelector(".js-focus-form");
// const focusInput = document.querySelector(".js-focus-input");

// const CN_HIDE_F = "hide"; 
// const LS_FOCUS = "focus"; 

// function storeFocus(focus) {
//     localStorage.setItem(LS_FOCUS, focus)
// }

// function deleteStoreFocus() {
//     localStorage.removeItem(LS_FOCUS);
//     focusText.classList.add(CN_HIDE_F);
//     focusForm.classList.remove(CN_HIDE_F);
// }

// function setFocus(focus) {
//     focusText.innerHTML = "Main focus: "+focus;
//     focusText.classList.remove(CN_HIDE_F);
//     focusForm.classList.add(CN_HIDE_F); 

//     const deleteButton = document.createElement("button");
//     deleteButton.innerHTML = "X";
//     deleteButton.classList.add("delete-btn-f");
//     deleteButton.addEventListener("click", deleteStoreFocus);
//     focusText.appendChild(deleteButton);
// }

// function handleSubmit(event) {
//     event.preventDefault();

//     setFocus(focusInput.value); 
//     storeFocus(focusInput.value);
// }

// function checkStoreFocus() {
//     const lsFocus = localStorage.getItem(LS_FOCUS);
    
//     if (lsFocus !== null) {
//         setFocus(lsFocus);
//     } 

// }

// function init() {
//     focusForm.addEventListener("submit", handleSubmit); 
//     checkStoreFocus();
// }

// init();
