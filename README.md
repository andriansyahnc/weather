## Weather

### Prerequisites
1. run `npm install`

### How to install
1. run `cp .env.example .env`
2. run `npm run start`

### How to test
1. run `npm run test` or `npm run test:coverage` if you want to generate coverage.
2. if you want to check coverage, please look into: `coverage/lcov-report/index.html` and open it in the browser.

### UI
1. Open `http://localhost:3000` 
2. Search for a city
3. Click one of the list
4. click submit


### DB structure
I created 2 main table.
1. city
2. forecast
city is to save city data, which has city, name, lat, lon, country
forecast is to save weather data, which has temperature, weather description, weather icon, and the date start and date finished.