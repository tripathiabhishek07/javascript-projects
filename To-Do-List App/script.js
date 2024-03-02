// selecting the element by its id and declaring it to some const varible so that we can make modification into it.
const inputBox = document.getElementById("input-box");
// here just class is selected in place of the id 
const listContainer = document.querySelector(".list-container");
    
// creating a function named add task, when we click the add button then this function will be called
    function addTask() {
        // if input space is empty it will show alert to put some text into it on clicking the add button
        if (inputBox.value === '') {
            alert("You must write something!");
        }
        // if text is put into the input space
        else {
            //creating a li element and storing it in variable li
            let li = document.createElement("li");
            // the text written in input space is stored in inputbox.value and then it is copied into the li item.
            li.innerHTML = inputBox.value;
            // here the list container is added a list item from 0 to 1 or further 1 to 2 so son
            listContainer.appendChild(li);
            // we need to add a cross button too after adding the list item.
            let span = document.createElement("span");
            span.innerHTML = "\u00d7"; //cross
            li.appendChild(span);     // span is appended to the list item.
        }
        inputBox.value="";   //after adding list item the input space is made empty
        saveData();         //it is saving the data in order to avoid data loss when refreshed
    }

    //the below function is for the check uncheck function usinf event listener
    listContainer.addEventListener("click", function(e){
        //target is set to name and it if perfectly equal to li
        if(e.target.tagName ==="LI"){
            //added toggle 
            e.target.classList.toggle("checked");
            saveData();
        }
        //when clicked on span the element is removed
        else if(e.target.tagName ==="SPAN"){
            e.target.parentElement.remove();
            saveData(); //here also the data is being saved
        }
    }, false);
//this is function is storing the data inside the list container into the local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
//this function is used to show the saved list container items 
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();