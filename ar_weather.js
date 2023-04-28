let coordinates = {}
$(document).ready(function(){
    get_weather();
})

function get_weather(){
    $.ajax({
        url: `ttps://api.openweathermap.org/data/2.5/weather?lat={26.6406}&lon={81.8723}&appid=74d26700f52a77eaa603293fd4fdc90a`,
        type: "get",
        success: function (response) {
            let name = response.name
            let weather = response.weather[0].main
            $("#scene-container").append(
                `
                    <a-entity gps-entity-place="latitude: ${steps[i].maneuver.location[1]}; longitude: ${steps[i].maneuver.location[0]};">
                        <a-entity>
                            <a-text height="50" value="Weather forcast is ${weather} at ${name}"></text>
                        </a-entity>
                    </a-entity>
                `
            )
        }
    })
}