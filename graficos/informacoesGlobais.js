const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizaDadosGlobais(){
    const res = await fetch(url);
    const dados = await res.json();
    const totalPessoasMundo = (dados.total_pessoas_mundo)/1e9;
    const totalPessoasConectadas = (dados.total_pessoas_conectadas)/1e9;
    const tempoMedio = dados.tempo_medio;
    console.log(dados);

    const paragrafo = document.createElement('p')
    // * Cria uma tag <p> que é um paragrafo (no HTML)
    paragrafo.classList.add('graficos-texto')
    // * Cria uma classe 'graficos-texto' na tag <p>
    const container = document.getElementById('graficos-container')
    paragrafo.innerHTML = `O mundo tem <span> ${totalPessoasMundo} bilhões </span> de 
    habitantes, dos quais <span> ${totalPessoasConectadas} bilhões </span> estão conectados
    em alguma rede social por um tempo médio de <span> ${tempoMedio} horas </span>.`
    container.appendChild(paragrafo);
}

visualizaDadosGlobais();
