const path = require("path");

module.exports = function override(config, env) {
  Object.assign(config.resolve.alias, {
    "@": path.resolve(__dirname, "./src"),
    "%": path.resolve(__dirname, "./src/css/")
  });


  return config;
};
