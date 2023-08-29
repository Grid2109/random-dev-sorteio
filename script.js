function generateNumber() { //função gerador de número aleatório

    const min = Math.ceil(document.querySelector('.input-min').value) //pega o valor do primeiro input e arredonda pra cima
    const max = Math.floor(document.querySelector('.input-max').value) //pega o valor do segundo input e arredonda pra baixo 

    const result = Math.floor(Math.random() * (max - min + 1)) + min; //sorteando número aleatório entre os números digitados nos inputs de valor min e máx

    alert(result) //mostra o número sorteado para o usuário numa caixinha
}
