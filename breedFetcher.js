const request = require("request");
const argv = process.argv.slice(2);
breedName = argv[0];
//console.log(breedName);
const breedFetcher = (breedName) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    function (error, response, body) {
      if (error) {
        console.error("error:", error); // Print the error if one occurred
      }

      if (response && response.statusCode === 200) {
        const data = JSON.parse(body);
        if (data[0]) {
          console.log(data[0].description);
        } else {
          console.log("no such breed ");
        }
      }
    }
  );
};
breedFetcher(breedName);
