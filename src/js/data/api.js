class API {
    constructor() {
        this.API_KEY = "e30f136bd30b4e708bab7abe18a460b1";
        this.BASE_URL = "https://api.football-data.org/v2/";
        this.LEAGUE_ID = 2021;
        this.fetchAPI = url => {
            return fetch(url, {
                    headers: {
                        'X-Auth-Token': this.API_KEY
                    }
                })
                .then(res => {
                    if (res.status !== 200) {
                        console.log("Error: " + res.status);
                        return Promise.reject(new Error(res.statusText))
                    } else {
                        return Promise.resolve(res)
                    }
                })
                .then(res => res.json())
                .catch(err => {
                    console.log(err)
                })
        };
    }

}

export default API