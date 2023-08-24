const findCountriesByNameService = require("../services/country/findCountriesByName");
const findCountriesByName = async (req, res) => {
  const { name } = req.query;
  const countries = await findCountriesByNameService(name);
  return res.status(200).send({ status: "OK", data: countries.data })
}

module.exports = {
  findCountriesByName,
}