document.getElementById('rankForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const wins = parseInt(document.getElementById('wins').value);
    const losses = parseInt(document.getElementById('losses').value);
    const saldoVitorias = wins - losses;
    let nivel;

    if (wins < 10) {
        nivel = 'Ferro';
    } else if (wins <= 20) {
        nivel = 'Bronze';
    } else if (wins <= 50) {
        nivel = 'Prata';
    } else if (wins <= 80) {
        nivel = 'Ouro';
    } else if (wins <= 90) {
        nivel = 'Diamante';
    } else if (wins <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    const resultText = `O Herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}.`;
    document.getElementById('result').textContent = resultText;
});
