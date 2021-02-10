   // for the images 
   var photos = []; // Declare an empty array to store image element
   var fileNames = []; //Declaare an empty element to store image file names
   var imageList = []; //Declare an empty array to store html list that contains an image
   var image; //Declare an empty variable to store the assembled image list codes
   var openList = "<li class='partner'>"; //Declare a variable to contain open list tag
   var closeList = "</li>"; //Declare a variable to contain close list tag
   
   var fileName1 = ['bustour','cabinrental','campingadv','collegetours','rentalbike','tourgroup']; 

   //Create a loop to create 6 images starting with index of 0
   for (var i=0; i<6; i++) {
       fileNames.push("partner-"+(fileName1[i])); //Create image file name and store in the array
       photos.push("<img src='images/partners/"+fileNames[i]+".png'>"); //Assemble file name into image element and store in an array
       image = openList + photos[i] + closeList; //Assemble image element from array with list elements and store in a variable
       imageList.push(image); //Store(push) the assembled list codes into an array
   }

   //Display all six images code stored in the array
   document.getElementById("partners").innerHTML = imageList.join(" ");