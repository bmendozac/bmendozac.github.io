(function(){
    window.onload = function(){
        let extraerButton = document.getElementById("extraer")
        extraerButton.onclick = extraer;

        let colorearButton = document.getElementById("colorear")
        colorearButton.onclick = colorear;
    };

    //extraer Datos
    function extraer(){
        let nombresIngresados=document.getElementById("nombresIn").value
        //let fechaEscogida=document.getElementById("fechanac").value

        let division = NombresYapellidos(nombresIngresados)
        let longitud = LongitudApellido(division['primerApellido'], division['segundoApellido'])
        //let mesOu = MesEnLetras(fechaEscogida)

        datos(
            division['primerApellido'],
            division['segundoApellido'],
            division['nombres'],
            longitud)
    }

    function datos(primerApellido, segundoApellido, nombres, longitud){
        let primerApellidoExtraido = document.getElementById("primerApellido")
        let segundoApellidoExtraido = document.getElementById("segundoApellido")
        let nombresExtraido = document.getElementById("nombresOu")
        let longitudAp = document.getElementById("longApellido")

        primerApellidoExtraido.value = primerApellido
        segundoApellidoExtraido.value = segundoApellido
        nombresExtraido.value = nombres
        longitudAp.value = longitud
    }

    function NombresYapellidos(nombresIngresados){
        const nombreYapellido = nombresIngresados.split(" ");
        let primerApellido = nombreYapellido[0]
        let segundoApellido = nombreYapellido[1]
        let nombre = nombreYapellido.slice(2, nombreYapellido.length)

        let division = {
            primerApellido: primerApellido,
            segundoApellido: segundoApellido,
            nombres: nombre
        }
        return division
    }
    function LongitudApellido(primerApellido,segundoApellido){
        return primerApellido.length + segundoApellido.length
    }

    //cambio de color
    function colorear(){
        let cambio = document.querySelectorAll('.input-group-text')
        cambio.forEach(function (elemento){
            if (elemento.classList.contains("caja-roja")) {
                elemento.classList.remove("caja-roja");
                elemento.classList.add("caja-azul"); 
            } else {
                elemento.classList.remove("caja-azul");
                elemento.classList.add("caja-roja");
            }
        });
    }
})();