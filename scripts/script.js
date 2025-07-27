let incluirAno;//arrow function para definir o ano e mensagem de direitos autorais no rodapé
incluirAno = () =>{
    let tempo;//uma variável onde é possível obter o tempo
    let ano;//irá armazenar o ano
    let mensagem; // mensagem final;
    let copy; //tag que vai ser modificada(o rodapé)
    
    tempo = new Date();
    ano = tempo.getFullYear();//obtendo o ano
    mensagem = `&copy; ${ano} - Guilherme da Silva Vieira`;
    copy = document.getElementById("copy");
    copy.innerHTML = mensagem;
}
