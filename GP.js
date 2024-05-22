// Datos de los circuitos por país
const circuitosPorPais = {
    "USA": ["Sebring International Raceway", "Las Vegas Strip Street Circuit", "Watkins Glen"],
    "Malaysia": ["Sepang International Circuit"],
    "China": ["Shanghai International Circuit"],
    "UK": ["Silverstone Circuit"],
    "Russia": ["Sochi Autodrom"],
    "Belgium": ["Circuit de Spa-Francorchamps", "Zolder"],
    "Japan": ["Suzuka Circuit"],
    "Canada": ["Circuit Mont-Tremblant", "Circuit Gilles Villeneuve"],
    "Spain": ["Valencia Street Circuit"],
    "UAE": ["Yas Marina Circuit"],
    "Korea": ["Korean International Circuit"],
    "Netherlands": ["Circuit Park Zandvoort"],
    "Austria": ["Zeltweg"],
    "USA": ["Sebring International Raceway", "Las Vegas Strip Street Circuit", "Watkins Glen"],
    "Canada": ["Circuit Mont-Tremblant", "Circuit Gilles Villeneuve"]
};

// Contar los circuitos por país
const contarCircuitosPorPais = {};
for (const pais in circuitosPorPais) {
    if (contarCircuitosPorPais.hasOwnProperty(pais)) {
        contarCircuitosPorPais[pais] = circuitosPorPais[pais].length;
    }
}

// Convertir los datos en un formato adecuado para el gráfico de pastel
const labels = Object.keys(contarCircuitosPorPais);
const data = Object.values(contarCircuitosPorPais);

// Configuración del gráfico de pastel
const config = {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Distribución de Circuitos por País'
            }
        }
    }
};

// Inicializar el gráfico
const ctx = document.getElementById('graficoPastel').getContext('2d');
new Chart(ctx, config);
