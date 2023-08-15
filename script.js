const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');

/* image1.style.left = '100px';
image2.style.left = '300px';
image3.style.left = '500px';
image4.style.left = '700px';
image5.style.left = '900px';
image6.style.left = '100px';
image7.style.left = '300px';
image8.style.left = '500px';
image9.style.left = '700px';
image10.style.left = '900px'; */

function hideImages() {
    if (image1.src.endsWith("30.9.2022.jpg")) {
        image1.src = "images/2.1.2023.jpg";
    } else {
        image1.src = "images/30.9.2022.jpg";
    }
    
    if (image2.src.endsWith("5.10.2022.jpg")) {
        image2.src = "images/9.3.2023.jpg";
    } else {
        image2.src = "images/5.10.2022.jpg";
    }

    if (image3.src.endsWith("19.10.2022.jpg")) {
        image3.src = "images/5.4.2023.jpg";
    } else {
        image3.src = "images/19.10.2022.jpg";
    }

    if (image4.src.endsWith("21.10.2022.jpg")) {
        image4.src = "images/30.4.2023.jpg";
    } else {
        image4.src = "images/21.10.2022.jpg";
    }

    if (image5.src.endsWith("10.12.2022.jpg")) {
        image5.src = "images/5.5.2023.jpg";
    } else {
        image5.src = "images/10.12.2022.jpg";
    }
} 

setInterval(hideImages, 1500);


$('#planner').click(function() {
    var linkUrl = 'https://github.com/DiaZia/Workout-planner-app';
    window.open(linkUrl, '_blank');
});

$('#game').click(function() {
    const downloadLink = $('<a></a>');

    downloadLink.attr('href', 'files/balloonTypingGame.zip'); 
    downloadLink.attr('download', 'balloonTypingGame.zip'); 
    
    $('body').append(downloadLink);
    downloadLink[0].click();
    downloadLink.remove(); 
});

$('#calculator').click(function() {
    var linkUrl = 'https://diazia.github.io/calculator-web-app/';
    window.open(linkUrl, '_blank');
});

$('#linkedin').click(function() {
    var linkUrl = 'https://www.linkedin.com/in/diana-%C5%BEiakov%C3%A1-115ba9280/';
    window.open(linkUrl, '_blank');
});


$('#github').click(function() {
    var linkUrl = 'https://github.com/DiaZia/portfolio';
    window.open(linkUrl, '_blank');
});

$('#cv').click(function() {
    const downloadLink = $('<a></a>');

    downloadLink.attr('href', 'files/cv.docx'); 
    downloadLink.attr('download', 'cv.docx'); 
    
    $('body').append(downloadLink);
    downloadLink[0].click();
    downloadLink.remove(); 
});
