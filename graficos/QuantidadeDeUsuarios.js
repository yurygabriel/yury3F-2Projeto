import { getCSS } from "./comun.js";
async function quantidadeDeUsuarios(){

    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json();
    const nomeDasRedes = Object.keys(dados);
    const  quantidadeDeUsuarios = Object.values(dados);

    const infos = [
{
    x: nomeDasRedes,
    y: quantidadeDeUsuarios,
    type: 'bar',
marker:{
color:getCSS('--cor-secundaria')

}

}
    ]

const grafico = document.createElement('div');
grafico.className = 'grafico';
document.getElementById('graficos-container').appendChild(grafico);
Plotly.newPlot(grafico,infos);
}

quantidadeDeUsuarios();
