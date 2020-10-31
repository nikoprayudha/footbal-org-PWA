import API from "./api"

class Standings extends API {
    constructor() {
        super()
        this.ENDPOINT_STANDINGS = `${this.BASE_URL}competitions/${this.LEAGUE_ID}/standings`;
    }

    getAllStandings() {
        if ("caches" in window) {
            caches.match(this.ENDPOINT_STANDINGS).then(function(response) {
                if (response) {
                    response.json().then(function(data) {
                        this.showStandings(data)
                    })
                }
            })
        }

        this.fetchAPI(this.ENDPOINT_STANDINGS)
            .then(data => {

                this.showStandings(data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    showStandings(data) {
        let standings = "";
        let standingElement = document.getElementById("standings");

        data.standings[0].table.forEach(function(standing) {
            standings += `
                <tr>
                    <td><img src="${standing.team.crestUrl.replace(/^http:\/\//i, 'https://')}" width="30px" alt="badge"/></td>
                    <td>${standing.team.name}</td>
                    <td>${standing.won}</td>
                    <td>${standing.draw}</td>
                    <td>${standing.lost}</td>
                    <td>${standing.goalsFor}</td>
                    <td>${standing.goalsAgainst}</td>
                    <td>${standing.goalDifference}</td>
                    <td>${standing.points}</td>
                </tr>
            `;
        });

        standingElement.innerHTML = `
                    <table class="striped responsive-table">
                        <thead>
                            <tr>
                                <th>Klub</th>
                                <th>Team Name</th>
                                <th>Win</th>
                                <th>Draw</th>
                                <th>Lose</th>
                                <th>GF</th>
                                <th>GA</th>
                                <th>GD</th>
                                <th>Point</th>
                            </tr>
                        </thead>
                        <tbody id="standing">
                            ${standings}
                        </tbody>
                    </table>
        `;
    }
}

export default Standings