const listItems = document.querySelectorAll('.item'); // 4 ли
const cardName = document.getElementById('name');
const cardPhone = document.getElementById('phone');
const cardStreet = document.getElementById('street');

let name;
let phone;
let street;

listItems.forEach(item => {
    item.addEventListener('click', () => {
        name = item.dataset.name;
        phone = item.dataset.phone;
        street = item.dataset.street;
       item.classList.add('hidden');

        cardName.innerText = name;
        cardPhone.innerText = phone;
        cardStreet.innerText = street;
    });
})




/*
const listData = [
    {
        name: 'NY',
        phone: '+31321',
        street: 'NY 12',
    },
    {
        name: 'BR',
        phone: '+4213213',
        street: 'BR 12',
    },
    {
        name: 'GE',
        phone: '+5523523',
        street: 'GE 12',
    },
];

let listChildren = '';


for (let i = 0; i < listData.length; i++ ) {
    listChildren += `<li class="item" data-number=${i}>${listData[i].name}</li>`
}




const list = document.getElementById('list');
list.innerHTML = listChildren;

const listI = document.querySelectorAll('.item');

listI.forEach(item => {
    item.addEventListener('click', () => {

    })
})
console.log(listI)

*/


/*const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const WIDTH = 350;
const HEIGHT = 550;

ctx.beginPath()
ctx.strokeStyle = 'pink';
ctx.lineWidth = 5;
ctx.moveTo(WIDTH - 30,0);
ctx.lineTo(WIDTH - 30,HEIGHT);
ctx.stroke();


const drawHorizontalLine = (y) => {
    ctx.beginPath()
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;

    ctx.moveTo(0,y);
    ctx.lineTo(WIDTH,y);
    ctx.stroke();
}

const drawHorizontalDoubleLines = (y,step) => {
    drawHorizontalLine(y);
    drawHorizontalLine(y + step);
}



const drawHorizontalLines = (y) => {
    let place = 18;
    let yCoord = y;
    const step = 10;
    const doubleStep = 30;

    while (place > 0 ) {
        drawHorizontalDoubleLines(yCoord, step)
        yCoord = yCoord + doubleStep;

        place--
    }
}

drawHorizontalLines(10)

ctx.beginPath()
ctx.strokeStyle = 'blue';
ctx.lineWidth = 2;

ctx.moveTo(0,y);
ctx.lineTo(WIDTH,y);
ctx.stroke();*/


/*let x = 200;
let y = 100;
let stepCount = 0;
let direction;
let timer;
let color = 'green';

const drawDot = () => {
    // ctx.clearRect(0,0,400,200);

    if (stepCount === 0) {
        stepCount = Math.floor(15 * Math.random());
        direction = Math.floor(8 * Math.random());
        if (color === 'green') {
            ctx.fillStyle = 'red';
            color = 'red';
        } else {
            ctx.fillStyle = 'green';
            color = 'green';
        }
    } else  {
        stepCount --
    }

    switch (direction) {
        case 0:
            y = y - 1;
            break;
        case 1:
            x = x + 1;
            break;
        case 2:
            y = y + 1;
            break;
        case 3:
            x = x - 1;
            break;
        case 4:
            y = y - 1;
            x = x + 1;
            break;
        case 5:
            x = x + 1;
            y = y + 1;
            break;
        case 6:
            y = y + 1;
            x = x - 1;
            break;
        case 7:
            y = y - 1;
            x = x - 1;
            break;

        default: break;
    }

    if (x < 0 || x > 400 || y < 0 || y > 200) {
        stepCount = 0;
    }

    ctx.fillRect(x-3, y-3,6,6);

    timer = setTimeout(drawDot, 100);
}

drawDot();*/
/*ctx.strokeStyle = 'green';
ctx.arc(150, 100, 75, 0, Math.pi/2, false);
ctx.stroke();*/

/*
    canvas.onmousedown = (event) => {
        ctx.fillStyle = 'green';
        canvas.onmousemove = (event) => {
        const x = event.offsetX;
        const y = event.offsetY;

        ctx.fillRect(x,y,5,5);
        }

        canvas.onmouseup = () =>{
            canvas.onmousemove = null;
        }
    }
*/


/*ctx.beginPath();
ctx.moveTo(100, 50);

ctx.lineTo(150, 150);
ctx.strokeStyle = 'red';
ctx.lineWidth = '5';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 50)


ctx.strokeStyle = 'green';
ctx.lineWidth = '7';
ctx.lineTo(300, 50);
ctx.lineCap = "round";
ctx.stroke();
ctx.clearRect(0,0, 400,200);

ctx.moveTo(50,150);
ctx.lineTo(100, 50);
ctx.lineTo(150, 150);
ctx.lineTo(50,150);
ctx.stroke();
ctx.fillStyle = 'orange';
ctx.fill();*/

/*
function createRect(color, x, y, width, height) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width,height);
}

createRect('yellow', 100, 50, 100, 50);
createRect('purple', 300, 50, 100, 50);

ctx.strokeStyle = 'green';
ctx.lineWidth = "10";
ctx.rect(5,10,100,100);

ctx.stroke();

ctx.fillStyle = 'orange';
ctx.fill();
*/
