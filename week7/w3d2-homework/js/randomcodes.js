// RANDOM CODES



// Create variables to store generated codes and the type of characters we want to show as codes
var code = ' ';//initialize to null value
var getCode = ' ';//to store the entire code
var btnvalue; // for button boolean value
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';


// Function to generate combination of characters
function generateCode() {
    //Generate character multiple times using loop
    for (i = 1; i <= 8;i++ ) {
        var char = Math.random()*str.length; //random select a character from the variable and then store in a new variable
        code += str.charAt(char) //accumulate the generated character into a string of 8 characters
    }
    return code;
}
    document.getElementById("codes").innerHTML = generateCode();

//Disable Button
function disableButton (btnvalue) {
    document.getElementById("submit").disabled = btnvalue;
    if (btnvalue == true){//test if the button is diabled or enabled
        //set button and label color translucent
        document.getElementById("submit").style.backgroundColor = "rgba(73, 199, 209, 0.3)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        //set button and label color with no translucent
        document.getElementById("submit").style.backgroundColor = "rgba(73, 199, 209, 1)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
    }
}

// listener to user input code
var codebox = document.getElementById("codeentered"); // get textbox
codebox.addEventListener("input", evaluateCode); // listen to the code entered in the text box

//run function if detected the user has enterd a charater in the textbox
function evaluateCode() {
    getCode =  document.getElementById("codeentered").value;// get charaters entered
    var charset1 = getCode.trim(); //removes any hidden character entered
    var charset2 = code.trim(); //removes any hidden character entered
    console.log(charset1);
    // test if the code entered matches the code generated
    if( charset1.length == charset2.length && charset1 == charset2){
        disableButton(false);// if matches run the function to enable the button
    }
}

//Activate function
disableButton();