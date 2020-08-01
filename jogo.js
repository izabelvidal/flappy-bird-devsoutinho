console.log('Flappy Bird');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

contexto.drawImage(
    image,
    0, 0, //sprite X, sprite Y
    33, 24, //Tamanho
    dx, dy,
    dWidth, dHeight
);