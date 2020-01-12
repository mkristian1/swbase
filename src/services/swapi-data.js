export default class SwapiData {
	_apiBase = 'https://swapi.co/api';

	async getData(url) {
		const res = await fetch(`${this._apiBase}${url}`);
		if(!res.ok) {
		throw new Error(`Could not fetch ${url}, received ${res.status}`);
		}
		return await res.json();
	
	}

	async getAllPlanet() {		
		const allPlanetArr = await this.getData('/planets/');
		return allPlanetArr.results;
	}

	getPlanet(id) {
		return this.getData(`/planets/${id}`);
	}

	async getAllPeople() {		
		const allPeopleArr = await this.getData('/planets/');
		return allPeopleArr.results;
	}

	getPeople(id) {
		return this.getData(`/people/${id}`);
	}

	async getAllVehicles() {
		const allVehicles = await this.getData('/vehicles/');
		return allVehicles.results;
	}

	getVehicle(id) {
		return this.getData(`/vehicles/${id}`);
	}

	async getAllStarships() {
		const AllStarshipsArr = await this.getData('/starships/');
	}

	getStarship(id) {
		return this.getData(`/starships/${id}`)
	}
}
