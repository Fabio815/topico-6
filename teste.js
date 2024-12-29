const Gerador = () => {
    const intervaloID = setInterval(() => {
        let ale = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
        console.log(ale);
    }, 1000);

    // Parar o intervalo após 10 segundos (ou qualquer tempo desejado)
    setTimeout(() => {
        clearInterval(intervaloID);
        console.log("Sorteio encerrado.");
    }, 10000); // 10 segundos
};

setTimeout(() => {
    Gerador();
}, 5000); // Iniciar após 5 segundos