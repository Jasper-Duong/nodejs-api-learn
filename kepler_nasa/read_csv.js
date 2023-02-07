const { parse } = require("csv-parse");
const fs = require("fs");

const isHabitable = (planet) => {
  return (
    planet.koi_disposition === "CONFIRMED" &&
    planet.koi_insol < 1.11 &&
    planet.koi_insol > 0.36 &&
    planet.koi_prad < 1.6
  );
};

// column:true -> 1 row ~ 1 js object
const csv2JSON = (path, parseConfig = { comment: "#", columns: true }) => {
  const result = [];

  fs.createReadStream(path)
    .pipe(parse(parseConfig)) // readable.pipe(writable)
    .on("data", (chunk) => {
      if (isHabitable(chunk)) {
        result.push(chunk);
      }
    })
    .on("error", (error) => {
      console.log(error);
    })
    .on("end", () => {
      console.log(`${result.length} habitable planet(s) found`);
      console.log(result.map(planet => planet.kepler_name));
    });
  return result;
};

module.exports = { csv2JSON };
