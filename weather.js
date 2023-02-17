function getWeather() {
	const cityInput = document.getElementById('city').value;
	const stateInput = document.getElementById('state').value;
	const apiKey = '126d8b56dc9c144e566b2607bba7cad4';

	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput},${stateInput}&appid=${apiKey}`)
		.then(response => {
			if (!response.ok) {
				throw new Error('City not found.');
			}
			return response.json();
		})
        .then(data => {
            const temperatureFahrenheit = Math.round((data.main.temp - 273.15) * 9/5 + 32);
            const conditions = data.weather[0].description;
            const country = data.sys.country;
      
          
            document.getElementById('weather').innerHTML = `
            <h2>${cityInput}, ${stateInput}, ${country}</h2>
            <p>Temperature: ${temperatureFahrenheit}&deg;F</p>
            <p>Conditions: ${conditions}</p>
			`;
			document.getElementById('error-message').innerHTML = '';
		})
		.catch(error => {
			document.getElementById('weather').innerHTML = '';
			document.getElementById('error-message').innerHTML = error.message;
		});
}
