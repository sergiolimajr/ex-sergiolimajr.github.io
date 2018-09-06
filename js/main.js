/*	
var map, marker, infowindow;

// Gerar o mapa

function myMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -15, lng: -55},
		zoom: 5
	});

	// Cria um Ponto com animação de Drop

	marker = new google.maps.Marker({
		map: map,
		animation: google.maps.Animation.DROP
	});

	// Cria um evento no Ponto para dar zoom e manter o ponto no centro do mapa de acordo com a coordenada

	marker.addListener('click', function() {
		map.setZoom(15);
		map.setCenter(marker.getPosition());
	});

	// Criar um popup com dados que desejamos informar
	// No meu caso, as coordenadas do ponto atual

	infowindow = new google.maps.InfoWindow({
		content: `<h3>Minhas coordenadas: </h3> ${marker.getPosition()}`
	});

	marker.addListener('mouseover', function() {
		infowindow.open(map, marker);
	});

	
		Pede permissão ao usuário atraves do navegador para usar GPS
		Pega a posição através da LAT e LNG
		Adiciona o ponto criado anteriormente no mapa.
	 

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};

			marker.setPosition(pos);
			map.setCenter(pos);

		}, function() {
			handleLocationError(true, marker, map.getCenter());
		});
	
	} else {
		// Browser doesn't support Geolocation
   	handleLocationError(false, marker, map.getCenter());
	}		
}
*/

// Service Worker Registration

if (navigator.serviceWorker) {
	navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
		console.log('ServiceWorker registration successful with scope:',  registration.scope);
	}).catch(function(error) {
		console.log('ServiceWorker registration failed:', error);
	});
}

// Create Element on HTML

function createNode(element) {
	return document.createElement(element);
}

function append(parent, el) {
	return parent.appendChild(el);
}

// FETCH EMERGENCIA

const divEmergencia = document.getElementById('emergencia');
const URL_EMERGENCIA = 'https://raw.githubusercontent.com/sergiolimajr/projeto-integrador/master/json/emergencia.json';
//const URL_EMERGENCIA = 'http://servicos.al.gov.br/api/services.json?q=emergencia';
fetch(URL_EMERGENCIA)
	.then(response => response.json()) // retorna uma promise
	.then(data => {
		let services = data.services;
		
		return services.map(service => {
			let collection = createNode('div'),
			a = createNode('a');

			collection.innerHTML = `${a}`;
			a.innerHTML = `${service.name}`;
			
			a.href = '../partials/serviceContent.html';
			a.className = 'collection-item waves-effect black-text';
			collection.className = 'collection';

			
			append(divEmergencia, collection);
			append(collection, a);
		})
	})
	.catch(err => {
		// trata se algumas das promises falhar
		console.log('Falha na recuperação de informações', err);
	});

// FETCH URGENCIA

const divUrgencia = document.getElementById('urgencia');
const URL_URGENCIA = 'https://raw.githubusercontent.com/sergiolimajr/projeto-integrador/master/json/urgencia.json';
//const URL_URGENCIA = 'http://servicos.al.gov.br/api/services.json?q=urgencia';
fetch(URL_URGENCIA)
	.then(response => response.json()) // retorna uma promise
	.then(data => {
		let services = data.services;

		return services.map(service => {
			let collection = createNode('div'),
			a = createNode('a');
			
			collection.innerHTML = `${a}`;
			a.innerHTML = `${service.name}`;
			
			a.href = '../partials/serviceContent.html';
			a.className = 'collection-item waves-effect black-text';
			collection.className = 'collection';
			
			append(divUrgencia, collection);
			append(collection, a);
		})
	})
	.catch(err => {
		// trata se algumas das promises falhar
		console.log('Falha na recuperação de informações', err);
	});