
  const { defineConfig } = require('cypress');
  
  module.exports = defineConfig({
      e2e: {
          baseUrl: 'https://www.lambdatest.com/selenium-playground/',

          experimentalWebKitSupport: true,
          includeShadowDom: true,
          viewportHeight: 960,
          viewportWidth: 1530,
          defaultCommandTimeout:13000,
          setupNodeEvents(on, config) {
            // implement node event listeners here
          },
      },
  });
