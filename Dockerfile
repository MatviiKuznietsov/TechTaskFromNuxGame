# Official Playwright image with Node.js and browsers (Chromium, Firefox, WebKit)
# https://playwright.dev/docs/docker
FROM mcr.microsoft.com/playwright:v1.58.0-noble

WORKDIR /app

# Copy only dependency files
COPY package.json package-lock.json ./

# Install dependencies (browsers are already in the image, playwright install is not needed)
RUN npm ci

# Copy source code and tests
COPY . .

# CI/DOCKER — headless mode, report in playwright-report/
ENV CI=true

# Run e2e tests; report is saved in ./playwright-report (mounted to the host)
CMD ["npm", "run", "test:e2e"]