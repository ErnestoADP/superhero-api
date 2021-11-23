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