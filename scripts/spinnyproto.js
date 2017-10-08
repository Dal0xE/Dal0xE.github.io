var cdeg = 0
var ctx = document.getElementById('silveralchemy').getContext('2d');
var canvas = document.getElementById('silveralchemy');
let dglist = {0: 0, 1: 52, 2: 103, 3: 154, 4: 207, 5: 259, 6: 310};
function drawImageRot(img,x,y,width,height,deg){
    //Rotate the canvas, draw the image (right side up), and rotate the canvas back
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var rad = deg * Math.PI / 180;
    ctx.translate(x + width / 2, y + height / 2);
    ctx.rotate(rad);
    ctx.drawImage(img,width / 2 * (-1),height / 2 * (-1),width,height);
    ctx.rotate(rad * ( -1 ) );
    ctx.translate((x + width / 2) * (-1), (y + height / 2) * (-1));
}
function getNextDeg() {
    cdeg ++;
    if (cdeg > 6) {
        cdeg = 0;
    }
    return dglist[cdeg];
}
function userDidTouch() {
    img = document.getElementById('imgus');
    drawImageRot(img, 0, 0, img.width, img.height, getNextDeg());
}
window.addEventListener('touchstart', userDidTouch);
window.addEventListener('onclick', userDidTouch);
