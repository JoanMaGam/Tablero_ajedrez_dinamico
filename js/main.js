
const tablero = document.querySelector('#tablero');
const numInput = document.querySelector('#num-input');
const tamanoInput = document.querySelector('#tamano-input');
const crearTableroBtn = document.querySelector('#crear-tablero-btn');

crearTableroBtn.addEventListener('click', function () {
    const num = parseInt(numInput.value);
    const tamano = parseInt(tamanoInput.value);
    printTablero(num, tamano, tablero);
});

function empiezaPintarNegras(pDom, pNum, pTamano) {
    for (let j = 0; j < pNum; j++) {
        const p = document.createElement('p');
        p.style.width = `${pTamano}px`;
        p.style.height = `${pTamano}px`;

        if (j % 2 !== 0) {
            p.style.backgroundColor = 'whitesmoke';
        } else {
            p.style.backgroundColor = '#333';
        }
        pDom.appendChild(p)
        console.log(pDom);
    }
    return pDom
}

function empiezaPintarBlancas(pDom, pNum, pTamano) {
    for (let j = 0; j < pNum; j++) {
        const p = document.createElement('p');
        p.style.width = `${pTamano}px`;
        p.style.height = `${pTamano}px`;

        if (j % 2 === 0) {
            p.style.backgroundColor = 'whitesmoke';
        } else {
            p.style.backgroundColor = '#333';
        }
        pDom.appendChild(p)
        console.log(pDom);
    }
    return pDom
}


function printTablero(pNum, pTamano, pDom) {
    tablero.innerHTML = '';

    for (let i = 0; i < pNum; i++) {
        let pp = document.createElement('p')
        pp.style.display = 'flex'
        pDom.appendChild(pp)

        if (i % 2 === 0) {
            empiezaPintarBlancas(pp, pNum, pTamano)
        } else {
            empiezaPintarNegras(pp, pNum, pTamano)
        }
    };
};
