const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "SOPRA test",
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  reporterOptions: {
    charts: true,
    reportPageTitle: "sopra",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    "overwrite": false,
    "html": true,
    "json": true,
    "reportDir": "report/mochawesome-report"
  },
});
