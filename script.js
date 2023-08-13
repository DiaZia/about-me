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
let xPositions = [1600, 1400, 1200, 1000, 800, 600, 400, 200, 0, -200];

function moveImages() {
    for (var i = 0; i < xPositions.length; i++) {
        if (xPositions[i] < 1800) {
            xPositions[i] += 1; 
        } else {
            xPositions[i] = -200;
        }
    }

    image1.style.left = xPositions[0] + 'px';
    image2.style.left = xPositions[1] + 'px';
    image3.style.left = xPositions[2] + 'px';
    image4.style.left = xPositions[3] + 'px';
    image5.style.left = xPositions[4] + 'px';
    image6.style.left = xPositions[5] + 'px';
    image7.style.left = xPositions[6] + 'px';
    image8.style.left = xPositions[7] + 'px';
    image9.style.left = xPositions[8] + 'px';
    image10.style.left = xPositions[9] + 'px';
}

setInterval(moveImages, 10);

$('#planner').click(function() {
    var linkUrl = 'https://github.com/DiaZia/Workout-planner-app';
    window.open(linkUrl, '_blank');
});

$('#game').click(function() {
    var linkUrl = 'https://github.com/DiaZia/Balloons-typing-game';
    window.open(linkUrl, '_blank');
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