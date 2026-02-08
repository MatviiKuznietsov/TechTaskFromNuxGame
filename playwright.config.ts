import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

const isCI = process.env.CI === 'true' || process.env.DOCKER === 'true';

const config = defineConfig({
    testDir: './tests',
    fullyParallel: false,
    workers: isCI ? 1 : 2,
    retries: isCI ? 1 : 1,
    reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
    outputDir: 'test-results',
    use: {
        baseURL: 'https://en.wikipedia.org/wiki/Main_Page',
        browserName: 'chromium',
        ...(isCI ? {} : { channel: 'chrome' }),
        headless: true,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        viewport: { width: 1536, height: 864 },
        userAgent:
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (HTML, like Gecko) ' +
            'Chrome/138.0.7204.158 Safari/537.36',
        launchOptions: {
            slowMo: isCI ? 0 : 100,
        },
    },
    projects: [
        {
            name: 'e2e tests',
            testMatch: [/tests\/e2e\/.*\.spec\.ts/],
            use: {
                ...devices['Desktop Chrome'],
                viewport: { width: 1536, height: 864 },
            },
        },
    ],
});

export default config;