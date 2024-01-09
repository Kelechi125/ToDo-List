const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllbtn = document.querySelector(".footer button");

inputBox.addEventListener("keyup", (event) => {
    let userEnteredValue = inputBox.value;
    if (userEnteredValue.trim() != 0) {
        addBtn.classList.add("active");
    } else {
        addBtn.classList.remove("active");
    }
})

showTasks();

addBtn.addEventListener("click", () => {
    let userEnteredValue = inputBox.value;
    let getLocalStorageData = localStorage.getItem("New Todo");
    if (getLocalStorageData === null) {
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalStorageData); 
    }
    listArray.push(userEnteredValue);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks();
    addBtn.classList.remove("active");
})