const remoteUrl = "http://localhost:3000/generatePokemon/"
const randomMonUrl = remoteUrl + "random"
const dailyMonUrl = remoteUrl + "daily"

export default {
	// Currently don't really need the switch statement - the type is the same as the url path ending
	// But may need in the future if paths get more complex, so I'll keep it as is
	async getMonByRouteType(type) {
		let urlToUse = "";
		switch (type) {
			case "daily":
				urlToUse = dailyMonUrl;
				break;
			default:
				urlToUse = randomMonUrl;
				break;
		}
		return await this.getMon(urlToUse);
	},
	async getMon(url) {
		console.log(url)
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});
		return await response.json();
	},
}