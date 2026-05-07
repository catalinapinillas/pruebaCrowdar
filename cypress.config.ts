import { defineConfig } from "cypress";

import mochawesomeReportPlugin from "cypress-mochawesome-reporter/plugin";

export default defineConfig({
  allowCypressEnv: false,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Reporte de Pruebas - SauceDemo",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      mochawesomeReportPlugin(on);
      return config;
    },
    video: true,
    screenshotOnRunFailure: true,
    viewportWidth: 1280,
    viewportHeight: 720,
    baseUrl: "https://www.saucedemo.com",
  },
});
