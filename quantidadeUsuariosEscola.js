import { getCSS, tickConfig } from "./common.js";

async function quantidadeUsuariosPorRede() {
    // Dados fictícios dos usuários na escola, incluindo YouTube
    const dadosEscola = {
        "Facebook": 100,  // Menos usuários
        "Instagram": 400,
        "Twitter": 250,
        "TikTok": 800,
        "WhatsApp": 1000, 
        "YouTube": 500
    };


    // Ordenar os dados pela quantidade de usuários em ordem decrescente
    const ordenados = Object.entries(dadosEscola).sort((a, b) => b[1] - a[1]);
    const nomeDasRedes = ordenados.map(item => item[0]);
    const quantidadeDeUsuarios = ordenados.map(item => item[1]);

    
    const textoExplicativo = document.createElement('p');
    textoExplicativo.classList.add('graficos-container__texto');
    textoExplicativo.innerHTML = `
        <span style="font-weight: bold; color: ${getCSS('--secondary-color')}">Você sabia que a nossa escola possui aproximadamente 2.500 alunos?</span>
        <br><br>
        Cerca de <span class="highlight">2.187 estudantes</span> estão conectados a alguma rede social, representando aproximadamente <span class="highlight">87,5%</span> do total de alunos. Em média, esses alunos passam cerca de <span style="font-weight: bold; color: ${getCSS('--secondary-color')}">3,5 horas</span> por dia nas redes sociais. Isso revela que uma parte ainda maior dos nossos estudantes é bastante ativa online.
        <br><br>
        Abaixo, você pode conferir um gráfico que ilustra as redes sociais mais utilizadas pelos nossos alunos:
    `;
    
    
    
    
    


    const container = document.getElementById('graficos-container');
    container.appendChild(textoExplicativo);

    const data = [
        {
            x: nomeDasRedes, 
            y: quantidadeDeUsuarios, 
            type: 'bar',
            marker: {
                color: getCSS('--highlight-color') 
            }
        }
    ];

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Redes sociais com mais usuários entre alunos',
            font: {
                color: getCSS('--highlight-color'),
                size: 30,
                family: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Nome das redes',
                font: {
                    color: getCSS('--highlight-color') // Espaço removido
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Número de usuários',
                font: {
                    color: getCSS('--highlight-color') // Espaço removido
                }
            }
        }
    };
    

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    container.appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}

quantidadeUsuariosPorRede();
