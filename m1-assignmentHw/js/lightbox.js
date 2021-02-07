$(document).ready(function(){

    /* Open lightbox on button click */
    $('.lightbox-toggle img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();
        console.log("imhere");

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }

        //Get text content in attribute
        var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');

        if ($altvalue=="img0") {
            var img = $('#myFig:has(img[alt=img0]) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }

        if ($altvalue=="img1") {
            var img = $('#myFig:has(img[alt=img1]) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
        if ($altvalue=="img2") {
            var img = $('#myFig:has(img[alt=img2]) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
        if ($altvalue=="img3") {
            var img = $('#myFig:has(img[alt=img3]) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
        if ($altvalue=="img4") {
            var img = $('#myFig:has(img[alt=img4]) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
        if ($altvalue=="img5") {
            var img = $('#myFig:has(img[alt=img5]) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
        if ($altvalue=="img6") {
            var img = $('#myFig:has(img[alt=img6]) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
        if ($altvalue=="img7") {
            var img = $('#myFig:has(img[alt=img7]) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
        if ($altvalue=="img8") {
            var img = $('#myFig:has(img[alt=img8]) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
        if ($altvalue=="img9") {
            var img = $('#myFig:has(img[alt=img9]) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
        if ($altvalue=="img10") {
            var img = $('#myFig:has(img[alt=img10]) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
        if ($altvalue=="img11") {
            var img = $('#myFig:has(img[alt=img11]) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
        
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });
    

});
