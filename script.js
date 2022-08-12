
function init(){
        const astronautsApi = "https://handlers.education.launchcode.org/static/astronauts.json";
        const container =  document.getElementById("container");
        fetch(astronautsApi).then(function(response){
            response.json().then(function(astronauts){
                
                for(const astronaut of astronauts.sort((a,b) => b.hoursInSpace - a.hoursInSpace)){
                    container.innerHTML = `${container.innerHTML}
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                            <ul>
                                <li>Active: <span class="${astronaut.active ? "active" : "inactive"}">${astronaut.active}</span></li>
                                <li>Hours in space: ${astronaut.hoursInSpace}</li>
                                <li>Skills: ${astronaut.skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${astronaut.picture}>
                    </div>`;
                }
                const count = document.getElementById("astroCount");
                count.innerHTML = `Total Count: ${astronauts.length}`;

            });
        });
    }

window.addEventListener("load", init);

