
function selecionar() {
    let id; // id do select
    let escolher; // id do botão ano
    
    id = document.getElementById("selecionar");
    ano = document.getElementById("escolher");
    
    switch(id.value){
    	case 1:
	ano.href = "2025/projetos.html";
	break;
    }
}
