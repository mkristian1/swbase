export default class SwapiData {
	_apiBase = 'https://swapi.co/api';

	getData = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`);
		}
		return await res.json();

	}

	getAllPlanets = async () => {
		const allPlanetArr = await this.getData('/planets/');
		return allPlanetArr.results.map(this.transformPlanet);
	}

	getPlanet = async (id) => {
		return this.getData(`/planets/${id}`);
	}

	getAllPeople = async () => {
		const allPeopleArr = await this.getData('/people/');
		return allPeopleArr.results.map(this.transformPerson);
	}

	getPeople = async (id) => {
		const peopleArr = await this.getData(`/people/${id}`);
		return this.transformPerson(peopleArr);
	}

	getAllVehicles = async () => {
		const allVehicles = await this.getData('/vehicles/');
		return allVehicles.results;
	}

	getVehicle = async (id) => {
		return this.getData(`/vehicles/${id}`);
	}

	getAllStarships = async () => {
		const AllStarshipsArr = await this.getData('/starships/');
		return AllStarshipsArr.map(this.transformStarship);
	}

	getStarship = async (id) => {
		const starship = await this.getData(`/starships/${id}/`);
		return this.transformStarship(starship);
	}

	getId(item) {
		const idRegExp = /\/([0-9]*)\/$/;
		return item.url.match(idRegExp)[1];
	}

	transformStarship = (starship) => {
		return {
			id: this.getId(starship),
			name: starship.name,
			model: starship.model,
			manufacturer: starship.manufacturer,
			crew: starship.crew,
			speed: starship.max_atmosphering_speed

		}
	}

	transformPerson = (people) => {
		return {
			id: this.getId(people),
			name: people.name,
			hairColor: people.hair_color,
			height: people.height,
			birthYear: people.birth_year,
			mass: people.mass
		}
	}

	transformPlanet = (planet) => {
		return {
			id: this.getId(planet),
			name: planet.name,
			population: planet.population,
			diameter: planet.diameter,
			rotationPeriod: planet.rotation_period,
			gravity: planet.gravity
		}
	}
}
