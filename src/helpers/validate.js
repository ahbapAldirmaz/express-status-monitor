const defaultConfig = require('./default-config');

module.exports = config => {
  if (!config) {
    return defaultConfig;
  }

  const mungeChartVisibility = configChartVisibility => {
    Object.keys(defaultConfig.chartVisibility).forEach(key => {
      if (configChartVisibility[key] === false) {
        defaultConfig.chartVisibility[key] = false;
      }
    });
    return defaultConfig.chartVisibility;
  };

  config.title =
    typeof config.title === 'string' ? config.title : defaultConfig.title;
  config.path =
    typeof config.path === 'string' ? config.path : defaultConfig.path;
  config.spans =
    typeof config.spans === 'object' ? config.spans : defaultConfig.spans;
  config.port =
    typeof config.port === 'number' ? config.port : defaultConfig.port;
  config.websocket =
    typeof config.websocket === 'object'
      ? config.websocket
      : defaultConfig.websocket;
  config.iframe =
    typeof config.iframe === 'boolean' ? config.iframe : defaultConfig.iframe;
  config.chartVisibility =
    typeof config.chartVisibility === 'object'
      ? mungeChartVisibility(config.chartVisibility)
      : defaultConfig.chartVisibility;
  config.ignoreStartsWith =
    typeof config.path === 'string'
      ? config.ignoreStartsWith
      : defaultConfig.ignoreStartsWith;

  return config;
};
