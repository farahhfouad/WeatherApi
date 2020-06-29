// Personal API Key for OpenWeatherMap API
const ApiKey = 'b04f433778d7a6d96e7666d5b69ea956';
const BaseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performWeath);

/* Function called by event listener */
function performWeath(e) {
    let zipcode = document.getElementById('zip').value;
    let countryCode = document.getElementById('country').value;
    let date = new Date();
    let currDate = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
    let feeling = document.getElementById('feelings').value;
    getWeather(BaseUrl, zipcode, countryCode, ApiKey)
        .then(function (data) {
            console.log("data in line 14", data.main.temp);
            postWeather('/weather', { temp: data.main.temp, date: currDate, userRes: feeling });

        }

        ).then(
            () => updateUI()
        );
}

/* Function to GET Web API Data*/
const getWeather = async (BaseUrl, zipcode, countryCode, ApiKey) => {
    const res = await fetch(BaseUrl + zipcode + "," + countryCode + "&appid=" + ApiKey);

    try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch (e) {
        console.log("Error: " + e);
    }
}
// .then(postWeather());


const postWeather = async (url = '', data = {}) => {
    const resp = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const data = await resp.json();
        console.log(data);
        return data;

    } catch (e) {
        console.log("Error: " + e);
    }

};

/* Function to POST data */
// postWeather('/weather', { temperature: '20', date: "20", userRespon: 'ok' });
console.log("done");


/* Function to GET Project Data */
const updateUI = async () => {
    const data = await fetch('/all');


    try {
        const res = await data.json();
        document.getElementById('date').innerHTML = res[res.length - 1].date;
        document.getElementById('temp').innerHTML = res[res.length - 1].temp;
        document.getElementById('content').innerHTML = res[res.length - 1].userRes;

    } catch (e) {
        console.log("Error: " + e);
    }





}