//create a time data function
function currentTime() {
    //Declare variables
    var d = new Date(); //Get current date
    var hr = d.getHours(); //Get current hours
    var min = d.getMinutes(); //Get current minutes
    var sec = d.getSeconds(); //Get current seconds
    var ampm; // Declare empty variable to store AM or PM 
    var utchr = d.getUTCHours(); //Get current Greenwich Mean Time (GTM)
    var timeDiff; //To store time difference converted to positive number
    var timeZone;

    //Add 0 to sigle digit for seconds
    if (sec < 10) {
        sec = "0" + sec;
    }
    //Add 0 to single digits for minutes
    if (min < 10) {
        min = "0" + min;
    }

    // Determine AM or PM string
    if (hr == 12) {
        ampm = "PM"; //Set to Pm
    } else if (hr > 12) {
        hr -=12; // Deduct 12 from hours greater than 12 (military time)
        ampm = "PM"; // Set to PM
    } else {
        ampm ="AM"; //Set to AM
    }
    //  time zone logic
    // GMT time into std time
    if (utchr == 0) {
        utchr = 12; // Deduct 12 from hours greater than 12 (military time)
    } else if (utchr > 12) {
        utchr -=12; // Deduct 12 from hours greater than 12 (military time)
    } 
    //11
    //7


    if (utchr < hr) {
        utchr +=12;
    }

    // Sub local time from GMT

    timeDiff =  utchr - hr;

    if( timeDiff < 0){
        adjTimeDiff = (timeDiff * (-1))
    }
    else {
        adjTimeDiff = timeDiff;
    }

    if (adjTimeDiff == 8){
        timeZone = "PT";
    }
    else if (adjTimeDiff == 7){
        timeZone = "MT";
    }
    else if (adjTimeDiff == 6){
        timeZone = "CT";
    }
    else if (adjTimeDiff == 5){
        timeZone = "ET";
    }
    else {
        timeZone = "Sorry! I can't get the Time zone"
    }
    //Assemble time format to display
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

    //Display current local time and time zone on Html element
    document.getElementById("clock").innerText = time; //adding time
}
    //Run time data function every 1 second
    setInterval(currentTime, 1000); //setting timer


  
