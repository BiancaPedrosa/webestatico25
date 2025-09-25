function calculateScore() {
    let score = 0;


    const q1 = document.querySelector('select[name="q1"]').value;
    if (q1 === "1x" || q1 === "2x") {
        score += 10;
    } else if (q1 === "3x") {
        score += 5;
    }

    
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "cafe") {
        score += 10;
    } else if (q2 && q2.value === "almoco") {
        score += 5;
    }

    const q3 = document.querySelectorAll('input[name="q3"]:checked');
    if (q3.length === 1 && q3[0].value === "fresca") {
        score += 10;
    } else if (q3.length === 1 && q3[0].value === "restaurante") {
        score += 5;
    }

    
    const q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && (q4.value === "90" || q4.value === "75")) {
        score += 10;
    } else if (q4 && q4.value === "50") {
        score += 5;
    }

   
    const q5 = document.querySelector('select[name="q5"]').value;
    if (q5 === "menos18" || q5 === "18a25") {
        score += 10;
    } else if (q5 === "25a30") {
        score += 5;
    }

    return score;
}

document.getElementById('questionnaire-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

  
    const score = calculateScore();

    
    const resultDiv = document.getElementById('result');
    let resultMessage = '';

    if (score === 50) {
        resultMessage = 'Excelente! Você está no caminho certo.';
        alert("Excelente! Você está no caminho certo.")
    } else if (score >= 40) {
        resultMessage = 'Parabéns! Continue focado.';
        alert("Parabéns! Continue focado.")
    } else if (score > 30) {
        resultMessage = 'Está bom, mas você pode melhorar.';
        alert("Está bom, mas você pode melhorar.");
    } else {
        resultMessage = 'Mude seus hábitos imediatamente.';
        alert("Mude seus hábitos imediatamente");
    }

    resultDiv.innerHTML = resultMessage; 
});