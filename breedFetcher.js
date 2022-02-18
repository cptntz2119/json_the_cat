const request = require("request");
// const argv = process.argv.slice(2);
// const breedName = argv[0];
//console.log(breedName);
const fetchBreedDescription = (breedName, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    function(error, response, body) {
      if (error) {
        callback("error", null); // Print the error if one occurred
      }

      const data = JSON.parse(body);
      if (data[0]) {
        // if there is such breed, data is not []
        let desc = data[0].description;
        return callback(null, desc);
      } else {
        return callback("no such breed", null);
      }
    }
  );
};
//fetchBreedDescription(breedName);

module.exports = { fetchBreedDescription };
