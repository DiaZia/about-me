const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');
const image6 = document.getElementById('image6');
const image7 = document.getElementById('image7');
const image8 = document.getElementById('image8');
const image9 = document.getElementById('image9');
const image10 = document.getElementById('image10');

image1.style.left = '100px';
image2.style.left = '300px';
image3.style.left = '500px';
image4.style.left = '700px';
image5.style.left = '900px';
image6.style.left = '100px';
image7.style.left = '300px';
image8.style.left = '500px';
image9.style.left = '700px';
image10.style.left = '900px';

function hideImages() {
    if (image10.style.display == "block") {
        image10.style.display = "none";
    } else  {
        image10.style.display = "block"
    }
    if (image6.style.display == "block") {
        image6.style.display = "none";
    } else  {
        image6.style.display = "block"
    }
    if (image7.style.display == "block") {
        image7.style.display = "none";
    } else  {
        image7.style.display = "block"
    }
    if (image8.style.display == "block") {
        image8.style.display = "none";
    } else  {
        image8.style.display = "block"
    }
    if (image9.style.display == "block") {
        image9.style.display = "none";
    } else  {
        image9.style.display = "block"
    }
}

setInterval(hideImages, 1500);


$('#planner').click(function() {
    var linkUrl = 'https://github.com/DiaZia/Workout-planner-app';
    window.open(linkUrl, '_blank');
});

$('#game').click(function() {
    const downloadLink = $('<a></a>');

    downloadLink.attr('href', '/files/balloonTypingGame.zip'); 
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

    downloadLink.attr('href', '/files/cv.docx'); 
    downloadLink.attr('download', 'cv.docx'); 
    
    $('body').append(downloadLink);
    downloadLink[0].click();
    downloadLink.remove(); 
});