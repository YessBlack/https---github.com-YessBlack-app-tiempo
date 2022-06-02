window.addEventListener('load', e => {
    let lat,lon

    const temperaturaValor = document.getElementById('temperatura-valor')
    const temperaturaDescripcion = document.getElementById('temperatura-descripcion')

    const ubicacion = document.getElementById('ubicacion')
    const iconoAnimado = document.getElementById('icono-animado')

    const velocidadViento = document.getElementById('velocidad-viento')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(pos => {
            lat = pos.coords.latitude
            lon = pos.coords.longitude

            const URL_API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7b6de64c34b49d081ade9939bc2f1767`

            fetch(URL_API)
                .then(response => {return response.json()})
                .then(data => {                                       
                    temperaturaValor.textContent = `${Math.round((data.main.temp)/10)} °C`
                    temperaturaDescripcion.textContent = `${data.weather[0].description}`                    
                    ubicacion.textContent = `${data.name}`
                    velocidadViento.textContent = `${data.wind.speed} m/s`

                    const URL_ICON = ``

                    console.log(data)
                    switch (data.weather[0].main) {
                        case 'Clear':
                            iconoAnimado.src = "icons/animated/day.svg"
                        break;
                        case 'Clouds':
                            iconoAnimado.src = "icons/animated/cloudy-day-1.svg"
                        break;
                        case 'Thunderstorm':
                            iconoAnimado.src = "icons/animated/thunder.svg"
                        break;
                        case 'Drizzle':
                            iconoAnimado.src = "icons/animated/rainy-2.svg"
                        break;
                        case 'Rain':
                            iconoAnimado.src = "icons/animated/rainy-7.svg"
                        break;
                        case 'Snow':
                            iconoAnimado.src = "icons/animated/snowy-6.svg"
                        break;
                        case 'Atmosphere':
                            iconoAnimado.src = "icons/animated/weather.svg"
                        break;
                        default:
                            iconoAnimado.src = "icons/animated/cloudy-day-1.svg"
                            break;
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        })    
    }
})