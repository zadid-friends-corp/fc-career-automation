const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseURL: 'https://example.mailosaur.com/',
    defaultCommandTimeout: 15000,
    testIsolation: false,
    env:{
      "MAILOSAUR_API_KEY": 'gmBWcbFeWl0mnhBWhIHlSNDOjybGCtD3',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
