window.onload = function() {

    let options = {
        title: {
            text: "Estadisticas de Poder para"
        },
        animationEnabled: true,
        data: [{
            type: "pie",
            startAngle: 40,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 69, label: "inteligence" },
                { y: 100, label: "Strength" },
                { y: 50, label: "Sepeed" },
                { y: 100, label: "Durability" },
                { y: 100, label: "Power" },
                { y: 100, label: "Combat" },

            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options);



}

$(document).ready(function() {
    $('#button-addon2').on('click', () => {
        $('.section').toggle(4000);
    });

});
/**--------------------------------------------------------------------------------------------------- */
let mostrar = $('#mostrar');
$.ajax({
    type: 'GET',
    url: 'https://www.mindicador.cl/api',
    success: (datosHero) => {
        console.table(datosHero);
        console.info(datosHero.dolar);

        mostrar.html(`<h2>Dolar</h2>
             <p>${datosHero.dolar.valor}</p>
        
        `);
    },
    error: (error) => {
        console.log(error `Cdigo de rror: ${error.status}`)
        console.log(error.statusText)
        console.log(error.responseText)


    }

})