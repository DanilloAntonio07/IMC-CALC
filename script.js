function cauculoimc() {
    var altura = parseInt(document.getElementById('altura').value);
    var peso = parseInt(document.getElementById('peso').value);
    document.getElementById('resultado').value = ((peso/altura)**2);
}