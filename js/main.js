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