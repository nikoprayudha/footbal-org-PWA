import API from "./api";

class Teams extends API {
    constructor() {
        super();
        this.ENDPOINT_TEAMS = `${this.BASE_URL}competitions/${this.LEAGUE_ID}/teams`;
    }

    getAllTeams() {
        if ("caches" in window) {
            caches.match(this.ENDPOINT_TEAMS).then(function(response) {
                if (response) {
                    response.json().then(function(data) {
                        this.showTeams(data);
                    });
                }
            });
        }
        this.fetchAPI(this.ENDPOINT_TEAMS)
            .then((data) => {
                this.showTeams(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    showTeams(data) {
        let teams = "";
        let teamElement = document.getElementById("teams");
        data.teams.forEach(function(team) {
            return (teams += `
            <div class="row">
            <div class="col s12 m6">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light" style="background-color:#f0f0f0;">
                <center><img class="activator" src="${team.crestUrl.replace(
                  /^http:\/\//i,
                  "https://"
                )}" style="width:180px; height:180px;"></center>
                </div>
                <div class="card-content" style="background-color:#343434;">
                <span class="card-title activator white-text text-darken-4">${
                  team.name
                }<i class="material-icons white-text right">more_vert</i></span>
                <p><a href="${team.website}">${team.shortName}</a></p>
                </div>
                <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Information<i class="material-icons right">close</i></span>
                <p>Address: ${team.address}.</p>
                    <br>
                    <p>Email: ${team.email}.</p>
                    <br>
                    <p>Phone: ${team.phone}.</p>
                    <br>
                    <p>Founded: ${team.founded}.</p>
                    <br>
                    <p>Club Colors: ${team.clubColors}.</p>
                    <br>
                    <p>Stadium: ${team.venue}.</p>
                </div>
                </div>
            </div>
            </div>`);
        });
        teamElement.innerHTML = teams;
    }
}
export default Teams;