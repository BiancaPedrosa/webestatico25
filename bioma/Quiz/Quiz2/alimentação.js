function calcularPontuacao() {
    let pontos = 0;

    pontos += parseInt(document.getElementById('quantas-vezes').value);

    const refeicao = document.querySelector('input[name="refeicao"]:checked');
    if (refeicao) {
        pontos += parseInt(refeicao.value);
    }

    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(function(checkbox) {
        pontos += parseInt(checkbox.value);
    });

    const carne = document.querySelector('input[name="carne"]:checked');
    if (carne) {
        pontos += parseInt(carne.value);
    }

    pontos += parseInt(document.getElementById('imc').value);

    let resultado = '';
    if (pontos >= 50) {
        resultado = 'Excelente! Você está no caminho certo.';
    } else if (pontos >= 40) {
        resultado = 'Parabéns! Continue focado.';
    } else if (pontos > 30) {
        resultado = 'Está bom, mas você pode melhorar.';
    } else {
        resultado = 'Mude seus hábitos imediatamente.';
    }

    document.getElementById('resultado').innerHTML = resultado;
}