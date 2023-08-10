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





