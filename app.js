//imprime todas as informações da lista de objetos
console.log(menu);

//imprime todas as informações de um objeto da lista declarando o número dentro do colchete
console.log(menu[1]);

//imprime uma informação específica do objeto da lista
console.log(menu[1].titulo);

// declarando uma função para o botão pesquisar
function pesquisar() {

    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    //interação entre html e javascript (pega o valor digitado)
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se o campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p> Nada foi encontrado!</p>";
        return
    }
    //coloca todos os valores digitados na pesquisa em minúsculo
    campoPesquisa = campoPesquisa.toLowerCase();

    //Criar uma condicional para pegar o valor digitado no campo-pesquisa e comparar se existe dentro do arquivo de dados

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada item da lista de dados
    for (let dado of menu) {
        //toLocaleLowerCase permite fazer a pesquisa de uma string em qualquer formato (maiúscla/minúscula)
        titulo = dado.titulo.toLocaleLowerCase();
        descricao = dado.descricao.toLocaleLowerCase();
        tags = dado.tags.toLocaleLowerCase();

        console.log(dado.titulo.includes(campoPesquisa));

        // se titulo includes campoPesquisa, então faça... 
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //cria um novo elemento
            resultados +=
                `
            <div class="item-resultado">
                <h2> <a href="#" tagert="blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}
                </p>
            </div>
            `;
        }
    }

    //se resultados não existir (!)
    if (!resultados) {
        resultados = `<p>Valor não escontrado</p>`

    }
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}


