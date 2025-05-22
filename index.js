const displayOutput = document.querySelector('#display');

function appendToDisplay(input){
    displayOutput.value+=input;

}

function calculate(){
    try{
         display.value = eval(display.value);
    }catch (error){
        displayOutput.value = 'Error';
        setTimeout(clearDisplay,3000);
    }
}

function clearDisplay(){
    displayOutput.value = '';
}