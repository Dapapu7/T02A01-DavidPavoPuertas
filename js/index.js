var lista = document.getElementById("opciones");

    function buscarTiempo(ciudad1, pais1) {
        var clave = "6ce8d13f660cc26092464ba0dc0bacc1";
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + ciudad1 + ',' + pais1 + '&appid=' + clave + '&lang=es')  
        .then(function(resp) { return resp.json() })
        .then(function(datos) {
            pintarTiempo(datos)
        })
        .catch(function() {
            console.error(error);
        });
    }

    function pintarTiempo(d) {
        var celcius = Math.round(parseFloat(d.main.temp)-273.15);
        
        var descripcion = d.weather[0].description

        document.getElementById('desc').innerHTML = descripcion;
        document.getElementById('temp').innerHTML = celcius + '&deg;';
        document.getElementById('name').innerHTML = d.name;
        if( description.indexOf('rain') > 0 ) {
            document.body.className = 'Lluvioso';
        } else if( description.indexOf('Nuboso') > 0 ) {
            document.body.className = 'Nuboso';
        } else if( description.indexOf('Soleado') > 0 ) {
            document.body.className = 'Soleado';
        }
        else {
            document.body.className = 'Claro';
        }
    }
    
    window.onload = function() {
        buscarTiempo(
            document.getElementById('idciudad').value,
            lista.options[lista.selectedIndex].value
        );
    }
