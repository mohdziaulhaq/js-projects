// const api_url = "https://icanhazdadjoke.com/";
const api_url = "https://v2.jokeapi.dev/joke/Programming,Dark?type=single";

// function to get a joke
async function getJoke(){
    const response = await fetch(api_url,{
        headers: {
            'Accept': 'application/json'
        }
    });
    const data = await response.json();
    document.getElementById('joke').innerText = data.joke;
}

// event listener to listen to new joke button
document.getElementById("jokeBtn").addEventListener("click", ()=>{
    getJoke();
})

// calling the getJoke function to get joke on start of app
getJoke();