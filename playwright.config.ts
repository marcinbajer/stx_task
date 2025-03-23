import { defineConfig, devices } from '@playwright/test';

require('dotenv').config();

export default defineConfig({
  timeout: 10000,
  globalTimeout: 60000,

  expect: {
    timeout: 2000
  },

  retries: 1,
  reporter: 'html',

  use: {
    baseURL: 'https://www.stxnext.com/',
    headless: false,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'stx',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://www.stxnext.com/',
        viewport: {width: 1920, height: 1080}
      },
    },
    {
      name: 'dev',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'http://localhost:4200/'
      },
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ]
});
