export default class SwapiData {
	_apiBase = 'https://swapi.co/api';
	_imgBase = 'https://starwars-visualguide.com/assets/img/';

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
		const PlanetArr = await this.getData(`/planets/${id}`);
		return this.transformPlanet(PlanetArr);
	}

	getPlanetImg = ({ id }) => {
		return `${this._imgBase}/planets/${id}.jpg`
	};


	getAllCharacter = async () => {
		const allCharacterArr = await this.getData('/people/');
		return allCharacterArr.results.map(this.transformCharacter);
	}

	getCharacter = async (id) => {
		const characterArr = await this.getData(`/people/${id}`);
		return this.transformCharacter(characterArr);
	}

	getCharacterImg = ({ id }) => {
		return `${this._imgBase}/characters/${id}.jpg`
	};

	getAllVehicles = async () => {
		const allVehicleArr = await this.getData('/vehicles/');
		return allVehicleArr.results.map(this.transformVehicle);
	}

	getVehicle = async (id) => {
		const vehicleArr = await this.getData(`/vehicles/${id}`);
		return this.transformVehicle(vehicleArr);
	}

	getVehicleImg = ({ id }) => {
		return `${this._imgBase}/vehicles/${id}.jpg`
	};

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

	transformCharacter = (people) => {
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

	transformVehicle = (vehicle) => {
		return {
			id: this.getId(vehicle),
			name: vehicle.name,
			model: vehicle.model,
			manufacturer: vehicle.manufacturer,
			cost: vehicle.cost_in_credits,
			passengers: vehicle.passengers
		}
	}
}
