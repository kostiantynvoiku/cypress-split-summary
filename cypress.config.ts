import { defineConfig } from "cypress"
import cypressSplit from 'cypress-split'


export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cypressSplit(on, config)
    },
    supportFile: false,
  },
  watchForFileChanges: false,
  chromeWebSecurity: false,
})
