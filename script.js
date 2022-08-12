window.addEventListener("load", function(){
    const weatherEndPoint = "https://handlers.education.launchcode.org/static/astronauts.json";

    const fetchPromise = fetch(weatherEndPoint);

    let temp;

    fetchPromise.then(function(response){
        response.json().then(function(data){
            console.log(data);
        });
    });
});

