document.getElementById('boton').onclick = function () {
    document.getElementById('texto').innerHTML = "¡Gracias por leer mi CV!";
}

document.getElementById('boton-color').addEventListener('click', function () {
    document.body.style.backgroundColor = '#e5bd50'
    document.getElementById('navbar').style.backgroundColor = '#3c324c';
})

document.getElementById('boton-default').addEventListener('click', function () {
    document.body.style.backgroundColor = '#9bc4cb';
    document.getElementById('navbar').style.backgroundColor = '#bf4e30';
})