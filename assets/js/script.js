// Seccion Pintar HTML

const ele1 = document.getElementById('ele1');

if (ele1){
    ele1.addEventListener('click', function(){
        ele1.classList.toggle('green');
        ele1.classList.toggle('yellow');
    });
}
// Seccion Colores

document.querySelector('.container-div').addEventListener('click', function(event) {
    const target = event.target;

    if (target && target.id.startsWith('div')) {
        if (target.classList.contains('black')) {
            target.classList.replace('black', target.dataset.originalClass);
        } else {
            target.dataset.originalClass = target.className;
            target.className = 'black';
        }
    }
});

// Cambiando color a un div

document.addEventListener('keydown', event => {
    const colors = {
        'a': 'pink',
        's': 'orange',
        'd': 'cyan'
    };

    const key = event.key.toLowerCase();

    if (colors[key]) {
        const keyDiv = document.getElementById('key');
        keyDiv.className = 'multicolor';
        keyDiv.classList.add(colors[key]);
    }
});


// Agregando div de colores

document.addEventListener('keydown', event =>{
    const addDiv = {
        'q' : 'purple',
        'w' : 'orange',
        'e' : 'brown'
    };

    const pressKey = event.key.toLowerCase();

    if (addDiv[pressKey]) {
        const newDiv = document.createElement('div');
        newDiv.classList.add(addDiv[pressKey]);
        document.getElementById('new-div').appendChild(newDiv);
    }    
});


