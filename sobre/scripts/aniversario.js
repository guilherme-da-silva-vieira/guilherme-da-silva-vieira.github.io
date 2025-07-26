let incluirIdade; // colocar idade no parágrafo de apresentação

incluirIdade = () => {
    let tempo; // possibiltar a manipulação de métodos de tempo no JS
    let mes; //mês atual
    let dia; //dia atual
    let ano; //ano atual
    let calculo; // calculo parcial da idade
    let idadeFinal; // claculo final da idade
    let spanAge; //tag span com o id age que vai estar a idade
    const anoAniversario = 2008;// ano do meu aniversario
    const mesAniversario = 9;// mês do meu aniversario(10 - outubro), pense em um array com 12 valores(ou seja de 0 até 11)
    const diaAniversario = 22;// dia do meu aniversário

    tempo = new Date();
    mes = tempo.getMonth();
    dia = tempo.getDate();
    ano = tempo.getFullYear();
    spanAge = document.getElementById("age");

    calculo = ano - anoAniversario;
    //analisando se já ocorreu ou não o aniversário
    if(mes >= mesAniversario){
	//quando for outubro
	if(mes === mesAniversario) idadeFinal = dia >= diaAniversario ? calculo:calculo-1;
	//quando for novembro e dezembro
	else idadeFinal = calculo; 
    }
    //quando for antes de outubro
    else idadeFinal = calculo - 1;
    spanAge.innerHTML = idadeFinal;
}
