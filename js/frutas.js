//En el tema dos casi no se nota el color de las letras, pero es un azul bastante oscuro, no negro

var fruta = document.getElementsByClassName('fruta');

var cambiar_colores = document.querySelector('.cambiar_colores');

var color_actual = 1;

if (localStorage.getItem('color_actual') != null) {
    color_actual = localStorage.getItem('color_actual');

    console.log(color_actual);

    if (color_actual == 0) {
        tema_dos();
    } else {
        tema_uno();
    }
}

cambiar_colores.addEventListener('click', function () {

    if (color_actual == 0) {

        tema_uno();

    } else {

        tema_dos();

    }

    guardarEnLocalStorage();

});

function guardarEnLocalStorage() {
    localStorage.setItem('color_actual', color_actual);
}

function tema_uno() {

    color_actual = 1;

    for (var i = 0; i < fruta.length; i++) {
        if (i % 2 == 0) {
            fruta[i].style.backgroundColor = '#00293b';
            fruta[i].style.color = '#f8b300';
        }
        else {
            fruta[i].style.backgroundColor = '#fff';
            fruta[i].style.color = '#000';
        }
    }
}

function tema_dos() {

    color_actual = 0;

    for (var i = 0; i < fruta.length; i++) {
        if (i % 2 == 0) {
            fruta[i].style.backgroundColor = '#fff';
            fruta[i].style.color = '#000';
        }
        else {
            fruta[i].style.backgroundColor = '#00293b';
            fruta[i].style.color = '#f8b300';
        }
    }
}