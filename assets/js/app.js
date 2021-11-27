/** ---------------------------   error: (error) => {
        console.log(error `Codigo de rror: ${error.status}`)
        console.log(error.statusText)
        console.log(error.responseText)
    }----------------------------------------------------------------------- */



/**funcion para traer la api y parciarla mediante el metodo click por el boton traemos el numero*/
$('#button-addon2').click(function(event) {
        /**aqui parciamos y vemos la entrada del numero en el input */
        let numeroHero = parseInt($('#inputNumber').val());

        $.ajax({
            /**aqui traemos la api mas el numero ingresado del input */
            url: `https://superheroapi.com/api/10227257603166405/${numeroHero}`,
            success: (datosHero) => {
                generarGrafico(datosHero);
                cuerpoCard(datosHero);
                window.onload(datosHero);

            },
        });

    })
    /**--------------------------------------------------------------------------------------------*/

/**funcion para traer los datos que necesitamos */
function cuerpoCard(datosHero) {
    tituloHeroe = $('.h1')
    tituloHeroe.empty();
    tituloHeroe.append("SuperHero Encontrado ");

    nombreHeroe = $('.card-title')
    nombreHeroe.empty();
    nombreHeroe.append("Nombre: " + datosHero.name);



    conexionHeroe = $('.card-text2')
    conexionHeroe.empty();
    conexionHeroe.append("Conexiones:  " + datosHero.connections["group-affiliation"]);

    pHeroe = $('.card-text3')
    pHeroe.empty();
    pHeroe.append("Publicado por:  " + datosHero.biography.publisher);



    workHeroe = $('.card-text1')
    workHeroe.empty();
    workHeroe.append("Ocupación:  " + datosHero.work.occupation);

    primeraAparicionHeroe = $('.card-text4')
    primeraAparicionHeroe.empty();
    primeraAparicionHeroe.append("Primera aparición:  " + datosHero.biography["first-appearance"]);

    alturaHeroe = $('.card-text5')
    alturaHeroe.empty();
    alturaHeroe.append("Altura:  " + datosHero.appearance.height);

    pesoHeroe = $('.card-text6')
    pesoHeroe.empty();
    pesoHeroe.append("Peso:  " + datosHero.appearance.weight);

    alianzasHeroe = $('.card-text7')
    alianzasHeroe.empty();
    alianzasHeroe.append("Alianzas:  " + datosHero.biography.aliases);

    imgHero = $('.img-fluid').attr("src", datosHero.image.url);
}
/**--------------------------------------------------------------------------------------------*/
/**grafico */
function generarGrafico(datosHero) {
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
                { y: datosHero.powerstats.combat, label: "Combat" },
                { y: datosHero.powerstats.intelligence, label: "inteligence" },
                { y: datosHero.powerstats.strength, label: "Strength" },
                { y: datosHero.powerstats.speed, label: "Sepeed" },
                { y: datosHero.powerstats.durability, label: "Durability" },
                { y: datosHero.powerstats.power, label: "Power" },


            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options);

}


/**--------------------------------------------------------------------------------------------*/