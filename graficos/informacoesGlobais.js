const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizaDadosGlobais(){
const res = await fetch(url);
const dados = await res.json();
const totalPessoasMundo =  (dados.total_Pessoas_Mundo)/1e9;
const totalPessoasConectadas =  (dados.total_Pessoas_Conectadas)/1e9;
const tempoMedio = dados.tempo_medio;
console.log(dados);

const paragrafo = document.createElement('p');
paragrafo.classList.add('graficos-texto');
const container = document.getElementById('graficos-container');
paragrafo.innerHTML  = `O  mundo  tem ${totalPessoasMundo} bilhões de habitantes, dos quais ${totalPessoasConectadas} 
bilhões estão  conectadas em alguma rede social por um tempo médio de ${tempoMedio}`
container.appendChild(paragrafo);
}
visualizaDadosGlobais()
