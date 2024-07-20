// config-overrides.js
module.exports = function override(config, env) {
    config.ignoreWarnings = [/Failed to parse source map/];
    return config;
  };