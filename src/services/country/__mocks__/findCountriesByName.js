const countries = require("../../../../tests/mock/countries.data");
const findCountriesByName = (name) => {
  if (!name) {
    throw new Error('Something wrong');
  }
  return {
    data: countries,
  };
}

module.exports = findCountriesByName;