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
		const allPeopleArr = await this.getData('/people/');
		return allPeopleArr.results.map(this.transformPerson);
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
		return AllStarshipsArr.map(this.transformStarship);
	}

	async getStarship(id) {
		const starship =  await this.getData(`/starships/${id}/`);
		return this.transformStarship(starship);
	}

	getId(item) {
		const idRegExp = /\/([0-9]*)\/$/;
		return item.url.match(idRegExp)[1];	
	}

	transformStarship = (starship) =>  {
		return {
				id: this.getId(starship),
				name: starship.name,
				model: starship.model,
				manufacturer: starship.manufacturer,
				crew: starship.crew,
				speed: starship.max_atmosphering_speed

			}
	}

	transformPerson = (people) =>  {
		return {
				id: this.getId(people),
				name: people.name,
				hairColor: people.hair_color,
				height: people.height,
				birthYear: people.birth_year
			}
	}
}
