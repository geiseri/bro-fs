module.exports = function (config) {
  config.set({
    browsers: [
      'ChromeUnlimitedStorage',
      'ChromeCanaryUnlimitedStorage'
    ],
    customLaunchers: {
      ChromeUnlimitedStorage: {
        base: 'Chrome',
        flags: ['--unlimited-storage']
      },
      ChromeCanaryUnlimitedStorage: {
        base: 'ChromeCanary',
        flags: ['--unlimited-storage']
      },
    },
    frameworks: ['mocha', 'chai-as-promised', 'chai-shallow-deep-equal', 'chai'],
    // reporters: ['mocha'],
    files: ['test/**'],
    preprocessors: {
      'test/**': ['webpack', 'sourcemap']
    },
    webpack: {
      devtool: 'inline-source-map'
    },
    autoWatch: true,
    singleRun: false,
    // logLevel: config.LOG_DEBUG,
  });
};
