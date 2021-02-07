var photos = []; // Declare an empty array to store image element
            var fileNames = []; //Declaare an empty element to store image file names
            var imageList = []; //Declare an empty array to store html list that contains an image
            var image; //Declare an empty variable to store the assembled image list codes
            var openList = "<li id='photo'>"; //Declare a variable to contain open list tag
            var closeList = "</li>"; //Declare a variable to contain close list tag
            var openCaptionTag = "<figcaption>";
            var closeCaptionTag = "</figcaption>";
            var openDescTag = "<div id='text' onclick='myfun(myval)'>";//id
            var closeDescTag = "</div>";
            // var openInfoBox = "<div id='infoBox'>";
            // var closeInfoBox = "</div>";
            var myval;

            var caption = ['Bruno','Rocky','Milo','Drago','Abby','Sabby','Bella','Lily','Lucy','Jack','Nala','Loki']; 
            var description = ['They call me Bruno and I love to play with kids and I keep them happy. Please give me a home!',
                               'Everyone calls me Rocky! you can dress me up and I like to play with tennis ball. Throw me a ball',
                               'Hello nice people you can call me Milo and I love outdoors. Take me on your next adventure please',
                               'Hi! Drago here, I love to swim and we can be surfing partners. I love to play with kids and everyone will love me',
                               'I\'m Abby, I love to chase after birds and I like to walk. Take me home with you and I will keep you happy',
                               'I\'m Sabby, I am still a pup and I like to lick everyone and steal their cookies. I\'m great with kids.',
                               'Bella is my name and I like to eat fish, I love to chase birds and I love to play with kids',
                               'Did someone called Lily! that\'s me btw I can be naughty but mostly I like to stay in my cat house',
                               'Hi! I\'m Lucy, I just turned 6 months old and I like to play with kids. I like to chase strings',
                               'Jack! Jack! I\'m  just few week old kitten and I hope to get a house where everyone loves me and keep me safe',
                               'You can call me Nala! I like to go ourdoors and my favorite thing in the word is chocolate milk',
                               'Don\'t get scared of my name Loki! I\'m just a smally puppy. I will love you and your family'];
            var info = [' It\'s cute you love dogs','Can you please take me home','Woof woof','Maybe it\'s my time','I love humans','Love is with me','7','8','9','9','10','11'];                    

            //Create a loop to create 12 images starting with index of 0
            for (var i=0; i<12; i++) {
                fileNames.push("photo"+(i+1)); //Create image file name and store in the array
                // photos.push("<div id=\"figure\"><img src='images/gallery/"+fileNames[i]+".jpg'>"+"<figcaption>"+caption[i]+"</figcaption>"+"<div class='text'>"+description[i]+"</div>"+"</div>"); //Assemble file name into image element and store in an array
                photos.push("<div id=\"figure\"><div id='myFig'><a href='#/' class='lightbox-toggle'><img src='images/gallery/"+fileNames[i]+".jpg' alt='img"+i+"'></a></div>"+openCaptionTag+
                //+"<div id='text' onclick='myfun("+i+")'>"+    
                caption[i]+closeCaptionTag
                //+openDescTag+
                +"<div id='text' onclick='myfun("+i+")'>"+   
                description[i]+closeDescTag+"</div>");
                image = openList + photos[i] + closeList; //Assemble image element from array with list elements and store in a variable
                imageList.push(image); //Store(push) the assembled list codes into an array
            }

            //Display all six images code stored in the array
            document.getElementById("album").innerHTML = imageList.join(" ");
            function myfun(myval) {
                //document.getElementById("infoBox").style.visibility="visible";  
                document.getElementById("infoBox").style.display="block";   
                document.getElementById("gallery").style.overflow="hidden";           
                document.getElementById("wrap").innerHTML = "<p id='myHead'>"+caption[myval]+"</p><p id='info'>"+info[myval]+"</p><p id='infoClose' onclick=mySedFun()>Click this to close</p>";    
                };

            function mySedFun() {
                document.getElementById("infoBox").style.display="none";
                document.getElementById("gallery").style.overflow="auto";   
            }