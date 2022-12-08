var valor1;
var valor2;
var resultado;

function somar() {
valor1 = document.getElementById('valor1').value;
valor2 = document.getElementById('valor2').value;
resultado = Number(valor1)+Number(valor2);
document.getElementById("total").value=resultado;
}
function subtrair() {
valor1 = document.getElementById('valor1').value;
valor2 = document.getElementById('valor2').value;
resultado = Number(valor1)-Number(valor2);
document.getElementById("total").value=total;
    }
function dividir() {
valor1 = document.getElementById('valor1').value;
valor2 = document.getElementById('valor2').value;
resultado = Number(valor1)/Number(valor2);
document.getElementById("total").value=total;
    }    
function multiplicar() {
valor1 = document.getElementById('valor1').value;
valor2 = document.getElementById('valor2').value;
resultado = Number(valor1)*Number(valor2);
document.getElementById("total").value=total;
    } 