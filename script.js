const image = document.getElementById('image');
let xPosition = 100; 

function moveImage() {
    if (xPosition < window.innerWidth - 180) {
        xPosition += 1; 
    } else {
        xPosition = -100;
    }

    image.style.left = xPosition + 'px';
}

setInterval(moveImage, 15);

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