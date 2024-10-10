
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizaDadosGlobais(){
    const res = await fetch(url);
    console.log(res);
    const dados = await res.json();
    const totalPessoasMundo = (dados.total_pessoas_mundo)/1e9;
    const totalPessoasConectadas = (dados.total_pessoas_conectadas)/1e9;
    const tempoMedio = dados.tempo_medio;
    console.log(dados);

 const paragrafo = document.createElement('p')
 paragrafo.classList.add('graficos-texto')
 const container = document.getElementById('graficos-container')
 paragrafo.innerHTML = `No mundo tem <span> ${totalPessoasMundo} bilhoes </span> de habitantes, dos quais <span> ${totalPessoasConectadas} bilhoes </span> estão em alguma rede social por um tempo médio de <span>  ${tempoMedio} horas. </span>`
container.appendChild(paragrafo);
}

visualizaDadosGlobais();
