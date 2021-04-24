const {
  PHASE_PRODUCTION_BUILD,
  PHASE_DEVELOPMENT_SERVER
} = require('next/constants');
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load')

dotenvLoad();

const withEnv = nextEnv();

module.exports = withEnv({})
// module.exports = (phase, { defaultConfig }) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     console.log("In DEV MODE");
//     return defaultConfig;
//   }
//   return defaultConfig;
// }
