const axios = require('axios');

// Define the API URL
const api_url = "https://pokeapi.co/api/v2/pokemon/ditto";

// Send a GET request to the API
axios.get(api_url)
  .then(function (response) {
    // Check if the request was successful (HTTP status code 200)
    if (response.status === 200) {
      // Extract and print the JSON response data
      const data = response.data;
      console.log("Pokemon Name:", data.name);
      console.log("Abilities:", data.abilities.map(ability => ability.ability.name));
    } else {
      console.log("Failed to retrieve data from the API. Status Code:", response.status);
    }
  })
  .catch(function (error) {
    console.error("An error occurred:", error);
  });
