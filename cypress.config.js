const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*spec.{js,ts}',
    pageLoadTimeout: 30000,
    
    chromeWebSecurity: false,
    viewportHeight:600,
    viewportWidth:1000
  },
});