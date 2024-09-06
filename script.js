const textInput = document.querySelector('.inputs input'),
checkBtn = document.querySelector('.inputs button'),
infoText = document.querySelector('.info-text');
let filterInput;

checkBtn.addEventListener('click', () => {
    // Splittiing usser input character, reversing them 
    // and joining them in a single word
    let reverseInput = filterInput.split("").reverse().join("");
    infoText.style.display = "block";
    
    if(filterInput != reverseInput){
        return infoText.innerHTML = `NO, <span>'${textInput.value}'</span> isn't a palidrome!`;
    }
    infoText.innerHTML = `Yes, <span>'${textInput.value}'</span> is a palidrome!`;

});


textInput.addEventListener('keyup', () => {
    // Removing spaces and all special characters from entered value
    filterInput = textInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "")
    
    if(filterInput){
        return checkBtn.classList.add("active");
    }
    infoText.style.display = "none";
    checkBtn.classList.remove("active");
});